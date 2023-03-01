/* Homework 5
   Exercise 1 JavaScript code
   -- Square Class
*/

// Create a class
class Square {
    constructor(side) {
        this.side = side;
    }
    perimeter () {
        let per = this.side * 4;
        return per;
    }
    area () {
        let a = Math.pow(this.side, 2);
        return a;
    }
    diagonal () {
        let dia = Math.sqrt(2 * this.area());
        return dia;
    }
    describe () {
        return `Square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()}, and diagonal of ${this.diagonal()}`;
    }
}

// Create objects
const square2 = new Square(2);
const square3 = new Square(3);
const square4 = new Square(4);

// Display
console.log(square2.describe());
console.log(square3.describe());
console.log(square4.describe());