/*
JavaScript Comprehensive Practice Test
-----------------------------------

This file contains practice questions covering concepts from:
1. Basics (variables, datatypes, strings, numbers, dates)
2. Objects and Arrays
3. Functions and Scopes
4. Control Flow
5. Iterations and Array Methods

Instructions:
- Try to solve each question without looking at your notes
- Test your solutions by running this file
- Add your own questions at the end of each section

?Section 1: JavaScript Basics
--------------------------*/

//* Q1: Variable Declaration Challenge
// Declare three variables using different declaration keywords (const, let, var)
// Make one variable that cannot be reassigned
// Try to reassign it and explain in a comment why it fails
// Your code here:
var a;
let b;
const c = 2;
//c = 3 //! can not reassign value to constant variable

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q2: Type Conversion
// You have: let score = "100" and let bonus = 50
// Calculate the sum (should be 150 not "10050")
// Your code here:
let score = "100";
let bonus = 50;
console.log(`${Number(score) + bonus}`);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q3: String Methods
// Create a username from an email address
// Example: "john.doe@example.com" → "john.doe"
// Must work with any email address
// Your code here:
let emailAddress = "john.doe@example.com";
let userName = emailAddress.substring(0, emailAddress.indexOf("@"));
console.log(userName);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q4: Number Challenge
// Create a function that:
// - Takes a price as a float (eg: 12.99)
// - Returns a formatted string like "₹12.99"
// - Handle cases where price might come as string
// Your code here:

let price = 12.99;
let priceString = `₹${String(price)}`;
console.log(priceString);

if (typeof priceString === "string") {
  console.log(Number(priceString.replace("₹", "")));
}

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q5: Date Manipulation
// Create a function that:
// - Takes a date as input
// - Returns an object with: { dayName, monthName, year }
// Example: new Date() → { dayName: "Tuesday", monthName: "June", year: 2025 }
// Your code here:

let dateNow = new Date();

let dateObj = (date) => {
  let arr = date.toDateString().split(" ");
  return {
    dayName: arr[0],
    monthName: arr[1],
    year: arr[3],
  };
};

console.log(dateObj(dateNow));

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
/*
?Section 2: Arrays and Objects
---------------------------*/

//* Q6: Array Operations
// Given: let numbers = [1, 2, 3, 4, 5]
// Create three new arrays:
// 1. All numbers doubled
// 2. Only even numbers
// 3. All numbers squared and then filtered to be less than 20
// Your code here:
let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

let squaredNumbers = numbers.map((num) => num * num).filter((num) => num < 20);
console.log(squaredNumbers);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q7: Object Manipulation
// Create an object representing a library book with:
// - Basic properties (title, author, isbn)
// - A method to display book info
// - A method to check if book is long (>300 pages)
// Use both dot and bracket notation
// Your code here:
const library = {
  books: [
    {
      title: "book1",
      author: "author1",
      isbn: "978-1-61628-113-9",
      page: 250,
    },
    {
      title: "book2",
      author: "author9",
      isbn: "978-1-61628-113-9",
      page: 500,
    },
    {
      title: "book3",
      author: "author4",
      isbn: "978-1-61628-113-9",
      page: 301,
    },
    {
      title: "book4",
      author: "author2",
      isbn: "978-1-61628-113-9",
      page: 205,
    },
    {
      title: "book5",
      author: "author6",
      isbn: "978-1-61628-113-9",
      page: 354,
    },
    {
      title: "book6",
      author: "author8",
      isbn: "978-1-61628-113-9",
      page: 299,
    },
  ],
  bookInfo: function () {
    this.books.forEach((book) => {
      console.log(
        `Title: ${book.title}, Author: ${book.author}, Pages: ${book.page}`
      );
    });
  },

  filterPage: function (pageLimit = 300) {
    const longBooks = this.books.filter((book) => book.page > pageLimit);

    console.log("Books with more than", pageLimit, "pages:");

    longBooks.forEach((book) => {
      console.log(`- ${book.title} (${book.page} pages)`);
    });

    return longBooks;
  },
};

library.bookInfo();
library.filterPage();

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q8: Array of Objects
// Create an array of student objects
// Each student has: name, grades array, and isPass status
// Write methods to:
// 1. Calculate average grade
// 2. Update isPass based on average (pass >= 60)
// 3. Find highest scoring student
// Your code here:

const students = [
  {
    name: "student1",
    grades: [57, 46, 23, 75],
    isPass: "fail",
  },
  {
    name: "student2",
    grades: [59, 78, 85, 73],
    isPass: "fail",
  },
  {
    name: "student3",
    grades: [34, 23, 43, 30],
    isPass: "fail",
  },
];

function calcAvg(gradeArr) {
  return gradeArr.reduce((acc, curr) => acc + curr, 0) / gradeArr.length;
}

function updatePassStatus() {
  students.forEach((student) => {
    const avg = calcAvg(student.grades);
    student.isPass = avg >= 60 ? "pass" : "fail";
  });
}

function findTopStudent() {
  return students.reduce((highest, student) => {
    const currentAvg = calcAvg(student.grades);
    const highestAvg = calcAvg(highest.grades);
    return currentAvg > highestAvg ? student : highest;
  });
}

console.log("Average grades:");
students.forEach((student) => {
  console.log(`${student.name}: ${calcAvg(student.grades).toFixed(2)}`);
});

updatePassStatus();
console.log("\nUpdated pass/fail status:");
students.forEach((student) => {
  console.log(`${student.name}: ${student.isPass}`);
});

const topStudent = findTopStudent();
console.log(
  "\nHighest scoring student:",
  topStudent.name,
  "with average:",
  calcAvg(topStudent.grades).toFixed(2)
);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q9: Object Destructuring
// Create a nested object representing a company
// Practice destructuring to extract:
// - Company name, year
// - CEO's name, experience
// - First two office locations
// Your code here:
const company = {
  name: "TechNova Solutions",
  foundedYear: 2012,
  CEO: {
    CEO_name: "John Doe",
    experience: "15 years",
  },
  officeLocations: [
    {
      city: "Bangalore",
      country: "India",
    },
    {
      city: "San Francisco",
      country: "USA",
    },
  ],
};

const { name, foundedYear } = company;
console.log(name);
console.log(foundedYear);

const { CEO_name, experience } = company.CEO;
console.log(CEO_name);
console.log(experience);

const [{ city: city1, country: country1 }, { city: city2, country: country2 }] =
  company.officeLocations;
console.log(`First Office: ${city1}, ${country1}`);
console.log(`Second Office: ${city2}, ${country2}`);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q10: Array Methods
// Given an array of product objects with name, price, category
// Use array methods to:
// 1. Find total cost of all products
// 2. Create category-wise price list
// 3. Find most expensive product
// Your code here:

const products = [{}];

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
/*
?Section 3: Functions and Scopes
-----------------------------*/

//* Q11: Function Types
// Create the same functionality using:
// 1. Function declaration
// 2. Function expression
// 3. Arrow function
// Function should calculate age from birth year
// Your code here:

let currentYear = new Date().getFullYear();

function ageDeclaration(birth) {
  //? Function Declaration
  return currentYear - birth;
}
console.log(ageDeclaration(2005));

let ageExpression = function (birth) {
  //? Function Expression
  return currentYear - birth;
};
console.log(ageExpression(2004));

let ageArrow = (birth) => currentYear - birth; //? Arrow Function
console.log(ageArrow(2006));

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q12: Closure Challenge
// Create a counter function that:
// - Has private variable count
// - Methods: increment, decrement, getCount
// - Optional: Add min, max limits
// Your code here:

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q13: Function Parameters
// Create a function that calculates total cost with:
// - Base price
// - Tax rate (default: 10%)
// - Discount (default: 0)
// - Shipping (default: 5)
// Handle edge cases (negative values, missing params)
// Your code here:

function totalCost(basePrice, tax = 0.1, discount = 0, shipping = 5) {
  if (basePrice < 0 || tax < 0 || discount < 0 || shipping < 0) {
    console.log("Please enter positive values");
  } else if (basePrice === null || basePrice === undefined) {
    console.log("Please give base price");
  } else {
    return (basePrice - basePrice * discount) * (1 + tax) + shipping;
  }
}

console.log(totalCost(110).toFixed(2));

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q14: Scope Challenge
// Demonstrate your understanding of scope by:
// 1. Creating global variable
// 2. Creating function-scoped variable
// 3. Creating block-scoped variable
// 4. Show how shadowing works
// Your code here:

let globalVar = 20; //? Global Variable
function functionScope() {
  let functionScopeVar = 20; //? Functions Scope Variable
}
if (true) {
  let blockScopeVar = 20; //? Block Scope Variable
}

//? Shadowing
let x = 10;
function Shadow() {
  let x = 20;
  console.log(x);
}
console.log(x);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q15: IIFE Pattern
// Create an IIFE that:
// - Manages a private counter
// - Returns methods to manipulate counter
// - Protects counter from global scope
// Your code here:
const counter = (function () {
  let count = 0;
  return function () {
    count++;
    return count;
  };
})();

console.log(counter());
console.log(counter());
console.log(counter());

// console.log(count) //! can not access it

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
/*
?Section 4: Control Flow
----------------------*/

//* Q16: Complex Condition
// Create a function that checks if a year is:
// - A leap year
// - In the past, present, or future
// - Within 100 years of current year
// Use if-else and logical operators
// Your code here:

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q17: Switch Statement
// Create a grade calculator that:
// - Takes numerical score
// - Returns letter grade
// - Handles invalid inputs
// Use switch statement
// Your code here:

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q18: Ternary Operators
// Refactor this if-else into ternary:
// if (age >= 18) {
//     return "Can vote";
// } else if (age >= 16) {
//     return "Can drive";
// } else {
//     return "Too young";
// }
// Your code here:
let age = 15;
const result = age >= 18 ? "Can Vote" : age >= 16 ? "Can Drive" : "Too Young";
console.log(result);
console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q19: Nullish Coalescing
// Create a function that:
// - Takes user input
// - Has default values
// - Uses ?? operator
// - Handles edge cases
// Your code here:

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q20: Short-Circuit Evaluation
// Create examples demonstrating:
// - && operator use case
// - || operator use case
// - ?? operator use case
// Explain each in comments
// Your code here:

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
/*
?Section 5: Iterations and Array Methods
------------------------------------*/

//* Q21: Loop Comparison
// Solve the same problem using:
// 1. for loop
// 2. while loop
// 3. do-while loop
// Problem: Calculate factorial of a number
// Your code here:

let num = 5;
let sum = 1;
for (let i = 1; i <= num; i++) {
  sum = sum * i;
}
// console.log(sum)

let i = 1;
sum = 1;
while (i <= 5) {
  sum = sum * i;
  i++;
}
// console.log(sum)

let j = 1;
sum = 1;
do {
  sum = sum * j;
  j++;
} while (j <= 5);
console.log(sum);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q22: Array Iteration
// Given an array of objects (books)
// Use different iteration methods:
// 1. for...of to display all books
// 2. for...in to display object properties
// 3. forEach to display book titles
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
];
// Your code here:
for (const book of books) {
  console.log(book);
  for (const properties in book) {
    console.log(properties);
  }
}
books.forEach((book) => {
  console.log(book.title);
});

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q23: Map Method
// Create a chain of map operations:
// - Start with array of numbers
// - Double each number
// - Convert to string
// - Add "$" prefix
// Your code here:
let arrNumbers = [1, 2, 3, 4, 5];
let mappedNumbers = arrNumbers
  .map((num) => num * 2)
  .map((num) => String(num))
  .map((num) => `$${num}`);
console.log(mappedNumbers);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q24: Filter Method
// Create an array of transactions
// Filter to find:
// - Transactions above $100
// - Transactions from specific category
// - Transactions in date range
const transactions = [
  { date: "2025-05-01", amount: 120.5, category: "Electronics" },
  { date: "2025-05-15", amount: 45.99, category: "Groceries" },
  { date: "2025-06-01", amount: 199.99, category: "Electronics" },
  { date: "2025-06-05", amount: 75.0, category: "Clothing" },
  { date: "2025-06-07", amount: 150.0, category: "Entertainment" },
];
// Your code here:
let above100 = transactions.filter((transaction) => transaction.amount > 100);
console.log(above100);

let categories = transactions.filter(
  (transaction) => transaction.category === "Electronics"
);
console.log(categories);

let filterDate = transactions.filter(
  (transaction) =>
    new Date(transaction.date) >= new Date("2025-05-15") &&
    new Date(transaction.date) <= new Date("2025-06-05")
);
console.log(filterDate);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q25: Reduce Method
// Use reduce to:
// 1. Calculate total of shopping cart
// 2. Group objects by property
// 3. Find max value in array
// Your code here:

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q26: Map vs Filter vs Reduce
// Solve this problem using each method:
// Given array of student scores
// - Map: Convert to percentages
// - Filter: Find passing scores
// - Reduce: Find average score
// Compare approaches in comments
const scores = [85, 92, 48, 75, 63, 35, 95, 88, 58, 70];

// Your code here:

const scoreInPercentage = scores.map((score) => `${score}%`);
console.log(scoreInPercentage);

const passingScores = scores.filter((score) => score >= 50);
console.log(passingScores);

const averageScore =
  scores.reduce((score, current) => score + current, 0) / scores.length;
console.log(averageScore);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q27: Method Chaining
// Create a chain of array methods to:
// 1. Start with array of numbers
// 2. Filter out odd numbers
// 3. Double even numbers
// 4. Sum the results
// Your code here:

const numNumNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 20, 25, 28];

const oddNumbers = numNumNumbers
  .filter((num) => num % 2 !== 0)
  .reduce((odd, current) => odd + current, 0);
const doubledEvenNumbers = numNumNumbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2)
  .reduce((num, current) => num + current, 0);
console.log(oddNumbers);
console.log(doubledEvenNumbers);
console.log(doubledEvenNumbers + oddNumbers);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q28: Custom Iterator
// Create an iterator function that:
// - Takes array and step count
// - Returns every nth item
// Your code here:

function customIterator(array, count) {
  let newArray = [];
  for (let i = count; i < array.length; i += count) {
    if (array[i] === undefined) {
      break;
    }
    let temp = array[i];
    newArray.push(temp);
  }
  console.log(newArray);
}

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];
customIterator(arr, 4);

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q29: Real-World Example
// Create shopping cart functionality:
// - Add/remove items
// - Calculate total
// - Apply discounts
// - Show cart summary
// Use array methods and objects

const cart = [
  {
    id: 1,
    name: "Smartphone",
    price: 599.99,
    quantity: 1,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Running Shoes",
    price: 79.99,
    quantity: 2,
    category: "Sports",
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: 129.99,
    quantity: 1,
    category: "Home",
  },
  {
    id: 4,
    name: "Backpack",
    price: 49.99,
    quantity: 1,
    category: "Fashion",
  },
];
// Your code here:

function addRemove(cart, item) {
  
}
console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q30: Performance Challenge
// Compare performance of:
// - Regular loop
// - Array methods
// - Optimized solution
// Use console.time()
// Your code here:

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
/*
?Section 6: Additional Practice
---------------------------*/

//* Q31: Combining Arrays and Objects
// Create a function that:
// - Takes an array of product objects
// - Groups them by category
// - Calculates category-wise total
// - Returns sorted categories by total sales
// Use methods we learned: map, filter, reduce
// Your code here:

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q32: Control Flow with Array Methods
// Create a grading system that:
// - Takes array of student scores
// - Assigns grades using if-else or switch
// - Creates summary using array methods
// - Returns statistics (highest, lowest, average)
// Your code here:

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
//* Q33: Objects and Loops Challenge
// Create a mini library system:
// - Array of book objects
// - Methods to add/remove books
// - Search by author/title
// - Sort by publication year
// - Print available books
// Use for...of and array methods
// Your code here:

console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
/*
?Add Your Own Questions Below
-------------------------*/

//* Q34:
// Your question here:
// Your code here:

/*
Test your solutions:
------------------*/
// Add console.log() statements to test your solutions
// Run this file using Node.js to see the output
