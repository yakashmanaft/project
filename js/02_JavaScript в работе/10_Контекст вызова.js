'use strict';

// Просто вызов функции
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
// //Зависим от строгого режима
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function (){
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum()

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// let ivan = new User('Ivan', 23);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));



// 1. Обычная функция: this = window, если установлен use strict , то ьудет - undefined;
// 2. Контекст у методов объекта - это сам объект;
// 3. This в конструкторах и классах - это новый эксземпляр объекта; 
// 4. Ручная привязка this: call, apply, bind;


const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    // console.log(this);
    // Если используется обычная функция, то контекстом вызова чаще будет сам элемента, на котором произошло событие
    this.style.backgroundColor = 'red';
    // У стрелочной функции нет своего контекста вызова, она его берет у своего родителя
});

btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'red'
})
    // Так как при стрелочной функции контекст теряется, значит используем event event.target

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this.num);
        };

        say();
    }
}

obj.sayNumber();


const double = a => a * 2;
const double1 = (a, b) => a * 2;

console.log(double(4));