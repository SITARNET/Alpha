// Работа с DOM - Document Object Model tree

const heading = document.getElementById('hello') // поиск по id
// const heading2 = document.getElementsByTagName('h2')[0] // поиск по имени, первый в массиве, старый метод, лучше не пользоваться
// const heading2 = document.getElementsByClassName('h2-class')[0] // поиск по class, первый в массиве
const heading2 = document.querySelector('h2') // по имени
// const heading2 = document.querySelector('.h2-class') // по class
// const heading2 = document.querySelector('#selector') // по id
// console.dir(heading2)
const h2List = document.querySelectorAll('h2')
// console.log(h2List)
const heading3 = h2List[h2List.length - 1]
// console.log(heading3)

const link = heading3.querySelector('a')

link.addEventListener('click', (event) => {
    event.preventDefault() // отмена события
    console.log('Click on link', event.target.getAttribute('href'))

    const url = event.target.getAttribute('href')
    window.location = url
})

setTimeout(() => {
    addStylesTo(link, 'И всё получиться!', 'yellow')
}, 3000)

setTimeout(() => {
    addStylesTo(heading2, 'Практикуйся!', 'blue', '2rem')
}, 4000)


// const heading3 = heading2.nextElementSibling
// console.log(heading3)

// console.log(heading)
// console.dir(heading) // выводит свойства объекта
// console.dir(heading.id) // выводит свойства объекта, hello
// console.dir(heading.textContent) // выводит свойства объекта, Hello World!


setTimeout(() => {
    // heading.textContent = 'Changed from JavaScript!' // меняет текст
    // heading.style.color = 'red' //  меняем цвет
    // heading.style.textAlign = 'center' // размещение по центру
    // heading.style.backgroundColor = 'black' // меняем цвет фона
    // heading.style.padding = '2rem'
    addStylesTo(heading, 'JavaScript')
},2000)


function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text // меняет текст
    node.style.color = color //  меняем цвет
    node.style.textAlign = 'center' // размещение по центру
    node.style.backgroundColor = 'black' // меняем цвет фона
    node.style.padding = '2rem'
    node.style.display = 'block'
    node.style.width = '100%'
    // falsy: '', undefined, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

// console.log(heading2)

// События
// https://developer.mozilla.org/ru/docs/Web/Events

heading.onclick = () => {
    // console.log('click')
    if (heading.style.color === 'red') {
        heading.style.color = '#000'
        heading.style.backgroundColor = '#fff'
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = '#000'
    }
}

heading2.addEventListener('dblclick', () => {
    if (heading2.style.color === 'yellow') {
        heading2.style.color = '#000'
        heading2.style.backgroundColor = '#fff'
    } else {
        heading2.style.color = 'yellow'
        heading2.style.backgroundColor = '#000'
    }
})

