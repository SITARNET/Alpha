// Объекты

const person = {
    name: 'Vladilen',
    age: 26,
    // age: undefined,
    isProgrammer: true,
    language: ['ru','en','de'],
    // 'complex key': 'Complex Value', // key_4
    // ['key_' + (1+3)]: 'Complex Ket',
    greet() {
        console.log('greet from person')
    },
    info() {
        // console.log('this:', this)
        // console.info('Информация про человека по имени:', person.name)
        console.info('Информация про человека по имени:', this.name) // this - это объект person
    }
}

// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key'])
// person.greet()
//
// person.age++
// person.language.push('by')
// // person['key_4'] = undefined  // удаляем
// delete person['key_4'] // удаляем
//
// console.log(person)
// console.log(person['key_4'])

// Деструктаризация

// const name = person.name
// const age = person.age
// const language = person.language

// const {name, age: personAge = 10, language} = person // по умолчанию возраст = 10 если undefined
//
// console.log(name, personAge, language)

// console.log(person)
//
// for (let key in person) { // правильно и защещённо через hasOwnProperty
//     if (person.hasOwnProperty(key)) {
//         console.log('key:', key)
//         console.log('value', person[key])
//     }
// }

// Object.keys(person).forEach((key) => {//  не пробегает по прототипу, не надо проверки
// // console.log(keys)
//     console.log('key:', key)
//     console.log('value', person[key])
// })

// Context

// person.info() // Информация про человека по имени: Vladilen

const logger = {
    keys() {
        console.log('Object Key: ', Object.keys(this))
        // console.log('Object Key:', Object.keys(logger))
    },

    keysAndValue() {
        // Object.keys(this).forEach(key => { // правильно использовать стрелочную функцию
        //     console.log(`"${key}": ${this[key]}`)
        // })
        // const  self = this // первый способ сохранения контекста
        // Object.keys(this).forEach(function(key){
        //     console.log(`"${key}": ${self[key]}`)
        // })

        Object.keys(this).forEach(function(key) {
            console.log(`"${key}": ${this[key]}`)
        }.bind(this)) // второй способ методом bind
    },

    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('------ Start ------')
        }
        Object.keys(this).forEach((key, index, array) => { // правильно использовать стрелочную функцию
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length - 1) { // не выводим between если последний элемент
                console.log('------------')
            }
            })
        if (bottom) {
            console.log('------ End ------')
        }
    }
}

// logger.keys(person)
// const bound = logger.keys.bind(logger) // передаём объект, bind вызывает новую функцию
// bound()

// logger.keys.call(person) // bind и сразу вызывает эту функцию

// logger.keysAndValue.call(logger)
// logger.keysAndValue.call(person)
// logger.keysAndValue.call({a: 1, c: 2})
// logger.keysAndValue.call(person)
// logger.withParams.call(person, true, true, true) // передаём параметры через запятую не ограниченное
logger.withParams.apply(person, [true, true, true]) // третий метод, всегда принемает два параметра (первый объект, второй массив)