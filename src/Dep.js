export class Dep {
  constructor () {
      /* 用来存放Watcher对象的数组 */
      this.subs = [];
  }

  /* 在subs中添加一个Watcher对象 */
  addSub (sub) {
      this.subs.push(sub);
  }

  /* 通知所有Watcher对象更新视图 */
  notify () {
      this.subs.forEach((sub) => {
          sub.update();
      })
  }
}

export class Watcher {
  constructor () {
      /* 在new一个Watcher对象时将该对象赋值给Dep.target，在get中会用到 */
      Dep.target = this;
  }

  /* 更新视图的方法 */
  update () {
      console.log("视图更新啦～");
  }
}

Dep.target = null;