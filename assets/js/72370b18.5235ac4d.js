"use strict";(self.webpackChunkwhoopsunix_wiki=self.webpackChunkwhoopsunix_wiki||[]).push([[1165],{8578:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var s=r(85893),i=r(11151);const c={sidebar_position:1,tags:["SAST","joern"]},t="SAST \u4e4b\u8def - joern \u5165\u95e8\u7bc7 (\u4e00)",o={id:"java/SAST/joern/joern",title:"SAST \u4e4b\u8def - joern \u5165\u95e8\u7bc7 (\u4e00)",description:"\u5173\u4e8e joern",source:"@site/docs/02-java/SAST/joern/joern.md",sourceDirName:"02-java/SAST/joern",slug:"/java/SAST/joern/",permalink:"/docs/java/SAST/joern/",draft:!1,unlisted:!1,editUrl:"https://github.com/Whoopsunix/whoopsunix.github.io/docs/02-java/SAST/joern/joern.md",tags:[{label:"SAST",permalink:"/docs/tags/sast"},{label:"joern",permalink:"/docs/tags/joern"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["SAST","joern"]},sidebar:"tutorialSidebar",previous:{title:"SAST \u4e4b\u8def",permalink:"/docs/java/SAST/"},next:{title:"JDK 17+ FreeMarker SSTI\uff1a\u4ece CVE-2023-4450 \u590d\u73b0\u5f15\u51fa MethodHandle \u53e5\u67c4\u3001named module \u673a\u5236\u7814\u7a76",permalink:"/docs/java/named module/"}},d={},l=[{value:"\u5173\u4e8e joern",id:"\u5173\u4e8e-joern",level:2},{value:"CPG",id:"cpg",level:2},{value:"start",id:"start",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u4e8c\u5f00",id:"\u4e8c\u5f00",level:3},{value:"\u8bb0\u5f55",id:"\u8bb0\u5f55",level:4},{value:"\u8d44\u6599",id:"\u8d44\u6599",level:3},{value:"\u4ece demo \u5165\u624b",id:"\u4ece-demo-\u5165\u624b",level:2},{value:"joern \u547d\u4ee4\u8bb0\u5f55",id:"joern-\u547d\u4ee4\u8bb0\u5f55",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"sast-\u4e4b\u8def---joern-\u5165\u95e8\u7bc7-\u4e00",children:"SAST \u4e4b\u8def - joern \u5165\u95e8\u7bc7 (\u4e00)"}),"\n",(0,s.jsx)(n.h2,{id:"\u5173\u4e8e-joern",children:"\u5173\u4e8e joern"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/joernio/joern",children:"joern"})," \u662f\u57fa\u4e8e CPG \u7684\u4e00\u79cd\u4ee3\u7801\u5206\u6790\u6846\u67b6\uff0c\u8fd9\u7bc7\u6587\u7ae0\u4ece\u5e94\u7528\u7684\u89d2\u5ea6\u6765\u4e86\u89e3\u4e00\u4e0b joern\uff0c\u6982\u5ff5\u7684\u4e1c\u897f\u4f1a\u653e\u53c2\u8003\u94fe\u63a5\u5c31\u4e0d\u8d58\u8ff0\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5173\u4e8e joern \u7684\u8bbe\u8ba1\u7406\u5ff5\u53ef\u4ee5\u73b0\u770b\u770b\u4f5c\u8005\u662f\u600e\u4e48\u8bf4\u7684"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://blog.shiftleft.io/semantic-code-property-graphs-and-security-profiles-b3b5933517c1?gi=e675bb96e6b1",children:"https://blog.shiftleft.io/semantic-code-property-graphs-and-security-profiles-b3b5933517c1?gi=e675bb96e6b1"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/joernio/workshops/blob/master/2021-RSA/RSA-LAB2-R08.pdf",children:"https://github.com/joernio/workshops/blob/master/2021-RSA/RSA-LAB2-R08.pdf"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e3a\u4ec0\u4e48\u4f1a\u9009\u7528 joern \u6765\u5f00\u59cb\uff1f\u4e00\u4e2a\u662f\u8fd9\u4e2a\u5de5\u5177\u76f8\u5bf9\u8f83\u6210\u719f\uff0c\u53ef\u4ee5\u770b\u5230\u6bcf\u4e2a\u8bed\u8a00\u7684\u8bc6\u522b\u80fd\u529b\u90fd\u662f\u57fa\u4e8e\u76f8\u5bf9\u8d44\u6599\u591a\u7684\u6846\u67b6\u53bb\u5b9e\u73b0\u7684\uff0c\u6070\u597d\u5176\u4e2d\u7684 soot\u3001JavaParser\u3001ANTLR \u7b49\u53c8\u5f88\u6709\u5174\u8da3\uff0c\u6df1\u5ea6\u5b66\u4e60\u540e\u5bf9\u4e8e\u4e8c\u6b21\u5f00\u53d1\u53c8\u5f88\u5927\u7684\u5e2e\u52a9\uff0c\u6240\u4ee5\u8fd9\u4e5f\u662f\u4e3a\u4ec0\u4e48\u9009\u62e9\u5927\u800c\u5168\u7684 joern \u6765\u5f00\u542f SAST \u4e4b\u8def"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Built with"}),(0,s.jsx)(n.th,{children:"Maturity"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"C/C++"}),(0,s.jsx)(n.td,{children:"Eclipse CDT"}),(0,s.jsx)(n.td,{children:"Very High"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Java"}),(0,s.jsx)(n.td,{children:"JavaParser"}),(0,s.jsx)(n.td,{children:"Very High"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"JavaScript"}),(0,s.jsx)(n.td,{children:"GraalVM"}),(0,s.jsx)(n.td,{children:"High"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Python"}),(0,s.jsx)(n.td,{children:"JavaCC"}),(0,s.jsx)(n.td,{children:"High"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"x86/x64"}),(0,s.jsx)(n.td,{children:"Ghidra"}),(0,s.jsx)(n.td,{children:"High"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"JVM Bytecode"}),(0,s.jsx)(n.td,{children:"Soot"}),(0,s.jsx)(n.td,{children:"Medium"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Kotlin"}),(0,s.jsx)(n.td,{children:"IntelliJ PSI"}),(0,s.jsx)(n.td,{children:"Medium"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PHP"}),(0,s.jsx)(n.td,{children:"PHP-Parser"}),(0,s.jsx)(n.td,{children:"Medium"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Go"}),(0,s.jsx)(n.td,{children:"go.parser"}),(0,s.jsx)(n.td,{children:"Medium"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Ruby"}),(0,s.jsx)(n.td,{children:"ANTLR"}),(0,s.jsx)(n.td,{children:"Medium-Low"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Swift"}),(0,s.jsx)(n.td,{children:"SwiftSyntax"}),(0,s.jsx)(n.td,{children:"Medium"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"C#"}),(0,s.jsx)(n.td,{children:"Roslyn"}),(0,s.jsx)(n.td,{children:"Medium-Low"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"cpg",children:"CPG"}),"\n",(0,s.jsx)(n.p,{children:"joern \u5f15\u5165 CPG(Code Property Graph) \u4f5c\u4e3a\u4ee3\u7801\u7684\u5904\u7406\u7ed3\u6784\uff0c\u5c06 AST + CFG + PDG \u5408\u5e76\u800c\u6765\u8868\u793a\u540c\u4e00\u7a0b\u5e8f\u7684\u590d\u6742\u884c\u4e3a\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"img",src:r(103).Z+"",width:"1400",height:"483"})}),"\n",(0,s.jsxs)(n.p,{children:["\u66f4\u591a\u7684\u53ef\u4ee5\u770b\u5b98\u65b9\u57fa\u7840\u7406\u8bba ",(0,s.jsx)(n.a,{href:"https://blog.shiftleft.io/why-your-code-is-a-graph-f7b980eab740",children:"https://blog.shiftleft.io/why-your-code-is-a-graph-f7b980eab740"})]}),"\n",(0,s.jsx)(n.p,{children:"joern cpg"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://cpg.joern.io/",children:"https://cpg.joern.io/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/ShiftLeftSecurity/codepropertygraph",children:"https://github.com/ShiftLeftSecurity/codepropertygraph"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"start",children:"start"}),"\n",(0,s.jsx)(n.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,s.jsx)(n.p,{children:"\u5feb\u901f\u5b89\u88c5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"wget https://github.com/joernio/joern/releases/latest/download/joern-install.sh\nchmod +x ./joern-install.sh\nsudo ./joern-install.sh\njoern\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8003\u8651\u5230\u9700\u6c42\u624b\u52a8\u5b89\u88c5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u4e0b\u8f7d joern-cli  https://github.com/joernio/joern/releases\nJDK21\nbrew install coreutils\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u4e8c\u5f00",children:"\u4e8c\u5f00"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.scala-sbt.org/download/",children:"sbt"})," \u3001JDK\u3001maven\u3001idea scala\u63d2\u4ef6 \u7b49\u57fa\u7840\u73af\u5883\u914d\u7f6e"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"git clone https://github.com/joernio/joern.git"})}),"\n",(0,s.jsxs)(n.li,{children:["\u9879\u76ee\u6839\u8def\u5f84 ",(0,s.jsx)(n.code,{children:"sbt stage"})," \uff08\u6302\u4e2a Proxy"]}),"\n",(0,s.jsx)(n.li,{children:"idea \u6253\u5f00\uff0c\u9009\u62e9 BSP \u9879\u76ee"}),"\n",(0,s.jsxs)(n.li,{children:["\u8fd0\u884c ",(0,s.jsx)(n.code,{children:"io.joern.joerncli.JoernParse"})," \u6210\u529f\uff0c\u914d\u7f6e\u5b8c\u6210"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240702113038913",src:r(72484).Z+"",width:"2422",height:"1390"})}),"\n",(0,s.jsx)(n.h4,{id:"\u8bb0\u5f55",children:"\u8bb0\u5f55"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u4ea4\u4e92\u5165\u53e3  io.joern.joerncli.console.ReplBridge\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u8d44\u6599",children:"\u8d44\u6599"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u57fa\u4e8eOverflowDb\u7684\u67e5\u8be2\u8bed\u8a00 ",(0,s.jsx)(n.a,{href:"https://queries.joern.io/",children:"https://queries.joern.io/"})]}),"\n",(0,s.jsxs)(n.p,{children:["\u5173\u952e\u5b57\u542b\u4e49  ",(0,s.jsx)(n.a,{href:"https://docs.joern.io/cpgql/reference-card/",children:"https://docs.joern.io/cpgql/reference-card/"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4ece-demo-\u5165\u624b",children:"\u4ece demo \u5165\u624b"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5 ",(0,s.jsx)(n.a,{href:"https://github.com/Whoopsunix/JavaRce",children:"JavaRce"})," \u9879\u76ee\u4e3a\u4f8b\u6765\u719f\u6089 joern \uff0cinputPath \u8bbe\u7f6e\u6e90\u7801\u8def\u5f84\uff0c\u53ef\u7edd\u5bf9\u6216\u8005\u76f8\u5bf9\u8def\u5f84\uff0cprojectName \u8bbe\u7f6e\u5de5\u7a0b\u540d"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'importCode(inputPath="/JavaRce/SecVulns",projectName="SecVulns")\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u4e5f\u53ef\u4ee5\u5148\u751f\u6210 CPG \u56fe\u540e\u518d\u5bfc\u5165\u67e5\u8be2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'# \u751f\u6210 cpg \u9700\u8981\u9009\u62e9\u89e3\u538b\u540e\u7684\u76ee\u5f55\n./javasrc2cpg -J-Xmx2048m /Users/ppp/Documents/pppRepository/github_file/JavaRce/SecVulns --output ../source/SecVulns.cpg.bin\n\n# \u5bfc\u5165 cpg\nimportCpg("../source/SecVulns.cpg.bin")\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8bbe\u7f6e\u597d\u540e\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"workspace"})," \u547d\u4ee4\u67e5\u770b\u5de5\u7a0b\uff0c ",(0,s.jsx)(n.code,{children:'open("SecVulns.cpg.bin")'})," \u6253\u5f00\u5de5\u7a0b\uff0ccpg \u53d8\u91cf\u5373\u4ee3\u7801\u7684 CPG\u3002",(0,s.jsx)(n.code,{children:"close"})," \u5173\u95ed\u5de5\u7a0b"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240703115639139",src:r(25977).Z+"",width:"2084",height:"902"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u8f93\u5165\u65f6\u53ef\u4ee5\u901a\u8fc7 tab \u952e\u8865\u5168\u547d\u4ee4"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240703115553327",src:r(29795).Z+"",width:"1204",height:"150"})}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u5148\u6765\u770b\u4e00\u4e2a\u6700\u7b80\u5355\u7684 JDBC \u53cd\u5e8f\u5217\u5316"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'import java.sql.Connection;\nimport java.sql.DriverManager;\n\npublic static void connect(String jdbcUrl) throws Exception{\n    Class.forName("org.h2.Driver");\n    Connection connection = DriverManager.getConnection(jdbcUrl);\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u77e5\u9053\u6f0f\u6d1e\u662f\u51fa\u5728 ",(0,s.jsx)(n.code,{children:"getConnection()"})," \u7684 URL \u53c2\u6570\u53ef\u63a7\uff0c\u6240\u4ee5\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:'cpg.call.name("getConnection")'})," \u63d0\u53d6\u6240\u6709\u65b9\u6cd5\u540d\u4e3a ",(0,s.jsx)(n.code,{children:"getConnection"})," \u7684\u65b9\u6cd5\uff0c\u59d1\u4e14\u5c06\u5176\u5f53\u4e3a sink \u70b9\uff0c\u67e5\u8be2\u7ed3\u679c\u4e2d\u53ef\u4ee5\u770b\u5230\u6709\u4e24\u4e2a\u7ed3\u679c\uff0c\u8fd8\u6709\u4e0d\u53ef\u63a7\u7684\u7684 sql \u6ce8\u5165\u8fde\u63a5\u8bed\u53e5\u3002\u6240\u4ee5\u6211\u95e8\u8fd8\u9700\u8981\u518d\u627e\u5230 Source \u70b9"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"image-20240703115523412",src:r(66641).Z+"",width:"1876",height:"900"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5 Springboot2 \u4e3a\u4f8b\uff0c\u53ef\u4ee5\u76f4\u63a5\u83b7\u53d6\u5177\u6709\u5f62\u5982 ",(0,s.jsx)(n.code,{children:"@xxxMapping"})," \u7684\u6ce8\u89e3\u65b9\u6cd5\uff0c\u8fd9\u91cc\u4ee5 ",(0,s.jsx)(n.code,{children:'request.getParameter("")'})," \u7684\u60c5\u51b5\u4e3a\u4f8b\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scala",children:'cpg.method.where(_.annotation.name(".*Mapping")).parameter\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e4b\u540e\u5c31\u662f\u6570\u636e\u6d41\u5206\u6790\uff0c\u53ef\u4ee5\u7528 joern \u63d0\u4f9b\u7684 ",(0,s.jsx)(n.a,{href:"https://docs.joern.io/cpgql/data-flow-steps/#reachablebyflows",children:"reachablebyflows"})," \u6765\u505a\uff0c\u6240\u4ee5\u6700\u540e\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u8bed\u53e5\u67e5\u8be2"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scala",children:'def source = cpg.method.where(_.annotation.name(".*Mapping")).parameter\ndef sink = cpg.call.name("getConnection")\nsink.reachableByFlows(source).p\n'})}),"\n",(0,s.jsx)(n.p,{children:"sink \u70b9\u8fd8\u53ef\u4ee5\u5199\u7684\u590d\u6742\u4e00\u70b9\uff0c\u9650\u5b9a\u53c2\u6570\u7c7b\u578b\u6765\u89c4\u907f\u4e00\u4e9b\u975e SQL \u7684\u540c\u540d\u65b9\u6cd5\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-scala",children:'def sink = cpg.call.methodFullName("java.sql.DriverManager.getConnection.*").typeFullName("java.sql.Connection")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"joern-\u547d\u4ee4\u8bb0\u5f55",children:"joern \u547d\u4ee4\u8bb0\u5f55"}),"\n",(0,s.jsxs)(n.p,{children:["\u5b98\u65b9\u6587\u6863  ",(0,s.jsx)(n.a,{href:"https://docs.joern.io/traversal-basics/",children:"https://docs.joern.io/traversal-basics/"})]}),"\n",(0,s.jsx)(n.p,{children:"todo \u505a\u4e2a xmind"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'# \u8bbe\u7f6e\u6700\u5927\u5185\u5b58\n\n# \u751f\u6210 cpg \u9700\u8981\u9009\u62e9\u89e3\u538b\u540e\u7684\u76ee\u5f55\n./javasrc2cpg -J-Xmx2048m /Users/ppp/Documents/pppRepository/github_file/JavaRce/SecVulns --output ../source/SecVulns.cpg.bin\n\n# \u5bfc\u5165 cpg\nimportCpg("../source/SecVulns.cpg.bin")\n\n# \u83b7\u53d6\u5de5\u4f5c\u76ee\u5f55\u4f4d\u7f6e\n## \u53ef\u4ee5\u5220\u9664\u9519\u8bef\u7684 workspace\nworkspace.getPath\n\n# \u83b7\u53d6\u65b9\u6cd5\ncpg.method.take(1).l\n\n# \u8fd0\u884c scala \u811a\u672c\n./joern --script /Users/ppp/Documents/pppRepository/github_file/JavaRce/joern/joern.sc --param cpgFile=../source/SecVulns.cpg.bin --param outFile=../source/output.log\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u8003"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://lorexxar.cn/2023/08/21/joern-and-cpg",children:"https://lorexxar.cn/2023/08/21/joern-and-cpg"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},103:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/202308211430788-ddecf301d2e6a117f8e0a443ea4f85ab.png"},72484:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/image-20240702113038913-77b7e8ec6f1b000294ff4a3040127ee0.png"},66641:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/image-20240703115523412-afaba8275072f06a30ce24822e0ccbf0.png"},29795:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/image-20240703115553327-f1e6727dfd28d03c0e13f7f897d5a251.png"},25977:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/image-20240703115639139-7e9b3d9918b930df0fda246d3e2c2bf8.png"},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>t});var s=r(67294);const i={},c=s.createContext(i);function t(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);