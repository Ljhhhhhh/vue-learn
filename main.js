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

// import Vue from './src/juejin/Vue'

// let o = new Vue({
//   data: {
//     test: 'i am test'
//   }
// })

// o._data.test = 'hello world'

// console.log(o._data.test)

import { def } from './src/nlrx-wjc/utils'

const arrayProto = Array.prototype
// 创建一个对象作为拦截器
export const arrayMethods = Object.create(arrayProto)

// 改变数组自身内容的7个方法
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  const original = arrayProto[method]      // 缓存原生方法
  def(arrayMethods, method, function mutator (...args) {
    const result = original.apply(this, args)
    // const ob = this.__ob__
    // // notify change
    // ob.dep.notify()
    return result
  })
})

// 能力检测：判断__proto__是否可用，因为有的浏览器不支持该属性
export const hasProto = '__proto__' in {}

const arrayKeys = Object.getOwnPropertyNames(arrayMethods)

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  target.__proto__ = src
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i]
    def(target, key, src[key])
  }
}


const augment = hasProto
        ? protoAugment
        : copyAugment


let value = [1, 2, 3]
augment(value, arrayMethods, arrayKeys)
value.push(4)
console.log(value)