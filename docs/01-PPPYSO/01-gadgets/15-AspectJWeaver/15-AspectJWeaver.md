---
sidebar_position: 1
tags: [ysoserial, PPPYSO, AspectJWeaver]
#slug: About Me
#title: About Me
---

# AspectJWeaver

## 0x01 SimpleCache$StoreableCachingMap

这条链没什么好说的，和 CC6 类似，只不过用到了 `org.aspectj.weaver.tools.cache.SimpleCache$StoreableCachingMap` 这个类触发其 `put()` 方法。

![image-20240312092934987](attachments/image-20240312092934987.png)

写入文件时会拼接当前路径，这个通过构造函数指定

![image-20240312093159060](attachments/image-20240312093159060.png)

并且写入成功后会在该目录下生成一个 `cache.idx` 文件。

![image-20240312094156322](attachments/image-20240312094156322.png)

