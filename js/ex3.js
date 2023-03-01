/* Homework 5
   Exercise 3 JavaScript code
   -- Array - Use filter, map, reduce, and pure functions
*/

//Declare studentList Array
const studentList = [
   {
       firstName: "Allan",
       lastName: "Able",
       scores: [95, 85, 92, 98]
   },
   {
       firstName: "Amy",
       lastName: "Alexander",
       scores: [80, 88, 100]
   },
   {
       firstName: "Betty",
       lastName: "Barns",
       scores: [70, 80, 90, 100]
   },
   {
       firstName: "Bob",
       lastName: "Bones",
       scores: [75, 85, 95, 85]
   },
   {
       firstName: "Cindy",
       lastName: "Chase",
       scores: [95, 90, 92, 98]
   },
   {
       firstName: "Charles",
       lastName: "Chips",
       scores: [88, 99, 90]
   },
];

// TO DO - Write higher order functions / There are many solutions
//Declare cLastNameResults.  Use functions and map a new array of objects
const cLastNameResults = [];
for (const student of studentList) {
   if (student.lastName.charAt(0) === "C") {
      // Use reduce to get sum
      const sum = student.scores.reduce((a, b) => a + b, 0);
      let ave = sum / student.scores.length;
      /* toFixed turn a number to a string
      let ave = Number((sum / student.scores.length).toFixed(2));
      */
      /* Or get sum without reduce
      let sum = 0;
      for (const s of student.scores) {
         sum += s;
      }
      */
      // Use reduce to get min and max
      const min = student.scores.reduce((a, b) => Math.min(a, b), Infinity);
      const max = student.scores.reduce((a, b) => Math.max(a, b), -Infinity);
      /* Or get min and max without reduce
      const min = Math.min.apply(Math, student.scores);
      const max = Math.max.apply(Math, student.scores);
      */
      // Add elements to the array
      cLastNameResults.push({
         firstName: student.firstName,
         lastName: student.lastName,
         min: min,
         max: max,
         average: ave
      });
   }
}

//Output
console.log(cLastNameResults);