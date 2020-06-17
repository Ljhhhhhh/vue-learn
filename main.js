import { Observer } from './src/nlrx-wjc/Observer'

class Vue {
  /* Vue构造类 */
  constructor(options) {
    this._data = options.data
    new Observer(this._data)
    /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */
    /* 在这里模拟render的过程，为了触发test属性的get函数 */
    console.log('render~', this._data)
  }
}

const vm = new Vue({
  data: {
    brand: 'BMW',
    price: 3000,
    list: [1, 2, 3, 4]
  },
})

console.log(vm._data.brand)
console.log(vm._data.list)

vm._data.list.push(5)
console.log(vm._data.list)

const v = vm._data.list[4]
console.log(v, 'vvv')

// import Vue from './src/juejin/Vue'

// let o = new Vue({
//   data: {
//     test: 'i am test'
//   }
// })

// o._data.test = 'hello world'

// console.log(o._data.test)

// import { def, isObject } from './src/nlrx-wjc/utils'

// const arrayProto = Array.prototype
// // 创建一个对象作为拦截器
// export const arrayMethods = Object.create(arrayProto)

// // 改变数组自身内容的7个方法
// const methodsToPatch = [
//   'push',
//   'pop',
//   'shift',
//   'unshift',
//   'splice',
//   'sort',
//   'reverse'
// ]

// /**
//  * Intercept mutating methods and emit events
//  */
// methodsToPatch.forEach(function (method) {
//   const original = arrayProto[method]      // 缓存原生方法
//   def(arrayMethods, method, function mutator (...args) {
//     const result = original.apply(this, args)
//     // const ob = this.__ob__
//     // // notify change
//     // ob.dep.notify()
//     let inserted
//     switch (method) {
//       case 'push':
//       case 'unshift':
//         inserted = args // 如果是push或unshift方法，那么传入参数就是新增的元素
//         break
//       case 'splice':
//         inserted = args.slice(2) // 如果是splice方法，那么传入参数列表中下标为2的就是新增的元素
//         break
//     }
//     // if (inserted) ob.observeArray(inserted)
//     if (inserted) {
//       console.log(inserted, args, '1324124')
//     }
//     console.log(result, 'result')
//     return result
//   })
// })

// // 能力检测：判断__proto__是否可用，因为有的浏览器不支持该属性
// export const hasProto = '__proto__' in {}

// const arrayKeys = Object.getOwnPropertyNames(arrayMethods)

// /**
//  * Augment an target Object or Array by intercepting
//  * the prototype chain using __proto__
//  */
// function protoAugment (target, src, keys) {
//   target.__proto__ = src
// }

// /**
//  * Augment an target Object or Array by defining
//  * hidden properties.
//  */
// /* istanbul ignore next */
// function copyAugment (target, src, keys) {
//   for (let i = 0, l = keys.length; i < l; i++) {
//     const key = keys[i]
//     def(target, key, src[key])
//   }
// }


// const augment = hasProto
//         ? protoAugment
//         : copyAugment




// function defineReactive (obj,key,val) {
//   let childOb = observe(val)
//   console.log(childOb, 'childOb')
//   Object.defineProperty(obj, key, {
//     enumerable: true,
//     configurable: true,
//     get(){
//       // if (childOb) {
//       //   childOb.dep.depend()
//       // }
//       return val;
//     },
//     set(newVal){
//       if(val === newVal){
//         return
//       }
//       val = newVal;
//       // dep.notify()   // 在setter中通知依赖更新
//     }
//   })
// }

// /**
//  * Attempt to create an observer instance for a value,
//  * returns the new observer if successfully observed,
//  * or the existing observer if the value already has one.
//  * 尝试为value创建一个0bserver实例，如果创建成功，直接返回新创建的Observer实例。
//  * 如果 Value 已经存在一个Observer实例，则直接返回它
//  */
// export function observe (value, asRootData){
//   if (!isObject(value)) {
//     return
//   }
//   let ob
//   if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
//     ob = value.__ob__
//   } else {
//     ob = new Observer(value)
//   }
//   return ob
// }

// // defineReactive()

// let value = [1, 2, 3]
// augment(value, arrayMethods, arrayKeys)
// value.push(4)
// console.log(value)