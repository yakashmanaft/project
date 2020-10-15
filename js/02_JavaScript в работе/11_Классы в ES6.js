'use strict';

class Rectangle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor (height, width, text, bgColor) {
        super(height, width); //Вызывает то же самое что было у родителя
        //super всегда должен быть на первом месте в конструкторе. Можем указать в качества аргументов только те, которые нам необходимо взять у родителя
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World!', 'red');

div.showMyProps()
console.log(div.calcArea())

// const square = new Rectangle(10, 10);
// const long = new Rectangle(25, 96);


// console.log(long.calcArea());
// console.log(square.calcArea());