/* Homework 5
   Exercise 2 JavaScript code
   -- Array - Use filter, map and reduce 
*/

// Create an array
const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// An array of odd numbers
const arrOdd = arrNum.filter(x => x % 2 === 1);
console.log("An array of odd numbers");
console.log(arrOdd);
console.log();

// An array of numbers divisible by 2 or 5
const arrDiv25 = arrNum.filter(x => (x % 2 === 0) || (x % 5 === 0));
console.log("An array of numbers divisible by 2 or 5");
console.log(arrDiv25);
console.log();

// An array of numbers divisible by 3, squared
// If the number is divisible by 3, square it
const arrDiv3 = arrNum.filter(x => x % 3 === 0).map(x => Math.sqrt(x));
console.log("An array of numbers divisible by 3, squared")
console.log(arrDiv3);
console.log();

// The sum of the following: square the numbers divisible by 5
const arrSumDiv5 = arrNum.filter(x => x % 5 === 0).reduce((acc, value) => acc + value, 0);
console.log("The sum of the following: square the numbers divisible by 5");
console.log(arrSumDiv5);