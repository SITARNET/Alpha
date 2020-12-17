// 1 Функции
// Function Declaration - можно вызывать функцию до её опрределения

// greet('Лена')
//
// function greet(name) {
//     console.log('Привет -', name)
// }

// Function Expression

// const greet2 = function greet2(name) {
//     console.log('Привет 2 -', name)
// }
//
// greet2('Лена')

// console.log(typeof greet)
// console.dir(greet)

// 2 Анонимные функции

// let counter = 0
// const interval = setInterval(function () {
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

// 3 Стрелочные функции

function greet(name) {
     //console.log('Привет -', name)
}

const arrow = (name) => {
    //console.log('Привет -', name)
}

//arrow('Николай')

const arrow2 = name => console.log('Привет -', name) // тоже самое, сокращённо
//arrow2('Вася')

const pow2 = num => num ** 2 // 5 во второй степени
//console.log(pow2(5)) // 25

// Параметры по умолчанию

const sum = (a = 2, b = 3 * a) => a + b // b по умолчанию равно 2

//console.log(sum(41, 2))

//console.log(sum(41)) // 164
//console.log(sum()) // 8

function  sumAll(...all) {
    let result = 0
    for (let num of all) {
        result += num
    } return result
}

const res = sumAll(1, 2, 3, 4, 5, 6, 7)
//console.log(res)

// 5 Замыкания

function createMember(name) {
    return function (lastName) {
        console.log(name + lastName)
    }
}

const logWidthLastName = createMember('Николай ')
console.log(logWidthLastName('Sytar')) // name постоянно используеться
console.log(logWidthLastName('Pupkin')) // name постоянно используеться

