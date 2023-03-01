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
        let x = `Square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()}, and diagonal of ${this.diagonal()}`;
        return x;
    }
}

// Call the class
const square = new Square(2);
// Display
console.log(square.describe());