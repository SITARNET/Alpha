// const name = 'Николай'
// const age = 35
//
// function getAge() {
//     return age
// }

// const output = 'Привет, меня зовут ' + name + ' и мой возраст: ' + age + ' лет.' // это не удобно
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 40 ? 'A' : 'B'} лет.` // в обратных ковычках
// console.log(output)

// const output = `
//     <div>This is div</div>
//     <p>this is p</p>
// `
// console.log(output)

// const name = 'Николай'
// console.log(name.length) // колличество символов
// console.log(name.toUpperCase()) // вверхний регистр
// console.log(name.toLowerCase()) // нижний регистр
// console.log(name.charAt(2)) // третья буква
// console.log(name.indexOf('кол')) // есть ли такая строка
// console.log(name.indexOf('!')) // нету = -1
// console.log(name.startsWith('Ник')) // стартует ли со строчки = true
// console.log(name.endsWith('ай')) // заканчивается ли строчка = true
// console.log(name.repeat(3)) // повтор трижды
//
// const string = "     password  "
// console.log(string.trim()) // убирает пробелы
// console.log(string.trimLeft()) // убирает пробелы слева
// console.log(string.trimRight()) // убирает пробелы справа

function logPerson(s, name, age) {
    //console.log(s, name, age)
    //return `Info about person`
    if (age < 0) {
        age = 'Ещё не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Николай'
const personAge = 35
const personName2 = 'Максим'
const personAge2 = -10

const output = logPerson`Имя: ${personName}, возраст: ${personAge}!`
console.log(output)

const output2 = logPerson`Имя: ${personName2}, возраст: ${personAge2}!`
console.log(output2)