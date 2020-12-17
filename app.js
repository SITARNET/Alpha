const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
const fib = [1, 1, 2, 3, 5, 8, 13]
const people = [
    {name: 'Vladilen', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700}
]

// Function
function addItemToEnd () {

}

// Method
// cars.push('Рено') // добавляем элемент
// cars.unshift('Волга')  // добавляем в начало
// const firstItem = cars.shift() // удаляет первый элемент и добавляет удалённый элемент в переменную
// const lastItem = cars.pop() // удаляет последний элемент и добавляет удалённый элемент в переменную
// console.log(firstItem)
// console.log(lastItem)
// console.log(cars)

// console.log(cars.reverse()) // переворачивает массив
// console.log(cars)

// const index = cars.indexOf('БМВ') // меняет индекс
// cars[index] = 'Порше'
// console.log(cars)

const index = people.findIndex(function (person) {
    return person.budget === 3500
})
console.log(people[index])

const person = people.find(function (person) {
    return person.budget === 3500
})
console.log(person)


// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reversText = text.split('').reverse().join('') // делит стройку и возвращает массив, перекручивает, возвращаем в строчку
// console.log(reversText)