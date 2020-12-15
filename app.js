// // Number
// const num = 42 // Integer целое число
// const float = 42.42 // Float плавающая точка
// const pow = 10e3 // Pow 10 в 3 степени
// // console.log(num)
// // console.log(float)
// // console.log(pow)
//
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53', Math.pow(2, 53)-1)
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
// console.log('2/0', 2/0)
// console.log('Nan', Number.NaN) // Не число!
// console.log(typeof NaN) // Number в Js
// const weird = 2/undefined
// console.log(isNaN(weird)) // Являеться ли Nan = true
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(42)) // false
// console.log(Number.isFinite(undefined))
// console.log(Number.isFinite(42))

// const stringInt = '40'
// const stringFloat = '40.42'
// console.log(stringInt + 2) // 402
// console.log(Number.parseInt(stringInt) + 2) // 42 парсит в число а не в строку
// console.log(parseInt(stringInt) + 2) // Тоже самое
// console.log(Number(stringInt) + 2) // Тоже самое
// console.log(+stringInt + 2) // Тоже самое
//
// console.log(parseInt(stringFloat) + 2) // Работает с целыми числа, удаляет дробь
// console.log(parseFloat(stringFloat) + 2) // 42.42
// console.log(+stringFloat + 2) // 42.42

// console.log(0.4 + 0.2) // 0.6000000000000001
// console.log((0.4 + 0.2).toFixed(1)) // 0.6 обрезает нули, строка
// console.log(parseFloat((0.4 + 0.2).toFixed(1))) // Переводим в число с плавующей точкой



