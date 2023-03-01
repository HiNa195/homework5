/* Homework 5
   Exercise 4 JavaScript code
   -- Arrays - Exercise 3 extended
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

// Calculate
for (const student of studentList) {
   // Add extra credit points using map
   student.scores = student.scores.map(x => x + 5);
   // Find the average using reduce
   const sum = student.scores.reduce((a, b) => a + b, 0);
   let ave = sum / student.scores.length;
   // Push to the array
   student.scores.push(ave);
   // Display
   console.log(`Full name (last, first): ${student.lastName}, ${student.firstName}`);
   console.log(`Updated scores are: ${student.scores}`);
}