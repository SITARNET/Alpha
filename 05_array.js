const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
const fib = [1, 1, 2, 3, 5, 8, 13]

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

// const index = people.findIndex(function (person) {
//     return person.budget === 3500
// })
// console.log(people[index])
//
// const person = people.find(function (person) {
//     return person.budget === 3500
// })
// console.log(person)

// const person = people.find(person => person.budget === 3500)
// console.log(person) // лучше использовать этот вариант со стрелочной функцией

// console.log(cars.includes('Мазда')); // существует ли строчка

// const upperCaseCars = cars.map(car => {  // всегда возвращает новый массив
//      return car.toUpperCase()  // Перевести в верхний регистр
// })
//
// const pow2 = num => num**2
// const sqrt = num => Math.sqrt(num)
//
// const pow2Fib = fib.map(pow2).map(sqrt)// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива
// const pow2Fib = fib.map(pow2).map(Math.sqrt) // можно напрямую передать
// console.log(pow2Fib)
// const pow2Fib = fib.map(pow2)
// const filteredNumber = pow2Fib.filter(num => num > 20)// отфильтровать
// console.log(pow2Fib)
// console.log(filteredNumber)

// console.log(upperCaseCars)
// console.log(cars)

// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reversText = text.split('').reverse().join('') // делит стройку и возвращает массив, перекручивает, возвращаем в строчку
// console.log(reversText)

const people = [
    {name: 'Vladilen', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700}
]

const allBudget = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => { // Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.
        acc += person.budget
        return acc
    }, 0)
console.log(allBudget)



