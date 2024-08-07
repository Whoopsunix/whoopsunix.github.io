"use strict";(self.webpackChunkwhoopsunix_wiki=self.webpackChunkwhoopsunix_wiki||[]).push([[3247],{34586:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var r=n(85893),o=n(11151);const t={sidebar_position:1,tags:["ysoserial","PPPYSO","Spring"]},s="Spring",d={id:"PPPYSO/gadgets/Spring/Spring",title:"Spring",description:"Spring1",source:"@site/docs/01-PPPYSO/01-gadgets/10-Spring/10-Spring.md",sourceDirName:"01-PPPYSO/01-gadgets/10-Spring",slug:"/PPPYSO/gadgets/Spring/",permalink:"/docs/PPPYSO/gadgets/Spring/",draft:!1,unlisted:!1,editUrl:"https://github.com/Whoopsunix/whoopsunix.github.io/docs/01-PPPYSO/01-gadgets/10-Spring/10-Spring.md",tags:[{label:"ysoserial",permalink:"/docs/tags/ysoserial"},{label:"PPPYSO",permalink:"/docs/tags/pppyso"},{label:"Spring",permalink:"/docs/tags/spring"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["ysoserial","PPPYSO","Spring"]},sidebar:"tutorialSidebar",previous:{title:"Jython",permalink:"/docs/PPPYSO/gadgets/Jython/"},next:{title:"BeanShell",permalink:"/docs/PPPYSO/gadgets/Beanshell/"}},c={},a=[{value:"Spring1",id:"spring1",level:2},{value:"0x01 MethodInvokeTypeProvider",id:"0x01-methodinvoketypeprovider",level:3},{value:"0x02 ObjectFactoryDelegatingInvocationHandler",id:"0x02-objectfactorydelegatinginvocationhandler",level:3},{value:"Spring2",id:"spring2",level:2},{value:"0x01 JdkDynamicAopProxy",id:"0x01-jdkdynamicaopproxy",level:3}];function l(e){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"spring",children:"Spring"}),"\n",(0,r.jsx)(i.h2,{id:"spring1",children:"Spring1"}),"\n",(0,r.jsx)(i.h3,{id:"0x01-methodinvoketypeprovider",children:"0x01 MethodInvokeTypeProvider"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"org.springframework.core.SerializableTypeWrapper.MethodInvokeTypeProvider"})," \u7c7b\u5b9e\u73b0\u4e86 ",(0,r.jsx)(i.code,{children:"TypeProvider"})," \u63a5\u53e3\uff0c",(0,r.jsx)(i.code,{children:"readObject()"})," \u65b9\u6cd5\u4e2d\u901a\u8fc7 ",(0,r.jsx)(i.code,{children:"ReflectionUtils.invokeMethod"})," \u8c03\u7528 ",(0,r.jsx)(i.code,{children:"provider"})," \u7684\u65e0\u53c2\u65b9\u6cd5\u3002"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"image-20240311144800993",src:n(63156).Z+"",width:"2128",height:"1086"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"org.springframework.core.SerializableTypeWrapper.TypeProvider"})," \u63a5\u53e3\u7ea6\u5b9a\u4e86\u5b9e\u73b0\u8be5\u63a5\u53e3\u7684\u65b9\u6cd5\u5fc5\u987b\u662f\u5e8f\u5217\u5316\u7684\u3002"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"image-20240311144839425",src:n(99775).Z+"",width:"1058",height:"470"})}),"\n",(0,r.jsxs)(i.p,{children:["\u6240\u4ee5\u5f53 ",(0,r.jsx)(i.code,{children:"this.provider.getType()"})," \u83b7\u53d6\u5230\u4e3a ",(0,r.jsx)(i.code,{children:"TemplatesImpl"})," \u5c31\u80fd\u89e6\u53d1\u5229\u7528\uff0c\u5f88\u5bb9\u6613\u5c31\u80fd\u60f3\u5230\u52a8\u6001\u4ee3\u7406\u3002"]}),"\n",(0,r.jsx)(i.h3,{id:"0x02-objectfactorydelegatinginvocationhandler",children:"0x02 ObjectFactoryDelegatingInvocationHandler"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"org.springframework.beans.factory.support.AutowireUtils.ObjectFactoryDelegatingInvocationHandler"})," \u7c7b\u7684 ",(0,r.jsx)(i.code,{children:"invoke()"})," \u65b9\u6cd5\u4f1a\u8c03\u7528 ",(0,r.jsx)(i.code,{children:"this.objectFactory.getObject()"})," \u8fd4\u56de\u7684\u5bf9\u8c61\u6267\u884c\u6765\u53cd\u5c04\u8c03\u7528\uff0c\u56e0\u4e3a\u662f\u6cdb\u578b ",(0,r.jsx)(i.code,{children:"ObjectFactory"})," \uff0c\u6240\u4ee5\u53ef\u4ee5\u7528\u52a8\u6001\u4ee3\u7406\u6765\u8fd4\u56de\u671f\u671b\u5bf9\u8c61\u3002\u5e76\u4e14 ",(0,r.jsx)(i.code,{children:"ObjectFactoryDelegatingInvocationHandler"})," \u672c\u8eab\u4e5f\u662f Proxy \uff0c\u53ef\u4ee5\u548c\u4e4b\u524d\u7684 ",(0,r.jsx)(i.code,{children:"MethodInvokeTypeProvider"})," \u4e32\u8054\u8d77\u6765\u3002"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"image-20240311150239866",src:n(67960).Z+"",width:"2060",height:"1270"})}),"\n",(0,r.jsx)(i.h2,{id:"spring2",children:"Spring2"}),"\n",(0,r.jsx)(i.h3,{id:"0x01-jdkdynamicaopproxy",children:"0x01 JdkDynamicAopProxy"}),"\n",(0,r.jsxs)(i.p,{children:["Spring1 \u8fd9\u6761\u94fe\u901a\u8fc7 ",(0,r.jsx)(i.code,{children:"ObjectFactoryDelegatingInvocationHandler"})," \u7c7b\u7684 ",(0,r.jsx)(i.code,{children:"ObjectFactory"})," \u6765\u83b7\u53d6\u5bf9\u8c61\uff0c\u540c\u6837\u529f\u80fd\u7684\u8fd8\u6709\u4e4b\u524d\u7684 ",(0,r.jsx)(i.code,{children:"JdkDynamicAopProxy"})," \u7c7b\uff0c\u901a\u8fc7\u5176 ",(0,r.jsx)(i.code,{children:"targetSource"})," \u6765\u4e5f\u662f\u4e00\u6837\u80fd\u5b9e\u73b0\uff0c\u5373 Spring2 \u7684\u6784\u9020\u3002"]})]})}function p(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},63156:(e,i,n)=>{n.d(i,{Z:()=>r});const r=n.p+"assets/images/image-20240311144800993-7efda5123aaa34b7e443409751eafe6d.png"},99775:(e,i,n)=>{n.d(i,{Z:()=>r});const r=n.p+"assets/images/image-20240311144839425-e1191478f724c3c29b0347296735b3bb.png"},67960:(e,i,n)=>{n.d(i,{Z:()=>r});const r=n.p+"assets/images/image-20240311150239866-036a33b130765c1d3db53706fd6fde4b.png"},11151:(e,i,n)=>{n.d(i,{Z:()=>d,a:()=>s});var r=n(67294);const o={},t=r.createContext(o);function s(e){const i=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(t.Provider,{value:i},e.children)}}}]);