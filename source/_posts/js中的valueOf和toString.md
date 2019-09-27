---
title: js中的valueOf和toString
date: 2019-07-23 10:03:43
tags: JS MDN
---
### js中的valueOf和toString
-------------------------
> null 和 undefined 没有这两个方法；隐式自动类型转换时会自动调用；
涉及到操作符的问题，valueOf的优先级比toString的优先级高，涉及到显示问题，toString方法优先级比valueOf方法高。

#### valueOf
> valueOf方法返回指定对象的**原始值**，大多情况下都无需手动调用该方法，js会自动调用。但是复合对象大多数情况无法真正表示一个原始值，此时valueOf方法返回对象本身。该方法会被object后面对象继承，并且每个核心对象都会覆盖该方法。以返回合适的值来使用。

| 对象        | valueOf返回值  |
| --------   | -----:        |
|   Array    | 数组对象本身    |
| Boolean    | 布尔值         |
| Date       | 时间戳         |
| Function   | 函数本身       |
| Number     | 数字          |
| Object     | 对象本身（默认设置）|
| String     | 字符串         |
| Math 和 Error 对象没有 valueOf 方法。 |
--------------

#### toString
> 返回对象的字面量表示