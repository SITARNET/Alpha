//global scope
var name = 'Петя';
function getName() {
    var name = 'Иван';
    function displayName() {
        var name = 'Дима';
        console.log(name);  // "Дима"
    }
    displayName(); // вызов функции displayName
}
getName(); // вызов функции getName

// global scope
var num = 10;
function f1() {
    console.log(num);
}
function f2() {
    num = 20;
    f1(); // 10, т.к. [[Scope]] = global scope
}
f2(); // [[Scope]] = global scope

function myFunc() {
    return this;
}
console.log(this); // window

// объект myFish
var myFish = {
    fish : 'Треска',
    getFish: function() { // функция (метод объекта myFish)
        return this.fish;
    },
    getOwnObject: function() { // функция (метод объекта myFish)
        return this;
    }
}
// вывести в консоль результат выполнения метода getFish
console.log(myFish.getFish()); // "Треска"
// вывести в консоль результат выполнения метода getOwnObject
console.log(myFish.getOwnObject()); // объект myFish