// 1 Переменные

//var name = 'Vladilen' // лучше не использовать
// const firstName = 'Vladilen' // использовать стиль написания camelCase без ; в конце
// const lastName = 'Minin' // лучше использовать // string
// const age = 26 // number
// const isProgrammer = true // boolean
//
// const _ = 'private'
// const $ = 'some value'
// const withNum5 = '5'
// const 5withNum = '5' // err

// const if = 'some value 1' // err

// console.log(isProgrammer)

// 2 Мутирование
// console.log('Имя человека: ' + firstName + ` а возраст человека` + age) // age.toString() - переводит в строку
// console.log(age)
// console.log(age.toString())

// const LastName = prompt('Введите фамилию') // поле сообщения
// alert(firstName + ' ' + LastName) // выводит имя + что ввели в поле

// 3 Операторы
// const currentYear = 2020
// let currentYear = 2020 // переменная которая изменяется
// const birthYear = 1993

// const age = currentYear - birthYear // сколько лет
// console.log(age)

// const a = 10
// const b = 5
//
// let c = 32

// c = c + a //
// c += a // тоже самое что и с = с + а
// с -= a
// c *= a
// c /= a

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(currentYear++)   // прибавляет +1 (инкреминтирование) 2020
// console.log(++currentYear)  // 2022
// console.log(--currentYear)  // 2021
// console.log(currentYear) // 2021
// console.log(c)

// 4 Типы данных

// const isProgrammer = true
// const name = 'Vladilen'
// const age = 26
// let x
//
//
// console.log(typeof isProgrammer) // 1 Boolean
// console.log(typeof name) // 2 String
// console.log(typeof age) // 3 Number
// console.log(x) // 4 Undefined
// console.log(null) // 5 Object

// 5 Приоритет операторов

// const fullAge = 26
// const birthYear = 1993
// const currentYear = 2020
//
// // > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge  // 26 >= 27 = true
// console.log(isFullAge)


// 6 Условные операторы

// const courseStatus = 'pend' // ready, fail, pending
//
// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в стадии разработки')
// } else {
//     console.log('Курс не получился')
// }
//
const isReady = true
//
// if (isReady === true) {
//     console.log('Всё готово!')
// }

// if (isReady) {
//     console.log('Всё готово!')
// } else {
//     console.log('Всё не готово!')
// }

isReady ? console.log('Всё готово!') : console.log('Всё не готово!') // Тернарное условие

// const num1 = 42 // number
// const num2 = '42' // string
//
// console.log(num1 === num2) // false - правильное пременение
// console.log(num1 == num2) // true


