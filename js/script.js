'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Введите ваше число');

// const reg = /\d/g;
// console.log(ans.match(reg));

const str = 'My name is R2D2';

console.log(str.match(/\D/ig));

//Обратные классы
// \D - не числа
// \W - не буквы


//Классы
// \d -diggits - ищем цифры
// \w -words ищем все слова, все буквы
// \s -spaces ищем все пробелы


//Флаги
// i - если мы хотим найти что-то внезависимости от регистра
// g - если мы хотим глобально найти несколько вхождений
// m - включает многострочный режим

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('PAssword');

// console.log(pass.replace(/./g, "*"));


// console.log('12-34-56'.replace(/-/g, ':'));


