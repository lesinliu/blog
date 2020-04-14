---
title: JS数据类型及判断类型常用方法
tags:
  - null
categories:
  - null
toc: true
thumbnail: /2016/12/27/JS数据类型及判断类型常用方法/1.png
date: 2016-12-27 22:04:47
---
## 数据类型
最新的ES规范定义了八种数据类型
- 原始类型
  - String
  - Number
  - Boolean
  - Undefined
  - Null
  - BigInt
  - Symbol
- 引用类型 Object
<!--more-->
---
## BigInt和Symbol
### BigInt
  > BigInt类型是 JavaScript 中的一个基础的数值类型，可以用任意精度表示整数。也就是范围更大的整数。 以前我们表示超出范围的整数通常用String。
    普通的Number类型采用64位浮点格式表示，范围  -(2^53-1)  ------  2^53-1   Number.MAX_VALUE , Number.MIN_VALUE。
  1. 创建BigInt
    - 直接用数字后加n   eg: 2n
    - 构造函数    eg: BigInt('2')
  2. 基本使用
    ```javascript
    // Number类型
    console.log(2 ** 10000)  // Infinity
    // BigInt类型
    console.log(2n ** 10000n)  // 199506...很长很长...9376n
    // Number类型和BigInt类型不能互换
    console.log(2n ** 100)  // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
    ```
  3. 总结
    可以对BigInt使用运算符+、*、-、**和%，就像对数字一样。BigInt 严格来说并不等于一个数字，但它是松散的。
    在将BigInt转换为Boolean时，它的行为类似于一个数字：if、||、&&、Boolean 和!。
    BigInt不能与数字互换操作。否则，将抛出TypeError。

### Symbol
  > 数据类型 “symbol” 是一种原始数据类型，该类型的性质在于这个类型的值可以用来创建匿名的对象属性。它具有唯一和不可枚举的特性。
  1. 声明方法  Symbol 值通过Symbol函数生成
    ```javascript
      let symbolA = Symbol();
      let symbolC = Symbol('ss');  // 里面加上’ss‘利于区分

      // 如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值。

      let sss = new Symbol() // Symbol is not a constructor 报错  不能new调用 Symbol函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。也就是说，由于 Symbol 值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。 摘自阮一峰《ECMAScript 6 入门》
    ```
  2. 唯一不重复
    ```javascript
    let symbolA = Symbol();
    let symbolB = Symbol();
    console.log(symbolA === symbolB) // false

    let symbolC = Symbol('ss');
    let symbolD = Symbol('ss');
    console.log(symbolC === symbolD) // false
    ```
  3. 匿名隐藏性
    Symbol属性不可枚举，故在Object.keys(obj)、 for...in、 for...of, Object.getOwnPropertyNames(), JSON.stringify()不会出现。
  ```javascript
  let symbolA = Symbol();
  let obj = {}
  obj[symbolA] = 'hhh' // Symbol 值作为对象属性名时，不能用点运算符。
  console.log(obj) // {Symbol(): "hhh"}
  Object.keys(obj) // []
  ```
  4. 常用方法
  - Symbol.prototype.description 获得Symbol的描述
  - Object.getOwnPropertySymbols() 获取指定对象的所有Symbol属性名
  - Reflect.ownKeys(obj) 获取obj的所有属性名 包含Symbol
  - Symbol.for()  接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局  
  - Symbol.keyFor()  返回一个已登记的 Symbol 类型值的key
  ```javascript
      // Symbol.prototype.description
      const s = Symbol('ssss');
      s.description // ssss

      let s1 = Symbol.for('foo');
      let s2 = Symbol.for('foo');
      s1 === s2 // true

      let s1 = Symbol.for("foo");
      Symbol.keyFor(s1) // "foo"

      let s2 = Symbol("foo"); // Symbol方法创建的Symbol并不会登记到全局 故使用keyFor获取不到key  
      Symbol.keyFor(s2) // undefined  

      // 即使是在局部作用域也会注册到全局   Symbol.for()的这个全局登记特性，可以用在不同的 iframe 或 service worker 中取到同一个值。
      function foo() {
        return Symbol.for('bar');
      }

      const x = foo();
      const y = Symbol.for('bar');
      console.log(x === y); // true
  ```
---
## 类型判断
- typeof
- instanceof
- Object.prototype.toString.call

1. typeof能判断出基本类型，但是不能识别null和数组 都为object  typeof将所有非function引用类型和null都作为object 
    ```javascript
    console.log(typeof 1)    // number
    console.log(typeof 'abc')// string
    console.log(typeof true) // boolean
    console.log(typeof Symbol())// symbol
    console.log(typeof null) // object
    console.log(typeof undefined) // undefined
    console.log(typeof (()=>{})) // function
    console.log(typeof new RegExp()) // object
    ```
2. instanceof 不能识别基础类型 A instanceof B   判断B是否是A的原型链上。
    ```javascript
    console.log([] instanceof Array) // true
    console.log([] instanceof Object) // true
    ```
3. Object.prototype.toString.call  比较完美的判断类型的方法
    ```javascript
    // 基本类型的判断
    Object.prototype.toString.call(1) ;    // [object Number]
    Object.prototype.toString.call('aaa') ;   // [object String]
    Object.prototype.toString.call(true) ; // [object Boolean]
    Object.prototype.toString.call(Symbol()); //[object Symbol]
    Object.prototype.toString.call(undefined) ; // [object Undefined]
    Object.prototype.toString.call(null) ; // [object Null]
    // 引用类型以及内置对象判断
    Object.prototype.toString.call(function(){}) ; // [object Function]
    Object.prototype.toString.call(new Date()) ; // [object Date]
    Object.prototype.toString.call(new Array()) ; // [object Array]
    Object.prototype.toString.call(new RegExp()) ; // [object RegExp]
    Object.prototype.toString.call(new Error()) ; // [object Error]
    Object.prototype.toString.call(new Map()); // [object Map]
    Object.prototype.toString.call(new Set()); // [object Set]
    Object.prototype.toString.call(window) ; //[object global] window 是全局对象 global 的引用
    // 节点类型
    Object.prototype.toString.call(document) ; // [object HTMLDocument]
    ```

可忽略：
其他判断类型方法  constructor  但是constructor指向能轻易被改变，故不安全

---
## 参考
1. [阮一峰《ECMAScript 6 入门》](https://es6.ruanyifeng.com/#docs/symbol)
2. [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)
  