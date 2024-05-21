"use strict";(self.webpackChunkwhoopsunix_wiki=self.webpackChunkwhoopsunix_wiki||[]).push([[9014],{52464:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=s(85893),n=s(11151);const o={sidebar_position:1,tags:["CVE","Dubbo","Deserialization","NashornScriptEngine"]},r="CVE-2021-30181 Apache Dubbo cluster scriptEngine pre-auth \u4ee3\u7801\u6267\u884c\u6f0f\u6d1e GHSL-2021-042",c={id:"components/Dubbo/CVE-2021-30181",title:"CVE-2021-30181 Apache Dubbo cluster scriptEngine pre-auth \u4ee3\u7801\u6267\u884c\u6f0f\u6d1e GHSL-2021-042",description:"\u6982\u8ff0",source:"@site/docs/03-components/Dubbo/CVE-2021-30181.md",sourceDirName:"03-components/Dubbo",slug:"/components/Dubbo/CVE-2021-30181",permalink:"/docs/components/Dubbo/CVE-2021-30181",draft:!1,unlisted:!1,editUrl:"https://github.com/Whoopsunix/whoopsunix.github.io/docs/03-components/Dubbo/CVE-2021-30181.md",tags:[{label:"CVE",permalink:"/docs/tags/cve"},{label:"Dubbo",permalink:"/docs/tags/dubbo"},{label:"Deserialization",permalink:"/docs/tags/deserialization"},{label:"NashornScriptEngine",permalink:"/docs/tags/nashorn-script-engine"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["CVE","Dubbo","Deserialization","NashornScriptEngine"]},sidebar:"tutorialSidebar",previous:{title:"CVE-2021-30180 Apache Dubbo Tag routing Yaml pre-auth \u53cd\u5e8f\u5217\u5316\u6f0f\u6d1e GHSL-2021-040\u3001GHSL-2021-041\u3001GHSL-2021-043",permalink:"/docs/components/Dubbo/CVE-2021-30180"},next:{title:"CVE-2021-32824 Telnet Handler \u53cd\u5e8f\u5217\u5316 GHSL-2021-039",permalink:"/docs/components/Dubbo/CVE-2021-32824"}},a={},d=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u5f71\u54cd\u7248\u672c",id:"\u5f71\u54cd\u7248\u672c",level:3},{value:"\u590d\u73b0\u5206\u6790",id:"\u590d\u73b0\u5206\u6790",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"cve-2021-30181-apache-dubbo-cluster-scriptengine-pre-auth-\u4ee3\u7801\u6267\u884c\u6f0f\u6d1e-ghsl-2021-042",children:"CVE-2021-30181 Apache Dubbo cluster scriptEngine pre-auth \u4ee3\u7801\u6267\u884c\u6f0f\u6d1e GHSL-2021-042"}),"\n",(0,i.jsx)(t.h2,{id:"\u6982\u8ff0",children:"\u6982\u8ff0"}),"\n",(0,i.jsx)(t.h3,{id:"\u5f71\u54cd\u7248\u672c",children:"\u5f71\u54cd\u7248\u672c"}),"\n",(0,i.jsx)(t.p,{children:"[2.5.0, 2.6.9]\u3001[2.7.0, 2.7.9]"}),"\n",(0,i.jsx)(t.h2,{id:"\u590d\u73b0\u5206\u6790",children:"\u590d\u73b0\u5206\u6790"}),"\n",(0,i.jsxs)(t.p,{children:["\u9996\u5148\u770b\u4e00\u4e0b ",(0,i.jsx)(t.a,{href:"https://lists.apache.org/thread/xxfk15q85hwy33v84tvvmoz3mp7cvw68",children:"\u6f0f\u6d1e\u62ab\u9732\u90ae\u4ef6"})," \u662f\u8fd9\u6837\u63cf\u8ff0\u7684\uff0cDubbo \u652f\u6301 Script \u8def\u7531\u914d\u7f6e\uff0c\u8fd9\u4e9b\u914d\u7f6e\u88ab\u52a0\u8f7d\u5230\u914d\u7f6e\u4e2d\u5fc3\uff08Zookeeper, Nacos\u7b49\uff09\u3002customer \u53d1\u8d77\u8bf7\u6c42\u65f6\u5c06\u9ed8\u8ba4\u4f7f\u7528\u4e0d\u5b89\u5168\u7684 ScriptEngine \u89e3\u6790\uff0c\u6240\u4ee5\u8fd8\u662f\u4e00\u4e2a\u9884\u6388\u6743\u7684\u4ee3\u7801\u6267\u884c\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u5728 ",(0,i.jsx)(t.code,{children:"org.apache.dubbo.rpc.cluster.router.script.ScriptRouter#route()"})," \u4e2d\u5b58\u5728\u672a\u7ecf\u9a8c\u8bc1\u7684\u4ee3\u7801\u6267\u884c\u3002"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image-20240204154259883",src:s(93568).Z+"",width:"1908",height:"660"})}),"\n",(0,i.jsxs)(t.p,{children:["\u800c\u5728 ",(0,i.jsx)(t.code,{children:"org.apache.dubbo.rpc.cluster.directory.AbstractDirectory"})," \u7684 ",(0,i.jsx)(t.code,{children:"list()"})," \u65b9\u6cd5\u5b9e\u73b0\u4e86\u5bf9\u8def\u7531 ",(0,i.jsx)(t.code,{children:"Router"})," \u7684\u7ba1\u7406\uff0c\u5e76\u5b9e\u73b0\u4e86\u76f8\u5e94\u7684\u903b\u8f91\u3002"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image-20240204155545037",src:s(39953).Z+"",width:"1474",height:"334"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"org.apache.dubbo.registry.integration.RegistryDirectory"})," \u662f ",(0,i.jsx)(t.code,{children:"AbstractDirectory"})," \u7684\u7ee7\u627f\uff0c\u91cd\u5199\u4e86 ",(0,i.jsx)(t.code,{children:"doList()"})," \u65b9\u6cd5\uff0c\u5b9e\u73b0\u5bf9 router \u7684\u7ba1\u7406\u3002"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image-20240204161532135",src:s(92475).Z+"",width:"1710",height:"384"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image-20240204161642954",src:s(83999).Z+"",width:"1962",height:"748"})}),"\n",(0,i.jsxs)(t.p,{children:["\u53c8\u5b9e\u73b0\u4e86 ",(0,i.jsx)(t.code,{children:"NotifyListener"})," \u63a5\u53e3\uff0c\u6240\u4ee5\u4e00\u6837\u662f\u5b58\u5728 ",(0,i.jsx)(t.code,{children:"notify()"})," \u5728\u53d1\u751f\u53d8\u52a8\u65f6\u80fd\u901a\u77e5 consumer"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"image-20240204161617494",src:s(54629).Z+"",width:"1554",height:"266"})}),"\n",(0,i.jsxs)(t.p,{children:["\u8fd9\u4e2a payload \u9700\u8981\u6ce8\u610f\u7684\u662f\u6ce8\u518c\u4e2d\u5fc3\u7684 url \u5fc5\u987b\u6ee1\u8db3\u683c\u5f0f\uff0c\u5177\u4f53\u8981\u6c42\u53ef\u4ee5\u5728 ",(0,i.jsx)(t.code,{children:"org.apache.dubbo.registry.zookeeper.ZookeeperRegistry#toUrlsWithoutEmpty()"})," \u548c ",(0,i.jsx)(t.code,{children:"org.apache.dubbo.common.utils.UrlUtils#isMatch()"})," \u8fd9\u4e24\u4e2a\u65b9\u6cd5\u6253\u65ad\u70b9\u81ea\u5df1\u8c03\u8bd5\uff0c\u5c31\u4e0d\u662f\u5f88\u60f3\u8d58\u8ff0\u4e86\u3002"]})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},93568:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/image-20240204154259883-63f7509e65d0ae3fff8f5e76fc24ffbb.png"},39953:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/image-20240204155545037-219b9f07524098900e486ff720b814b5.png"},92475:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/image-20240204161532135-aa3d6f7665217b38e8d9d4b3f1b84d40.png"},54629:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/image-20240204161617494-7668deaceca3865b2e7a92085ad38e3a.png"},83999:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/image-20240204161642954-ca4a9cfd318214ecac2acf980dc94ed2.png"},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>r});var i=s(67294);const n={},o=i.createContext(n);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);