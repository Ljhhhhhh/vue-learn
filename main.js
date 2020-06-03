import { Observer } from './src/Observer'

console.log('hello vue')

let car = new Observer({
  'brand':'BMW',
  'price':3000
})

car.value = 1000

console.log(car)