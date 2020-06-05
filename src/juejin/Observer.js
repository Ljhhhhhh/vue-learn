import Dep from './Dep'

export default function observer (value) {
  if (!value || (typeof value !== 'object')) {
      return;
  }
  
  Object.keys(value).forEach((key) => {
      defineReactive(value, key, value[key]);
  });
}

function defineReactive (obj, key, val) {
  /* 一个Dep类对象 */
  const dep = new Dep();
  Object.defineProperty(obj, key, {
      enumerable: true,       /* 属性可枚举 */
      configurable: true,     /* 属性可被修改或删除 */
      get: function reactiveGetter () {
          /* 将Dep.target（即当前的Watcher对象存入dep的subs中） */
          dep.addSub(Dep.target);
          return val;         /* 实际上会依赖收集，下一小节会讲 */
      },
      set: function reactiveSetter (newVal) {
          if (newVal === val) return;
          cb(newVal);
      }
  });
}

function cb (val) {
  /* 渲染视图 */
  console.log("视图更新啦～");
}