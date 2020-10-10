'use strict'

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    // let num = 220;
    console.log(num)
}

showFirstMessage('Hello world');
console.log(num)

// console.log(calc(1, 5));
// console.log(calc(2, 53));
// console.log(calc(5, 2));

// function calc(a, b) {
//     return (a + b);
// }

function ret() {
    let num = 150;
    return num;
}

const anotherNum = ret();
console.log(anotherNum)

const logger = function () {
    console.log('HELLO EPTA!')
};

logger();

const calc = (a, b) => {
    console.log(1)
    console.log(a + b)
    return a + b;
};
calc(1, 3)
// const calc = a => return a + b;