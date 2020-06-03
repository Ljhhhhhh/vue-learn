import {Dep, Watcher} from './Dep'

function cb(val) {
  /* 渲染视图 */
  console.log('视图更新啦～')
}

function defineReactive(obj, key, val) {
  const dep = new Dep()
  console.log(dep, 'dep')
  Object.defineProperty(obj, key, {
    enumerable: true /* 属性可枚举 */,
    configurable: true /* 属性可被修改或删除 */,
    get: function reactiveGetter() {
      console.log(Dep.target, 'DEP1')
      dep.addSub(Dep.target)
      console.log(dep, 'DEP2')
      return val /* 实际上会依赖收集，下一小节会讲 */
    },
    set: function reactiveSetter(newVal) {
      if (newVal === val) return
      val = newVal
      cb(newVal)
    },
  })
}

function observer (value) {
  if (!value || (typeof value !== 'object')) {
      return;
  }
  
  Object.keys(value).forEach((key) => {
      defineReactive(value, key, value[key]);
  });
}


export class Vue {
  /* Vue构造类 */
  constructor(options) {
      this._data = options.data;
      observer(this._data);
      /* 新建一个Watcher观察者对象，这时候Dep.target会指向这个Watcher对象 */
      new Watcher();
      /* 在这里模拟render的过程，为了触发test属性的get函数 */
      console.log('render~', this._data.test);
  }
}

// https://juejin.im/book/5a36661851882538e2259c0f/section/5a3bb1636fb9a0452846aa50