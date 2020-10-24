'use strict';

//filter ===============================================

// const names = ['Ivan', 'Ann', 'Sergey', 'Voldemart'];

// const shortNames = names.filter(function (name) {
//     return name.length < 5;
// });

// console.log(shortNames);

//map ==================================================

// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map((item) => item.toLowerCase());

// console.log(result);

//every/some ===========================================

// Если some, то хотя бы один элемент массива должен соответствовать условию callback функции 
// const some = [4, 'qwq', 'dfghjk'];
// console.log(some.some(item => typeof(item) === 'number'));

// Если every, то все элементы должны соответствовать условию callback-функции
// console.log(some.every(item => typeof(item) === 'number'));

//reduce ================================================

//Собирает массив в одно целое

// const arr = [1, 4, 5, 3, 2, 6];
//         // sum = 0; current = 1;
//         // sum = 1; current = 4;
//         // sum = 5; current = 5;
//         // sum = 10; current = 3;
//         // sum = 13; current = 2;
//         // sum = 15; current = 6;
//         // sum = 21;


// у reduce имеется третий аргумент - начальное значение

// const res = arr.reduce((sum, current) => sum + current, 3);
// console.log(res)

// const arr = ['apple', 'pear', 'plum'];
// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res)

// Объект entries ===========================================

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0])

console.log(newArr)