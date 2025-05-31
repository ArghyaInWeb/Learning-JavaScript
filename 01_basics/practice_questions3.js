/*
JavaScript Challenge Practice
---------------------------

!Instructions:
1. These questions combine multiple concepts from basics:
   - Variables and type conversion
   - String operations and methods
   - Numbers, Math, and calculations
   - Dates and formatting

?Level 1: Mixed Type Operations
----------------------------*/

//* Q1: Shopping Cart Total
// You have these items:
let item1 = "599"; // Price as string
let item2 = 299; // Price as number
let discount = "10.5"; // Discount percentage as string
// Calculate the final price after discount
// Your code here:

//* Q2: Score Calculator
let score1 = "75.8";
let score2 = "92.7";
let score3 = "84.2";
// Calculate the average score (should be a number with 1 decimal place)
// Your code here:

/*
?Level 2: String Challenges
------------------------*/

//* Q3: Email Generator
let firstName = "johN";
let lastName = "DOe";
let company = "  techcorp ";
// Create an email address:
// - First name should be lowercase
// - Last name should be uppercase
// - Company should have no spaces
// Expected: john.DOE@techcorp.com
// Your code here:

firstName = firstName.toLowerCase();
lastName = lastName.toUpperCase();
company = company.trim();
console.log(`Email: ${firstName}.${lastName}@${company}.com`);

//* Q4: Password Generator
// Create a password using:
// - First 2 characters of firstName
// - Last 2 characters of lastName (in lowercase)
// - Current year
// Example: if firstName="John", lastName="DOE", year=2023
// Password should be: "JOoe2023"
// Your code here:

let firstName2 = "John";
let shortFirstName2 = firstName2.substring(0, 2).toUpperCase();

let lastName2 = "Doe";
let shortLastName2 = lastName2.slice(-2).toLowerCase();

let yearNow = "2025";
let password = shortFirstName2 + shortLastName2 + yearNow;
console.log(password);

/*
?Level 3: Math & Numbers
----------------------*/

//* Q5: Investment Calculator
let investment = "10000"; // Initial investment as string
let returnRate = "15.7"; // Return rate as string
let months = 6; // Number of months
// Calculate:
// 1. Convert all to proper numbers
// 2. Find monthly rate (yearly rate / 12)
// 3. Calculate final amount: investment * (1 + monthly rate/100)^months
// Round to 2 decimal places
// Your code here:

investment = Number(investment);
returnRate = Number(returnRate);
let monthlyRate = returnRate / 12;

let finalAmount = investment * (1 + (monthlyRate / 100) ** months);
console.log(finalAmount.toFixed(2));

//* Q6: Distance Converter
let kilometers = "126.3";
// Convert to:
// 1. Meters (1 km = 1000 m)
// 2. Centimeters (1 m = 100 cm)
// 3. Round each to whole numbers
// Your code here:

let meters = kilometers * 1000;
console.log(`${kilometers} km = ${meters} m`);

let centimeters = meters * 100;
console.log(`${meters} m = ${centimeters} cm`);

/*
?Level 4: Dates & Numbers
-----------------------*/

//* Q7: Birthday Calculator
// Create a date for: March 15, 2000
// Calculate:
// 1. What day of the week was it? (0-6)
// 2. How many years ago was it from current year?
// 3. What was the date 50 days after this birthday?
// Your code here:

let birthDay = new Date("03-15-2000");

let dayOfWeek = birthDay.getDay() + 1;
console.log(dayOfWeek);

let currentTime = new Date();
let currentYear = currentTime.getFullYear();
let yearsFromCurrent = currentYear - birthDay.getFullYear();
console.log(yearsFromCurrent);

let birthdayInMilliSec = birthDay.getTime();
let fiftyDayInMilliSec = 50 * 24 * 60 * 60 * 1000;

let dateFuture = birthdayInMilliSec + fiftyDayInMilliSec;
console.log(dateFuture);

let newDate = new Date(dateFuture);
console.log(newDate.toLocaleString());

/*
?Level 5: Grand Challenge
----------------------*/

//* Q8: Movie Ticket Calculator
let movieName = "  The Dark Knight  ";
let price = "12.99";
let quantity = "4";
let date = "2023"; // Year of movie
// Create a ticket summary with:
// 1. Movie name (properly formatted with no extra spaces)
// 2. Total cost (price * quantity, rounded to 2 decimals)
// 3. Price per person
// 4. How many years old the movie is from current year
// Your code here:
movieName = movieName.trim();
price = Number(price);
quantity = Number(quantity);
date = Number(date);

let currentYear2 = new Date().getFullYear();

let ticketSummary = {
  movie: movieName,
  Total_Cost: (price * quantity).toFixed(2),
  Price_Per_Person: price,
  Movie_Age: currentYear2 - date,
};

console.log(ticketSummary);

/*
Test your solutions:
------------------*/
// Add console.log() statements to test each answer
