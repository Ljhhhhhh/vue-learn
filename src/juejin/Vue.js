import observer from './Observer'
import Watcher from './Watcher'

export default class Vue {
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