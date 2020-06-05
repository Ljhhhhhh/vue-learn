// import { Observer } from './src/nlrx-wjc/Observer'

// class Vue {
//   /* Vue构造类 */
//   constructor(options) {
//     this._data = options.data
//     new Observer(this._data)
//     /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */
//     /* 在这里模拟render的过程，为了触发test属性的get函数 */
//     console.log('render~', this._data)
//   }
// }

// const vm = new Vue({
//   data: {
//     brand: 'BMW',
//     price: 3000,
//   },
// })

// console.log(vm._data.brand)

import Vue from './src/juejin/Vue'

let o = new Vue({
  data: {
    test: 'i am test'
  }
})

o._data.test = 'hello world'

console.log(o._data.test)