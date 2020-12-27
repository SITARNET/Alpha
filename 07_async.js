// Асинхронность

// Event Loop

// const timeout = setInterval(() => { // Асинхронная операция
//     console.log('After timeout')
// }, 2500)
//
// clearTimeout(timeout) // не срабатывает setInterval
//
// const interval = setInterval(() => { // Асинхронная операция
//     console.log('After timeout')
// }, 1000)
//
// clearTimeout(interval) // не срабатывает setInterval

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }
//
// delay(() => {
//     console.log('After 2 seconds')
// }, 2000)

// Promise

const delay = (wait = 1000) => {
    const  promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve()
            reject('Что-то пошло не так. Повторите попытку.')
        }, wait)
    })
    return promise
}

// delay(2500)// вызываем функцию
//     .then(() => {
//         console.log('After 2 seconds')
//     })
//     .catch(err => console.error('Error: ', err))
//     .finally(() => console.log('Finally'))

const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5, 8, 13
]))

// getData().then(data => console.log(data))

async function asyncExample() { // Без callback
    try {
        await delay(3000)
        const data = await getData()
        console.log('Data', data)
    } catch (e) {
        console.log(e)
    } finally {
        console.log('Finally')
    }
}

asyncExample()
