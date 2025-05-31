/*
JavaScript More Practice Questions
--------------------------------

!Instructions:
1. These questions only use concepts from the basics:
   - Variables (const, let, var)
   - Data types
   - Type conversions
   - Basic operations (+, -, *, /, %)
   - Strings and string methods
   - Numbers and Math object
   - Date and Time

?Level 1: Variables and Types
---------------------------*/

//* Q1: Variable Challenge
let num = "25";
let price = 25;
// What will be the output of these? Add your predictions as comments
// console.log(num + price)  // output: '2525'
// console.log(Number(num) + price)  // output: 50 
// console.log(String(price) + num)  // output: '2525'


//* Q2: Type Conversion Practice
let score = "100";
let bonus = "20";
// Convert and add these properly to get 120
// Your code here:

console.log(`Marks: ${Number(score) + Number(bonus)}`);

/*
?Level 2: Strings
----------------*/

//* Q3: String Methods 
let userName = "   Dev Sharma  ";
// Use string methods to:
// 1. Remove spaces from both ends
// 2. Convert to uppercase
// 3. Find the length
// Your code here:

console.log(userName.trim())
console.log(userName.toUpperCase())
console.log(userName.length)

//* Q4: String Operations
let firstName = "John";
let lastName = "Doe";
// Create a full name with proper spacing
// Then find the length of the full name (should be 8)
// Your code here:

let fullName = `${firstName} ${lastName}`;
console.log(fullName)
console.log(fullName.length)

/*
?Level 3: Numbers & Math
----------------------*/

//* Q5: Math Operations
// Round these numbers and store in new variables:
let price1 = 99.99;  // Round up
let price2 = 100.01; // Round down
// Your code here:

console.log(Math.ceil(price1))
console.log(Math.floor(price2))

//* Q6: Random Numbers
// Generate a random number between 10 and 20
// Hint: Use Math.random() and Math.floor()
// Your code here:

let min = 10
let max = 20

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNumber)


/*
?Level 4: Dates
-------------*/

//* Q7: Current Date
// Get today's date and store:
// 1. Current year
// 2. Current month
// 3. Current day
// Your code here:

let currentDate = new Date()
let currentYear = currentDate.getFullYear()
let currentMonth = currentDate.getMonth() + 1
let currentDay = currentDate.getDay() + 1

console.log(`Today is Day ${currentDay} of ${currentMonth}/${currentYear}`);

/*
Test your code:
-------------*/
// Add console.log() statements to test your solutions
