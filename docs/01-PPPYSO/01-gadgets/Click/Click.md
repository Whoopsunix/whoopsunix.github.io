---
sidebar_position: 1
tags: [ysoserial, PPPYSO, Click]
#slug: About Me
#title: About Me
---

# Click

Click Framework 是一个用于构建基于 Java 的 Web 应用程序的开源框架，太老了，简单记录一下。

## 0x01 PropertyUtils

`org.apache.click.util.PropertyUtils.getValue()` 方法用于获取对象的属性值，调用的 getter 方法

![image-20240312154811238](attachments/image-20240312154811238.png)

`org.apache.click.control.Column.ColumnComparator` 实现了 `Comparator, Serializable` 这两个接口，很容易的联想到之前的分析。

![image-20240312155342405](attachments/image-20240312155342405.png)
