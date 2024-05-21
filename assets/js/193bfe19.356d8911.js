"use strict";(self.webpackChunkwhoopsunix_wiki=self.webpackChunkwhoopsunix_wiki||[]).push([[6953],{23880:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var s=n(85893),i=n(11151);const t={sidebar_position:1,tags:["CVE","Dubbo","Deserialization","Kryo","FST"]},r="CVE-2021-25641 \u53ef\u4fe1\u6570\u636e\u53cd\u5e8f\u5217\u5316\uff08\u5f31\u9a8c\u8bc1\u5668\uff09GHSL-2021-035",c={id:"components/Dubbo/CVE-2021-25641",title:"CVE-2021-25641 \u53ef\u4fe1\u6570\u636e\u53cd\u5e8f\u5217\u5316\uff08\u5f31\u9a8c\u8bc1\u5668\uff09GHSL-2021-035",description:"\u6982\u8ff0",source:"@site/docs/03-components/Dubbo/CVE-2021-25641.md",sourceDirName:"03-components/Dubbo",slug:"/components/Dubbo/CVE-2021-25641",permalink:"/docs/components/Dubbo/CVE-2021-25641",draft:!1,unlisted:!1,editUrl:"https://github.com/Whoopsunix/whoopsunix.github.io/docs/03-components/Dubbo/CVE-2021-25641.md",tags:[{label:"CVE",permalink:"/docs/tags/cve"},{label:"Dubbo",permalink:"/docs/tags/dubbo"},{label:"Deserialization",permalink:"/docs/tags/deserialization"},{label:"Kryo",permalink:"/docs/tags/kryo"},{label:"FST",permalink:"/docs/tags/fst"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["CVE","Dubbo","Deserialization","Kryo","FST"]},sidebar:"tutorialSidebar",previous:{title:"CVE-2020-1948 Apache Dubbo Provider dubbo\u534f\u8bae\u53cd\u5e8f\u5217\u5316\u6f0f\u6d1e",permalink:"/docs/components/Dubbo/CVE-2020-1948"},next:{title:"CVE-2021-30179 Apache Dubbo Generic filter \u8fdc\u7a0b\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e GHSL-2021-037 GHSL-2021-038",permalink:"/docs/components/Dubbo/CVE-2021-30179"}},a={},d=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u5f71\u54cd\u7248\u672c",id:"\u5f71\u54cd\u7248\u672c",level:3},{value:"\u590d\u73b0\u5206\u6790",id:"\u590d\u73b0\u5206\u6790",level:2},{value:"\u5173\u4e8e kryo \u60f3\u5230\u7684",id:"\u5173\u4e8e-kryo-\u60f3\u5230\u7684",level:2}];function l(e){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.h1,{id:"cve-2021-25641-\u53ef\u4fe1\u6570\u636e\u53cd\u5e8f\u5217\u5316\u5f31\u9a8c\u8bc1\u5668ghsl-2021-035",children:"CVE-2021-25641 \u53ef\u4fe1\u6570\u636e\u53cd\u5e8f\u5217\u5316\uff08\u5f31\u9a8c\u8bc1\u5668\uff09GHSL-2021-035"}),"\n",(0,s.jsx)(o.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,s.jsx)(o.h3,{id:"\u5f71\u54cd\u7248\u672c",children:"\u5f71\u54cd\u7248\u672c"}),"\n",(0,s.jsx)(o.p,{children:"[2.5.0, 2.6.8]\u3001[2.7.0, 2.7.7]"}),"\n",(0,s.jsx)(o.h2,{id:"\u590d\u73b0\u5206\u6790",children:"\u590d\u73b0\u5206\u6790"}),"\n",(0,s.jsxs)(o.p,{children:["\u9996\u5148\u770b\u4e00\u4e0b ",(0,s.jsx)(o.a,{href:"https://lists.apache.org/thread/g129y1xjtcxswjj506pvzmlbzfvtmsqw",children:"\u6f0f\u6d1e\u62ab\u9732\u90ae\u4ef6"})," \u662f\u8fd9\u6837\u63cf\u8ff0\u7684\uff0c\u53ef\u4ee5\u901a\u8fc7\u7be1\u6539\u5b57\u8282\u524d\u6807\u5fd7\u6765\u66f4\u6539 Provider \u7684\u5e8f\u5217\u5316 ID\uff0c\u4f7f\u5176\u4f7f\u7528\u5f31\u9a8c\u8bc1\u5668\uff08Kryo\u3001FST\uff09\u6765\u53cd\u5e8f\u5217\u5316\u3002"]}),"\n",(0,s.jsxs)(o.p,{children:["\u524d\u9762\u5206\u6790\u8fc7 CVE-2020-1948\uff0c\u540c\u6837\u662f dubbo \u7684 RPC \u901a\u4fe1\uff0c\u6240\u4ee5\u8fd8\u662f\u5728\u540c\u6837\u7684\u4f4d\u7f6e\u6253\u4e2a\u65ad\u70b9\u5206\u6790 ",(0,s.jsx)(o.code,{children:"org.apache.dubbo.rpc.protocol.dubbo.DecodeableRpcInvocation.decode()"})," \uff0c\u6839\u636e\u5ba2\u6237\u7aef\u4f20\u5165\u7684\u6807\u5fd7\u4f4d\u83b7\u53d6\u5230 ",(0,s.jsx)(o.code,{children:"KryoObjectInput"})," \u7528\u4e8e\u53cd\u5e8f\u5217\u5316\u3002"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"image-20240201115112958",src:n(39363).Z+"",width:"1896",height:"1120"})}),"\n",(0,s.jsxs)(o.p,{children:["\u518d\u8ddf\u8fdb\u540e\u5c31\u662f ",(0,s.jsx)(o.code,{children:"Map.equals() "})," \u89e6\u53d1\u7684\u5e38\u89c4\u64cd\u4f5c\u4e0d\u518d\u8d58\u8ff0\u3002"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"image-20240201115213032",src:n(11383).Z+"",width:"1868",height:"1016"})}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.code,{children:"FSTObjectInput"})," \u6700\u540e\u4e5f\u662f\u8c03\u7528\u7684\u4e00\u4e2a ",(0,s.jsx)(o.code,{children:"MapSerializer"})," \u4e0d\u518d\u8d58\u8ff0\u3002"]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"image-20240201115420835",src:n(94702).Z+"",width:"1704",height:"474"})}),"\n",(0,s.jsx)(o.h2,{id:"\u5173\u4e8e-kryo-\u60f3\u5230\u7684",children:"\u5173\u4e8e kryo \u60f3\u5230\u7684"}),"\n",(0,s.jsx)(o.p,{children:"\u8fd9\u4e2a\u6f0f\u6d1e\u590d\u73b0\u7684\u65f6\u5019\u4f7f\u7528\u7684\u662f dubbo-common <= 2.7.3 \u7684\u7248\u672c\uff0c\u4e4b\u540e\u7684\u7248\u672c\u4e2d\u5c11\u4e86\u8fd9\u51e0\u4e2a\u5173\u952e\u5305\u65e0\u6cd5\u5229\u7528\u3002\u6240\u4ee5\u672c\u8d28\u4e0a\u8fd8\u662f\u56e0\u4e3a\u5f15\u5165\u4e86 Kryo \u4ea7\u751f\u7684\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.img,{alt:"image-20240201002015109",src:n(30635).Z+"",width:"588",height:"122"})}),"\n",(0,s.jsx)(o.p,{children:"Kryo \u4e5f\u662f\u57fa\u4e8e Java \u539f\u751f\u7684\u5e8f\u5217\u5316\u673a\u5236\u6765\u5b9e\u73b0\u7684\uff0c\u6765\u6539\u8fdb Java \u539f\u751f\u7684\u5e8f\u5217\u5316\u673a\u5236\u3002\u4e0e Hessian \u4e0d\u540c\uff0cKryo \u7684\u5e95\u5c42\u4f9d\u8d56\u4e8e ASM\uff0c\u6240\u4ee5\u9650\u5236\u4e86\u53ea\u80fd\u8fd0\u7528\u5728 JVM \u4e0a\uff0c\u4f46\u4e5f\u7ed9 Kryo \u5e26\u6765\u4e86\u9ad8\u6548\u7387\u7684\u4f18\u52bf\u3002Kryo \u5e7f\u6cdb\u7684\u8fd0\u7528\u5728\u5404\u4e2a\u7ec4\u4ef6\u4e2d\uff08Apache Spark\u3001Apache Storm\u3001Akka\u3001Kafka\u3001Apache Flink\uff09\uff0c\u57cb\u4e2a\u5751\u4e0b\u4e00\u6b65\u7814\u7a76\u8fd9\u4e2a\u3002"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"\u53c2\u8003"})}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"https://github.com/Dor-Tumarkin/CVE-2021-25641-Proof-of-Concept",children:"https://github.com/Dor-Tumarkin/CVE-2021-25641-Proof-of-Concept"})}),"\n"]})]})}function p(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},30635:(e,o,n)=>{n.d(o,{Z:()=>s});const s=n.p+"assets/images/image-20240201002015109-27fc2e97626f001b8c19fe479949b73f.png"},39363:(e,o,n)=>{n.d(o,{Z:()=>s});const s=n.p+"assets/images/image-20240201115112958-45db1a94f6fecff9bd6344448a298389.png"},11383:(e,o,n)=>{n.d(o,{Z:()=>s});const s=n.p+"assets/images/image-20240201115213032-766575b3f0bb8f8f33454330aa286680.png"},94702:(e,o,n)=>{n.d(o,{Z:()=>s});const s=n.p+"assets/images/image-20240201115420835-af9a6a74195d0a772e12f28609c6d3cd.png"},11151:(e,o,n)=>{n.d(o,{Z:()=>c,a:()=>r});var s=n(67294);const i={},t=s.createContext(i);function r(e){const o=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:o},e.children)}}}]);