---
title: JS中的for
date: 2019-05-20 13:42:28
tags: MDN
---
### JS中的for
------
for 语句用于创建一个循环，它包含了三个可选的表达式，三个可选的表达式包围在圆括号中并由分号分隔， 后跟一个在循环中执行的语句（通常是一个块语句）。
```
for ([initialization]; [condition]; [final-expression])
   statement
```
> initialization

一个表达式 (包含赋值语句) 或者变量声明。典型地被用于初始化一个计数器。该表达式可以使用var或let关键字声明新的变量，使用var声明的变量不是该循环的局部变量，而是与for循环处在同样的作用域中。用let声明的变量是语句的局部变量。该表达式的结果无意义。

>condition

一个条件表达式被用于确定每一次循环是否能被执行。如果该表达式的结果为true， statement 将被执行。 这个表达式是可选的。如果被忽略，那么就被认为永远为真。如果计算结果为假，那么执行流程将被跳到for语句结构后面的第一条语句。

>final-expression

每次循环的最后都要执行的表达式。执行时机是在下一次condition的计算之前。通常被用于更新或者递增计数器变量。
>statement

只要condition的结果为true就会被执行的语句。 要在循环体内执行多条语句，使用一个块语句（{ ... }）来包含要执行的语句。没有任何语句要执行，使用一个空语句（;）。

### js中的for in
------
for...in语句以**任意顺序**遍历一个对象自有的、继承的、可枚举的、非Symbol的属性。对于每个不同的属性，语句都会被执行。

```
for (variable in object) {...}
// variable  在每次迭代时，将不同的属性名分配给变量。
// object  被迭代枚举其属性的对象。
```
> **for...in不应该用于迭代一个 Array，其中索引顺序很重要。**数组索引只是具有整数名称的枚举属性，并且与通用对象属性相同。

### js中的for of
------
for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句

```
for (variable of iterable) {
    //statements
}
// variable   在每次迭代中，将不同属性的值分配给变量。
// iterable   被迭代枚举其属性的对象。
```

>for...in 语句以原始插入顺序迭代对象的可枚举属性。  
for...of 语句遍历可迭代对象定义要迭代的数据。

### forEach
------
forEach() 方法对数组的每个元素执行一次提供的函数。
return undefined
```
arr.forEach(callback[, thisArg]);
```
> callback 为数组中每个元素执行的函数，该函数接收三个参数：
  currentValue:数组中正在处理的当前元素。    
  index:索引(可选)   
  array:forEach() 方法正在操作的数组。（可选）  

>thisArg  可选参数。当执行回调函数时用作 this 的值(参考对象)。

**forEach 遍历的范围在第一次调用 callback 前就会确定。调用 forEach 后添加到数组中的项不会被 callback 访问到。**   
**forEach不直接改变调用它的对象，但是对象可能会被callback改变。）**
**没有办法中止或者跳出 forEach() 循环，除了抛出一个异常。**

**MDN 笔记**
