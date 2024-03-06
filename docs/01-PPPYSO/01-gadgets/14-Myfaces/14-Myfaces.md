---
sidebar_position: 1
tags: [ysoserial, PPPYSO, Myfaces]
#slug: About Me
#title: About Me
---

# Myfaces 

这条调用链最后的 EL 表达式没复现出来，简单记录下调用链

`org.apache.myfaces.view.facelets.el.ValueExpressionMethodExpression.hashCode()` 方法中会调用 `org.apache.myfaces.view.facelets.el.ValueExpressionMethodExpression.getMethodExpression()` 方法。

![image-20240306164146529](attachments/image-20240306164146529.png)

方法内解析了 EL 表达式，source 点可以直接用 HashMap 来触发 `hashCode()` 。

![image-20240306164223569](attachments/image-20240306164223569.png)