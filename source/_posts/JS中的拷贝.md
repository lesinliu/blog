---
title: JS中的拷贝
date: 2019-05-20 11:51:26
tags: JS
---
### 基本数据类型
>number， string， boolean, undefined, null
  ------
  js中基本数据类型保存着栈内存中,所有的拷贝都是在栈中复制一个副本
  ```
  var a = 1;
  var b = a;

  b = 3;

  console.log(a); // 1
  console.log(b); // 3 
  ```
  ###引用类型
  * 数组（array）
  * 对象 (object)

  引用类型中浅拷贝复制的是堆地址，故拷贝值于原值公用同一块堆内存，彼此修改会影响彼此。
  所以我们在对象拷贝往往期望的的是深拷贝

  1. 通过JSON.parse(JSON.stringfy(object))进行深拷贝 （会重置constructor为object,只能解析json数据，function,regexp不行）
  2. 对于元素为基本类型数组来说可以通过循环挨个拷贝，也可以通过slice或者concat方法来获得深拷贝对象，这两个方法不操作原数组。
  ```
  const arr = [1,2,3];
  const copyArr = arr.slice(0);
  copyArr[0] = 'a';
  // arr     [1,2,3]
  // copyArr ['a',2,3]
  ```
  3. 循环递归拷贝
    ```
    function deepCopy(obj) {
      var result = Array.isArray(obj) ? [] : {};
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === 'object') {
            result[key] = deepCopy(obj[key]);   //递归复制
          } else {
            result[key] = obj[key];
          }
        }
      }
      return result;
    }
    ```






