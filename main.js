// import { Observer } from './src/Observer'

// console.log('hello vue')

// let car = new Observer({
//   'brand':'BMW',
//   'price':3000
// })

// car.value = 1000

// console.log(car)
import { Vue } from './src/observer2'

let o = new Vue({
  data: {
    test: 'I am test.',
  },
})
o._data.test = 'hello,vue.'

console.log(o)

window.o = o;
