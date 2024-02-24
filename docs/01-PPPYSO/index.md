---
#slug: About Me
#title: About Me
tags: [PPPYSO]
---

# PPPYSO

该篇章为 Java 反序列化相关分析文章，分析时会按照 [Marshalling Pickles](https://www.slideshare.net/frohoff1/appseccali-2015-marshalling-pickles) 中提到的 gadget chain 概念，将 [ysoserial](https://github.com/frohoff/ysoserial) 原先的调用链拆分为入口点 (kick-off), 触发点 (sink)，其余为中间的调用链 (chain) 来分析。

[//]: # (具体工具化实现跳转 [PPPYSO]&#40;https://github.com/Whoopsunix/PPPYSO&#41;)

## 调用链优选

评判一条调用链的利用价值，需要从多个方面考量，依赖少、版本覆盖广、不会触发报错等等。