// 作为函数调用
function fn(){ // 函数声明
  console.log(this, '函数声明调用的this') // 全局对象 浏览器中的window  node中的global
}
fn()
let fn = function(){ // 函数表达式
  console.log(this, '函数表达式调用的this'); // 全局对象 浏览器中的window  node中的global
}
fn()

let fn = ()=>{
  console.log(this, '箭头函数的this'); // {} 箭头函数的this 箭头函数内this指向的是它的父作用域的this
}
fn()

// 构造函数内的this 什么是构造函数 函数被new调用了 则这个函数就是构造函数
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

// 结果就是我们在构造函数内打印this会指向对象Person，但是不是指向这个构造函数Person
// 有点乱了、、、 总结 同过查看 console.log(this); 发现this





function Obj (){
  this.area={
      width:'100px',
      height:'100px'
  },
  this.deal={
      wid:parseInt(this.area.width),
      hei:parseInt(this.area.height)
  }
}
var obj=new Obj
console.log(obj)

a = 1
console.log(this === globalThis)
console.log(globalThis)
console.log(this)


function fn(){
  console.log(this === window)
}
fn()


let obj = {
  a: 'a'
}
let obj2 = {
  method2(){
    console.log(this.a)
  }
}

obj2.method2.call(obj)



console.log(typeof 1)    // number
console.log(typeof 'abc')// string
console.log(typeof true) // boolean
console.log(typeof Symbol())// symbol
console.log(typeof null) // object
console.log(typeof undefined) // undefined
console.log(typeof (()=>{})) // function
console.log(typeof new RegExp()) // object
// typeof将所有非function引用类型和null都作为object

