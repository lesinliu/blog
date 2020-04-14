---
title: javascript中this的指向问题
tags:
  - javascript
categories:
  - 前端
toc: true
thumbnail: /2016/12/22/javascript中this的指向相关/this.jpg
date: 2016-12-22 11:47:10
---

> this是当前执行代码的环境对象，在非严格模式下，总是指向一个对象，在严格模式下可以是任意值

## this指向
---
- 全局环境指向全局对象
- 函数环境
  - 函数调用 非严格模式下指向全局对象， 严格模式下指向undefined
  - 作为对象的方法调用，则this指向该对象
  - 构造函数this被绑定到正在构造的新对象

<!--more-->

### 全局环境（在函数体外部）下（无论是否是严格模式）均指向全局对象。
  ```javascript
  console.log(this === window) // true  浏览器环境下  其实还有个globalThis表示通用的全局对象
  ```
### 函数环境，要看调用方式来判断this指向
  - 简单的函数调用 非严格模式下指向全局对象， 严格模式下指向undefined
    ```javascript
      // 函数声明
      function fn(){
        console.log(this === window)  // true  浏览器环境
      }
      fn()

      // 函数表达式
      let fnA = function(){
        console.log(this === window)  // true  浏览器环境
      }
      fnA()

      // 箭头函数
      (()=>{console.log(this === window)})() // true 箭头函数内this绑定的是箭头函数父作用域的this
    ```
  - 作为对象的方法调用，则this指向该对象
    ```javascript
    let obj = {
      a: 1,
      methodA: function(){
        console.log(this.a) // 1
      }
    }
    obj.methodA()
    ```
  - 当一个函数用作构造函数时（使用new关键字） this被绑定到正在构造的新对象
    ``` javascript
      function Person() {
        console.log(this);            // node: Person {}    浏览器： {} 它的__proto__是 Person.prototype  故他是Person的一个实例对象
        console.log(Person);          // node: [Function: Person]
        console.log(Person.prototype);// node: Person {}    浏览器： 原型{} 它的constructor: Person  都是{}的意思
    
        console.log(this.__proto__ === Object);  //false
        console.log(typeof this);     // object
        console.log(typeof Person);   // function
        console.log(typeof Person.prototype); // object

        console.log(Object.prototype.toString.call(this));  // [object Object]
        console.log(Object.prototype.toString.call(Person)); // [object Function]
        console.log(Object.prototype.toString.call(Person.prototype));  // [object Object]

        console.log(Person === this);  // false
        console.log(Person.prototype === this); // false
        console.log(Person.__proto__ === this); // false
        
        console.log(Person == this);  // false
        console.log(Person.prototype == this); // false
        console.log(Person.__proto__ == this); // false

      }
      var personOne = new Person();
      // new操作符做了什么
      // 1. 创建了个空对象 let o = {}
      // 2. 将this.__proto__ 指向构造函数的prototype
      // 3. 绑定属性 Person.call(o)  改变Person内部this指向为o
      // 4. returtn o

    ```
    > **结果就是我们在构造函数内打印this会指向对象{}，{} 它的__proto__是 Person.prototype  故他是Person的一个实例对象Person** 
  - 当函数被用作事件处理函数时，它的this指向触发事件的元素（一些浏览器在使用非addEventListener的函数动态添加监听函数时不遵守这个约定）。
---
## 改变this指向
- call
- apply
- **bind** ( ECMAScript 5 引入了 Function.prototype.bind())


### call
  ```javascript
  let obj = {
    a: 'a'
  }
  let obj2 = {
    method2(){
      console.log(this.a) // a
    }
  }

  // 调用call将obj2内部this指向obj, call(this, ...args) 可传入多个参数
  obj2.method2.call(obj)

  ```
### apply
  apply和call用法类似，唯一区别就是call() 方法接受的是一个参数列表，而 apply() 方法接受的是一个包含多个参数的数组
### bind
  创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。与上面两个不同的是bind()返回的是一个绑定了新的this的函数。

## 参考
---
1. [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

