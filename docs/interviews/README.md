- [问题及答案汇总](#问题及答案汇总)
  - [基础篇](#基础篇)
    - [JavaScript](#javascript)
      - [八大数据类型是什么，哪些是原始类型；另一种叫什么类型，与原始类型的区别是什么？](#八大数据类型是什么哪些是原始类型另一种叫什么类型与原始类型的区别是什么)
      - [如何判断数据类型，各方法之间有何差异](#如何判断数据类型各方法之间有何差异)
      - [instanceof的实现原理](#instanceof的实现原理)
      - [简述JavaScript原型链。](#简述javascript原型链)
      - [如何理解JavaScript单线程？单线程如何实现异步？简述JavaScript事件循环。](#如何理解javascript单线程单线程如何实现异步简述javascript事件循环)
      - [哪些属于宏任务，哪些属于微任务？为什么有宏任务（Task）和微任务（Job）的区分，请举例说明。](#哪些属于宏任务哪些属于微任务为什么有宏任务task和微任务job的区分请举例说明)
      - [使用setTimeout、setInterval和requsetAnimationFrame构造轮询之间的差异](#使用settimeoutsetinterval和requsetanimationframe构造轮询之间的差异)
      - [如何实现事件委托（事件代理）？addEventListener中的useCapture如何使用？怎么停止事件冒泡/捕获？](#如何实现事件委托事件代理addeventlistener中的usecapture如何使用怎么停止事件冒泡捕获)
      - [什么是深拷贝？如何实现？](#什么是深拷贝如何实现)
      - [let、const、var的区别](#letconstvar的区别)
      - [import和require的区别](#import和require的区别)
      - [<script>放在头部和放在尾部的差异是什么？放在头部时，什么情况下会产生阻塞？](#script放在头部和放在尾部的差异是什么放在头部时什么情况下会产生阻塞)
      - [获取元素宽高的方法有哪些？分别有什么区别？](#获取元素宽高的方法有哪些分别有什么区别)
      - [如何获取位移坐标？](#如何获取位移坐标)

# 问题及答案汇总
## 基础篇

### JavaScript

#### 八大数据类型是什么，哪些是原始类型；另一种叫什么类型，与原始类型的区别是什么？
```javascript
Number
String
Boolean
BigInt
Symbol
undefined
// 类型 - 按值访问

Object （细分后有 Date/Error/Function/Array/RegExp 等等）
null
// 引用类型 - 按引用访问
```

#### 如何判断数据类型，各方法之间有何差异
```javascript
1. typeof
2. instanceof
3. instance.constructor // === Array
4. Object.prototype.toString.call(instance)
  instance = 1 // [object Number]
  instance = false // [object Boolean]
  instance = Symbol() // [object Symbol]
  instance = BigInt(999) // [object BigInt]
  instance = undefined() // [object Undefined]
  instance = '1' // [object String]
  instance = [] // [object Array]
  instance = {} // [object Object]
  instance = () => {} // [object Function]
  ...
5. Array.isArray()
```
toString.call 和 isArray 比较准确；

instanceof 和 constructor 不支持多个全局环境，不同环境下构造环境不同，会导致误判；

typeof 判断过于简单，会有错误出现。

#### instanceof的实现原理

判断右边变量的prototype是否存在于左边变量的原型链上，存在则返回true，不存在则返回false

#### 简述JavaScript原型链。

每个对象都有一个私有属性 __proto__ 指向该对象的构造函数的原型对象（prototype）

```javascript
Function.prototype === Object.__proto__ // true
Function.prototype.__proto__ === Object.prototype // true
Object.prototype.__proto__ === null // true, Object.prototype.__proto__是原型链的最顶层
```

#### 如何理解JavaScript单线程？单线程如何实现异步？简述JavaScript事件循环。

JavaScript设计之初的主要执行环境是浏览器环境，主要用途是与用户进行交互。
多线程会带来复杂的同步问题，比如两个线程同时对一个DOM执行操作，第一个线程对该DOM节点添加了内容，第二个线程删除了该DOM节点，此时浏览器该有怎样的表现结果？
为了避免这些冲突，JavaScript从一开始诞生就是单线程的。

单线程下，可能会出现一个（同步）任务阻塞导致页面卡死的情况，故而需要引入异步的机制。

JavaScript的异步是通过事件循环（Event loops）的机制实现的。

通过如下描述可以简单理解事件循环：

1. JavaScript Runtime（V8）由**一个**执行栈（Call Stack）和内存堆（Memory Heap）组成；
2. 由浏览器提供实现Web APIs（如DOM(document)、ajax（XMLHttpRequest）、setTimeout等等）异步接口；
3. 由浏览器提供实现**（有多个）**任务队列（callback queue），用于存储异步接口的回调函数；
4. 执行一段代码时，若执行栈为空时，将任务队列中的第一个任务推到执行栈中，这个不断重复的过程就称为事件循环。

#### 哪些属于宏任务，哪些属于微任务？为什么有宏任务（Task）和微任务（Job）的区分，请举例说明。

宏任务：同步执行的代码（<script>包裹的代码）、I/O相关API、setTimeout、setInterval、setImmediate（Node、IE、Edge only）、requestAnimationFrame（Browser only）

微任务：process.nextTick（Node only）、MutationObserver（Browser Only）、Promise.then / catch / finally
*async/await 是基于Promise的语法糖，可以理解await前的代码属于new Promise时传入的代码，await之后属于Promise.then的回调。*

为了实现任务队列先后执行的顺序，或者说为了实现插队（插主线程的队），故而有了宏任务、微任务的区分。

例如，页面通过Promise请求数据，由于Promise.then的优先级比requestAnimationFrame的优先级更高，所以Promise产生回调之后会立马执行，在下一次页面渲染刷新前，可以及时拿到新数据。

#### 使用setTimeout、setInterval和requsetAnimationFrame构造轮询之间的差异

```javascript
// setTimeout轮询的时间仅与与设置的延迟时间长度相关，例如
let i = 1
setTimeout(function run() {
  console.log(i)
  i++
  setTimeout(run, 1000)
}, 1000)

// setInterval轮询的时间与内部代码执行的时间相关，例如
let i = 1
setInterval(function run() {
  console.log(i)
  i++
}, 1000)
// 假设执行console.log(i)的时间需要500ms，那么轮询的周期则为500ms，而不是设置的1000ms

// requestAnimationFrame在屏幕刷新一帧的时候重复执行，可以看作是现代浏览器对setInterval的升级，可用作高性能动画场景，例如
function draw() {
  requestAnimationFrame(draw)
}

draw();
```

#### 如何实现事件委托（事件代理）？addEventListener中的useCapture如何使用？怎么停止事件冒泡/捕获？

通过事件冒泡，事件内通过event.target.closest设置事件触发目标，在祖先节点设置事件捕捉，例：
```html
<div class="root">
  <div class="parent">
    <div class="child" />
    <div class="child" />
  </div>
</div>
```
```javascript
<script>
root = document.querySelector('.root')
root.addEventListener('click', (e) => {
  if (e.target.getAttribute('class') === 'child') {
    console.log(e.target)
  }
})
<script>
```

useCapture = true 时表示该事件的处理方式使用事件捕获的方式，事件触发的顺序为祖先节点 -> 子孙节点。

通过设置e.stopPropagation来阻止事件冒泡或事件捕获，同时它会阻断后续事件处理；

e.stopImmediatePropagation可以阻断事件捕获，并且不会阻断后续事件处理。

#### 什么是深拷贝？如何实现？

深拷贝：将引用类型的数据连引用带值一起复制，占用新的内存地址。

实现方法：

1. JSON.parse(JSON.stringify)
2. 使用拓展运算符（...）
3. 使用Object.assign
4. 手写遍历将值写到新对象中去

#### let、const、var的区别

let、const可以定义块级作用域的变量、var可以定义全局作用域的变量或函数作用域变量

var拥有变量提升的机制——在执行代码前，变量和函数声明会移至其作用域的顶部

let可声明可变变量，const声明常量变量或引用地址不变的引用变量

#### import和require的区别

#### <script>放在头部和放在尾部的差异是什么？放在头部时，什么情况下会产生阻塞？

#### 获取元素宽高的方法有哪些？分别有什么区别？

#### 如何获取位移坐标？
















