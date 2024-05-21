"use strict";(self.webpackChunkwhoopsunix_wiki=self.webpackChunkwhoopsunix_wiki||[]).push([[4574],{8308:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=t(85893),i=t(11151);const o={sidebar_position:1,tags:["ysoserial","PPPYSO","JSON"]},a="JSON",c={id:"PPPYSO/gadgets/JSON/JSON",title:"JSON",description:"\u524d\u9762\u5df2\u7ecf\u5206\u6790\u8fc7 Fastjson \u548c Jackson \u4e86\uff0cysoserial \u4e2d\u7684 JSON1 \u8fd9\u6761\u94fe\u5b50\u540c\u6837\u662f\u7528\u901a\u8fc7\u89e6\u53d1 getter \u7684\u65b9\u5f0f\u6765\u89e6\u53d1\uff0c\u8fd9\u4e0d\u8fc7\u8fd9\u6761\u590d\u6742\u4e00\u70b9\u3002",source:"@site/docs/01-PPPYSO/01-gadgets/07-JSON/07-JSON.md",sourceDirName:"01-PPPYSO/01-gadgets/07-JSON",slug:"/PPPYSO/gadgets/JSON/",permalink:"/docs/PPPYSO/gadgets/JSON/",draft:!1,unlisted:!1,editUrl:"https://github.com/Whoopsunix/whoopsunix.github.io/docs/01-PPPYSO/01-gadgets/07-JSON/07-JSON.md",tags:[{label:"ysoserial",permalink:"/docs/tags/ysoserial"},{label:"PPPYSO",permalink:"/docs/tags/pppyso"},{label:"JSON",permalink:"/docs/tags/json"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["ysoserial","PPPYSO","JSON"]},sidebar:"tutorialSidebar",previous:{title:"JDK8u20",permalink:"/docs/PPPYSO/gadgets/JDK/JDK8u20/"},next:{title:"C3P0",permalink:"/docs/PPPYSO/gadgets/C3P0/"}},r={},d=[];function l(e){const s={code:"code",h1:"h1",img:"img",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"json",children:"JSON"}),"\n",(0,n.jsx)(s.p,{children:"\u524d\u9762\u5df2\u7ecf\u5206\u6790\u8fc7 Fastjson \u548c Jackson \u4e86\uff0cysoserial \u4e2d\u7684 JSON1 \u8fd9\u6761\u94fe\u5b50\u540c\u6837\u662f\u7528\u901a\u8fc7\u89e6\u53d1 getter \u7684\u65b9\u5f0f\u6765\u89e6\u53d1\uff0c\u8fd9\u4e0d\u8fc7\u8fd9\u6761\u590d\u6742\u4e00\u70b9\u3002"}),"\n",(0,n.jsxs)(s.p,{children:["\u8fd9\u6761\u94fe\u7684 Kick-off \u662f\u9009\u7528\u7684 ",(0,n.jsx)(s.code,{children:"HashMap.equlas()"})," \uff0c\u4e4b\u540e\u901a\u8fc7 ",(0,n.jsx)(s.code,{children:"javax.management.openmbean.TabularDataSupport"})," \u7c7b\u7684 ",(0,n.jsx)(s.code,{children:"equlas()"})," \u65b9\u6cd5\u89e6\u53d1\u5230 ",(0,n.jsx)(s.code,{children:"net.sf.json.JSONObject.containsValue()"})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"image-20240307095747743",src:t(12130).Z+"",width:"1186",height:"370"})}),"\n",(0,n.jsxs)(s.p,{children:["\u7ee7\u7eed\u8ddf\u8fdb\u53ef\u4ee5\u770b\u5230\u5728 ",(0,n.jsx)(s.code,{children:"net.sf.json.JSONObject.defaultBeanProcessing()"})," \u5bf9 Bean \u5bf9\u8c61\u8fdb\u884c\u5904\u7406\uff0c\u8c03\u7528 ",(0,n.jsx)(s.code,{children:"org.apache.commons.beanutils.PropertyUtils.getProperty()"})," \u65b9\u6cd5\u6765\u5904\u7406\u3002"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"image-20240306174123225",src:t(33560).Z+"",width:"1756",height:"612"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"getProperty()"})," \u65b9\u6cd5\u7528\u6765\u63d0\u53d6 Bean \u5bf9\u8c61\u7684\u5c5e\u6027\u503c\uff0c\u5373 JSON \u7528\u7684 CB \u7684\u65b9\u6cd5\u4ee3\u7406\u8c03\u7528 getter"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"image-20240307093144129",src:t(90473).Z+"",width:"1776",height:"680"})}),"\n",(0,n.jsxs)(s.p,{children:["ysoserial \u4e2d\u7528\u5230\u4e86 ",(0,n.jsx)(s.code,{children:"com.sun.corba.se.spi.orbutil.proxy.CompositeInvocationHandlerImpl"})," \u8fd9\u4e2a\u7c7b\u6765\u4ee3\u7406\uff0c\u8c03\u7528\u5176 handler \u5c5e\u6027\u503c\uff0c\u5957\u4e86\u4e00\u5c42\u6765\u8c03\u7528 ",(0,n.jsx)(s.code,{children:"JdkDynamicAopProxy"})," \uff0c\u8fd9\u91cc\u6709\u70b9\u6ca1\u7406\u89e3\uff0c\u5b9e\u9645\u4e0a\u76f4\u63a5\u7528 ",(0,n.jsx)(s.code,{children:"JdkDynamicAopProxy"})," \u4e5f\u662f\u53ef\u4ee5\u7684\u3002"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"image-20240307093313521",src:t(36789).Z+"",width:"2062",height:"1070"})})]})}function p(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},33560:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-20240306174123225-2e46e0223456b7e0259ca0c70493c111.png"},90473:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-20240307093144129-641681bfb174bf6f0236ffe6379cb255.png"},36789:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-20240307093313521-ca6e937b66a3fa2314c0a282036a0ad9.png"},12130:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/image-20240307095747743-836633910957a2cf320580d6c6e1b6ff.png"},11151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>a});var n=t(67294);const i={},o=n.createContext(i);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);