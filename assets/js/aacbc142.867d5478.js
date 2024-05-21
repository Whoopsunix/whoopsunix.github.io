"use strict";(self.webpackChunkwhoopsunix_wiki=self.webpackChunkwhoopsunix_wiki||[]).push([[5561],{71533:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>j,frontMatter:()=>r,metadata:()=>l,toc:()=>t});var c=n(85893),o=n(11151);const r={sidebar_position:1,tags:["ysoserial","PPPYSO","Clojure"]},i="Clojure",l={id:"PPPYSO/gadgets/Clojure/Clojure",title:"Clojure",description:"Clojure1",source:"@site/docs/01-PPPYSO/01-gadgets/13-Clojure/13-Clojure.md",sourceDirName:"01-PPPYSO/01-gadgets/13-Clojure",slug:"/PPPYSO/gadgets/Clojure/",permalink:"/docs/PPPYSO/gadgets/Clojure/",draft:!1,unlisted:!1,editUrl:"https://github.com/Whoopsunix/whoopsunix.github.io/docs/01-PPPYSO/01-gadgets/13-Clojure/13-Clojure.md",tags:[{label:"ysoserial",permalink:"/docs/tags/ysoserial"},{label:"PPPYSO",permalink:"/docs/tags/pppyso"},{label:"Clojure",permalink:"/docs/tags/clojure"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["ysoserial","PPPYSO","Clojure"]},sidebar:"tutorialSidebar",previous:{title:"Groovy",permalink:"/docs/PPPYSO/gadgets/Groovy/"},next:{title:"Myfaces",permalink:"/docs/PPPYSO/gadgets/Myfaces/"}},a={},t=[{value:"Clojure1",id:"clojure1",level:2},{value:"0x01 clojure.java.shell$sh",id:"0x01-clojurejavashellsh",level:3},{value:"0x02 clojure.main$eval_opt",id:"0x02-clojuremaineval_opt",level:3},{value:"0x03 AbstractTableModel$ff19274a",id:"0x03-abstracttablemodelff19274a",level:3},{value:"0x04 clojure.core$comp$fn__4727",id:"0x04-clojurecorecompfn__4727",level:3},{value:"0x05 core$constantly$fn__4614",id:"0x05-coreconstantlyfn__4614",level:3},{value:"Clojure2",id:"clojure2",level:2},{value:"0x01 Iterate",id:"0x01-iterate",level:3}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h1,{id:"clojure",children:"Clojure"}),"\n",(0,c.jsx)(s.h2,{id:"clojure1",children:"Clojure1"}),"\n",(0,c.jsx)(s.h3,{id:"0x01-clojurejavashellsh",children:"0x01 clojure.java.shell$sh"}),"\n",(0,c.jsxs)(s.p,{children:["Clojure \u662f LISP \u5728 Java \u7684\u5b9e\u73b0\uff0c\u662f\u76f4\u63a5\u8fd0\u884c\u5728 JVM \u4e0a\u7684\uff0c\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528 Java \u7684\u7c7b\u548c\u65b9\u6cd5\uff0c\u4ee5\u4e0b\u4f8b\u5b50\u4e2d\u4f7f\u7528\u4e86 Clojure \u63d0\u4f9b\u7684 Java API\uff0c\u901a\u8fc7 ",(0,c.jsx)(s.code,{children:"clojure.java.api.Clojure"})," \u7c7b\u6765\u52a0\u8f7d Clojure \u7684\u6838\u5fc3\u547d\u540d\u7a7a\u95f4\uff0c\u5e76\u4f7f\u7528 ",(0,c.jsx)(s.code,{children:"IFunction"})," \u63a5\u53e3\u6765\u83b7\u53d6 Clojure \u4e2d\u7684\u51fd\u6570\u6267\u884c\u547d\u4ee4\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-java",children:'public class ClojureTest {\n    public static void main(String[] args) {\n        // \u52a0\u8f7d Clojure \u6838\u5fc3\u547d\u540d\u7a7a\u95f4\n        IFn require = Clojure.var("clojure.core", "require");\n        require.invoke(Clojure.read("clojure.java.shell"));\n\n        // \u83b7\u53d6 Clojure \u7684 sh \u51fd\u6570\n        IFn sh = Clojure.var("clojure.java.shell", "sh");\n\n        // \u6267\u884c\u547d\u4ee4\n        String command = "whoami";\n        Object result = sh.invoke(command);\n\n        String output = (String) Clojure.var("clojure.core", "str").invoke(result);\n        System.out.println(output);\n    }\n}\n'})}),"\n",(0,c.jsxs)(s.p,{children:["\u8ddf\u8fdb\u4ee5\u4e0b\u53ef\u4ee5\u770b\u5230\u6700\u540e\u771f\u6b63\u7684\u6267\u884c\u4ee3\u7801\u903b\u8f91\u4f4d\u4e8e ",(0,c.jsx)(s.code,{children:"clojure.java.shell$sh.invokeStatic()"})," \u8fd9\u4e2a\u65b9\u6cd5\u4e2d\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u7684\u4f5c\u7528\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u63d0\u4f9b\u4e86\u6267\u884c\u547d\u4ee4\u5e76\u83b7\u53d6\u8f93\u51fa\u7684\u80fd\u529b\uff0c\u76f4\u63a5\u8c03\u7528\u4e86 ",(0,c.jsx)(s.code,{children:"Runtime.exec()"})," \u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{alt:"image-20240306101008283",src:n(61790).Z+"",width:"1394",height:"546"})}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{alt:"image-20240306101018439",src:n(77497).Z+"",width:"1296",height:"402"})}),"\n",(0,c.jsx)(s.h3,{id:"0x02-clojuremaineval_opt",children:"0x02 clojure.main$eval_opt"}),"\n",(0,c.jsxs)(s.p,{children:["\u4e0a\u6587\u7684\u4f8b\u5b50\u4e2d\u6211\u4eec\u52a0\u8f7d\u4e86 ",(0,c.jsx)(s.code,{children:"clojure.core"})," \u6838\u5fc3\u7a7a\u95f4\u6765\u6267\u884c\u547d\u4ee4\uff0c\u8fd8\u6709\u5176\u4ed6\u5199\u6cd5\u4e48\uff0c\u662f\u6709\u7684\u3002\u76f4\u63a5\u7528\u5230 ",(0,c.jsx)(s.code,{children:"clojure.main"})," \u8fd9\u4e2a\u7c7b\u6765\u8c03\u7528\u3002"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-java",children:'public class ClojureTest {\n    public static void main(String[] args) {\n        String cmd = "(use \'[clojure.java.shell :only [sh]]) (sh \\"open\\" \\"-a\\" \\"Calculator.app\\")";;\n        new clojure.main$eval_opt().invoke(cmd);\n    }\n}\n'})}),"\n",(0,c.jsxs)(s.p,{children:["\u8ddf\u8fdb\u4e00\u4e0b ",(0,c.jsx)(s.code,{children:"clojure.main$eval_opt().invoke(cmd)"})," \u505a\u4e86\u4e9b\u4ec0\u4e48\uff0c\u8ddf\u8fdb\u5230 ",(0,c.jsx)(s.code,{children:"clojure.core$eval.invokeStatic()"})," \u8fd9\u4e2a\u65b9\u6cd5\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u7528\u4e8e\u5728 Clojure \u7684\u5185\u90e8\u4f7f\u7528\u4ee5\u4fbf\u5728 Java \u4ee3\u7801\u4e2d\u6267\u884c Clojure \u4ee3\u7801\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{alt:"image-20240306100503956",src:n(68069).Z+"",width:"1410",height:"530"})}),"\n",(0,c.jsx)(s.h3,{id:"0x03-abstracttablemodelff19274a",children:"0x03 AbstractTableModel$ff19274a"}),"\n",(0,c.jsxs)(s.p,{children:["gadget \u5f62\u6210\u7528\u5230\u7684\u662f ",(0,c.jsx)(s.code,{children:"clojure.inspector.proxy$javax.swing.table.AbstractTableModel$ff19274a"})," \u8fd9\u4e2a\u7c7b\uff0c\u8fd9\u4e2a\u7c7b\u662f\u4e00\u4e2a\u533f\u540d\u7c7b\u5b9e\u4f8b\uff0c\u901a\u5e38\u7528\u4e8e GUI \u76f8\u5173\u64cd\u4f5c\uff0c\u662f JackOfMostTrades \u7528 ",(0,c.jsx)(s.a,{href:"https://github.com/JackOfMostTrades/gadgetinspector",children:"gadgetinspector"})," \u6316\u6398\u5f97\u5230\u7684\u94fe\u5b50\uff0c\u5177\u4f53\u53ef\u4ee5\u770b ",(0,c.jsx)(s.a,{href:"https://i.blackhat.com/us-18/Thu-August-9/us-18-Haken-Automated-Discovery-of-Deserialization-Gadget-Chains.pdf",children:"blackhat Automated-Discovery-of-Deserialization-Gadget-Chains"})," \u8fd9\u4e2a\u8bae\u9898\uff0c\u8fd9\u91cc\u5c31\u76f4\u63a5\u5206\u6790\u4e86\u3002"]}),"\n",(0,c.jsxs)(s.p,{children:["\u8fd9\u4e2a\u7c7b\u7684\u6bcf\u4e00\u4e2a\u65b9\u6cd5\u90fd\u662f\u5bf9 ",(0,c.jsx)(s.code,{children:"clojure.lang.IPersistentMap"})," \u7c7b\u578b\u7684\u5bf9\u8c61 ",(0,c.jsx)(s.code,{children:"__clojureFnMap"})," \u8fdb\u884c\u64cd\u4f5c\uff0c\u4ece\u4e2d\u83b7\u53d6\u5bf9\u8c61\uff0c\u518d\u8c03\u7528\u5176 ",(0,c.jsx)(s.code,{children:"invoke()"})," \u65b9\u6cd5\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{alt:"image-20240306104239250",src:n(70498).Z+"",width:"1790",height:"590"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"__clojureFnMap"})," \u901a\u8fc7 ",(0,c.jsx)(s.code,{children:"__initClojureFnMappings()"})," \u65b9\u6cd5\u6307\u5b9a\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{alt:"image-20240306103207696",src:n(2455).Z+"",width:"1700",height:"550"})}),"\n",(0,c.jsx)(s.h3,{id:"0x04-clojurecorecompfn__4727",children:"0x04 clojure.core$comp$fn__4727"}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"clojure.core$comp$fn__4727#invoke()"})," \u65b9\u6cd5\u4e2d\uff0c\u4f1a\u5c06 ",(0,c.jsx)(s.code,{children:"this.g"})," \u8c03\u7528 ",(0,c.jsx)(s.code,{children:"invoke()"})," \u540e\u4ea4\u7ed9 ",(0,c.jsx)(s.code,{children:"this.f"})," \u518d\u6b21\u8c03\u7528 ",(0,c.jsx)(s.code,{children:"invoke()"})," \u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{alt:"image-20240306105217683",src:n(8237).Z+"",width:"1352",height:"388"})}),"\n",(0,c.jsx)(s.h3,{id:"0x05-coreconstantlyfn__4614",children:"0x05 core$constantly$fn__4614"}),"\n",(0,c.jsxs)(s.p,{children:["\u6839\u636e\u4e4b\u524d\u7684\u5206\u6790 ",(0,c.jsx)(s.code,{children:"this.f"})," \u53ef\u4ee5\u5b9a\u4e49\u4e3a ",(0,c.jsx)(s.code,{children:"clojure.main$eval_opt"})," \u5bf9\u8c61\uff0c",(0,c.jsx)(s.code,{children:"this.g"})," \u5e94\u8be5\u4e3a\u9700\u8981\u6267\u884c\u7684\u547d\u4ee4\u3002 ",(0,c.jsx)(s.code,{children:"core$constantly$fn__4614"})," \u8fd9\u4e2a\u7c7b\uff0c\u5728\u8c03\u7528\u5176 ",(0,c.jsx)(s.code,{children:"doInvoke()"})," \u65b9\u6cd5\u65f6\uff0c\u4f1a\u76f4\u63a5\u8fd4\u56de\u5b58\u50a8\u7684\u5bf9\u8c61\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{alt:"image-20240306114338352",src:n(36916).Z+"",width:"1508",height:"606"})}),"\n",(0,c.jsxs)(s.p,{children:["Kick-off \u7684\u89e6\u53d1\u9009\u7528 ",(0,c.jsx)(s.code,{children:"hashCode()"})," \u4e8e\u662f\u9009\u62e9 HashMap"]}),"\n",(0,c.jsx)(s.h2,{id:"clojure2",children:"Clojure2"}),"\n",(0,c.jsx)(s.h3,{id:"0x01-iterate",children:"0x01 Iterate"}),"\n",(0,c.jsxs)(s.p,{children:["\u5728 ",(0,c.jsx)(s.code,{children:"clojure.lang.Iterate.first()"})," \u65b9\u6cd5\u4e2d\u4f1a\u8c03\u7528 ",(0,c.jsx)(s.code,{children:"f.invoke()"})," \uff0c\u8fd9\u4e2a ",(0,c.jsx)(s.code,{children:"f"})," \u662f\u4e00\u4e2a ",(0,c.jsx)(s.code,{children:"clojure.lang.IFn"})," \u63a5\u53e3\u7684\u5b9e\u73b0\u7c7b\uff0c\u6211\u4eec\u524d\u9762\u5206\u6790\u7684 ",(0,c.jsx)(s.code,{children:"core$comp"})," \u5c31\u5b9e\u73b0\u4e86\u8fd9\u4e2a\u63a5\u53e3\uff0c\u6240\u4ee5\u53ea\u9700\u8981\u627e\u89e6\u53d1 ",(0,c.jsx)(s.code,{children:"first()"})," \u7684\u65b9\u6cd5\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{alt:"image-20240312165444765",src:n(25894).Z+"",width:"1608",height:"990"})}),"\n",(0,c.jsxs)(s.p,{children:[(0,c.jsx)(s.code,{children:"Iterate"})," \u8fd8\u7ee7\u627f\u4e86\u62bd\u8c61\u7c7b ",(0,c.jsx)(s.code,{children:"ASeq"})," \u521a\u597d\u63d0\u4f9b\u4e86 ",(0,c.jsx)(s.code,{children:"hashCode()"})," \u65b9\u6cd5\uff0c",(0,c.jsx)(s.code,{children:"seq()"})," \u53c8\u8fd4\u56de\u81ea\u8eab\uff0c\u6240\u4ee5\u5c31\u8fd8\u662f\u7528 HashMap \u8fd9\u4e2a Kick-off \u53bb\u89e6\u53d1\u5c31\u597d\u4e86\u3002"]}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.img,{alt:"image-20240312165907269",src:n(23430).Z+"",width:"1520",height:"604"})}),"\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.strong,{children:"\u53c2\u8003"})}),"\n",(0,c.jsxs)(s.blockquote,{children:["\n",(0,c.jsx)(s.p,{children:(0,c.jsx)(s.a,{href:"https://su18.org/post/ysuserial/",children:"https://su18.org/post/ysuserial/"})}),"\n"]})]})}function j(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},68069:(e,s,n)=>{n.d(s,{Z:()=>c});const c=n.p+"assets/images/image-20240306100503956-fef321beb2cb1334d9a6a859f54dd5f8.png"},61790:(e,s,n)=>{n.d(s,{Z:()=>c});const c=n.p+"assets/images/image-20240306101008283-9627837f0bac0282ad88e3395eb5e0ab.png"},77497:(e,s,n)=>{n.d(s,{Z:()=>c});const c=n.p+"assets/images/image-20240306101018439-2ead73c334a850b0c33d73279761a6bc.png"},2455:(e,s,n)=>{n.d(s,{Z:()=>c});const c=n.p+"assets/images/image-20240306103207696-1d8eb924a42c389217af04911466049d.png"},70498:(e,s,n)=>{n.d(s,{Z:()=>c});const c=n.p+"assets/images/image-20240306104239250-367fe1dd1916ddf072a7c8f8ee9f9196.png"},8237:(e,s,n)=>{n.d(s,{Z:()=>c});const c=n.p+"assets/images/image-20240306105217683-e31ad3470d86b48edf75193a7de86821.png"},36916:(e,s,n)=>{n.d(s,{Z:()=>c});const c=n.p+"assets/images/image-20240306114338352-cd777af7c07c4bee187dd6c229f43643.png"},25894:(e,s,n)=>{n.d(s,{Z:()=>c});const c=n.p+"assets/images/image-20240312165444765-27d303f9ce42ed9bb6d91661cb28553b.png"},23430:(e,s,n)=>{n.d(s,{Z:()=>c});const c=n.p+"assets/images/image-20240312165907269-ec3bb6553f1439909773b0be894b1217.png"},11151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>i});var c=n(67294);const o={},r=c.createContext(o);function i(e){const s=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),c.createElement(r.Provider,{value:s},e.children)}}}]);