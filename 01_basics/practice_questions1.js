/*
JavaScript Basics Practice Questions
---------------------------------

!Instructions:
1. Write your answers below each question
2. Test your code by running this file
3. Check the console output to verify your answers

?Level 1: Variables & Data Types
-----------------------------*/

//* Q1: What will be the output and why? Fix the error if any.
const user = "John";
// user = "Jane";

//? Your explanation: User variable is a (const) variable which means after a assigning a value to the User we cannot change it's value
//! Answer: ERROR cannot reassign a constant value.


//* Q2: Check the type of these values
let val;
let nullVal = null;
// Write code to check their types
// Your code here:

console.log(typeof val); //output: undefined
console.log(typeof nullVal); //output: object


/*
Level 2: Type Conversions
------------------------*/

//* Q3: What will be the output of these conversions?
// Uncomment and add your prediction as comments
console.log(Number("123abc"));
console.log(String(true));
console.log(Boolean(""));
console.log(Boolean(" "));

// Your predictions:
// output: 1. NaN
// output: 2. "true"
// output: 3. false
// output: 4. true


/*
Level 3: Operators & String Concatenation
---------------------------------------*/

//* Q4: What will be the output? Add your prediction as comments
let result1 = 2 + "2";
let result2 = "2" + 2;
let result3 = 2 + 2 + "2";
// Your prediction:
console.log(result1) //output: 22
console.log(result2) //output: 22
console.log(result3) //output: 42


//* Q5: What's the difference in output? Add your prediction as comments
let x = 5;
console.log(x++); //? Post-increment returns the value before incrementing
console.log(++x); //? Pre-increment, Invcrements the value first, and then returns the value
// Your prediction:

//output: 1) 5
//output: 2) 7

/*
Level 4: Numbers & Math
----------------------*/

//* Q6: Create a function that generates a random number between 15 and 25 (inclusive)
function generateRandomNumber() {
    // Your code here:
    let min = 15
    let max = 25

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNumber;
}

//console.log(generateRandomNumber()); //? uncomment this

//* Q7: Format the following number in different ways
let number = 123.456;
// 1. Show exactly 2 decimal places
// Your code here:

console.log(number.toFixed(2))

// 2. Show this number with 4 significant digits
// Your code here:

console.log(number.toPrecision(4))

/*
Practice Tasks
-------------*/

//* Task 1: Currency Formatter
// Create a function that takes a number and formats it as Indian currency (use toLocaleString)
function formatToIndianCurrency(amount) {
    // Your code here:
    let inCurrency = amount.toLocaleString('en-IN');
    return inCurrency;
}

// console.log(formatToIndianCurrency(500000)); //? uncomment this

//* Task 2: Temperature Converter
//* Create two functions to convert temperatures
function celsiusToFahrenheit(celsius) {
    // Your code here:
    let fahrenheit = (celsius * (9 / 5)) + 32
    return fahrenheit;
}
// console.log(celsiusToFahrenheit(25)); //? uncomment this

function fahrenheitToCelsius(fahrenheit) {
    // Your code here:
    let celsius = (fahrenheit -32) * (5 / 9)
    return celsius;
}

// console.log(fahrenheitToCelsius(98.6)); //? uncomment this

//* Task 3: Random Password Generator
//* Create a function that generates a random 4-digit PIN
function generatePin() {
    // Your code here:
    let randomPin = Math.floor(Math.random() * 9000) + 1000  // This ensures a number between 1000 and 9999
    return randomPin;
}

// console.log(generatePin()); //? uncomment this

//* Task 4: Type Checker
//* Create a function that returns an object containing:
// - The type of the value
// - Whether it's truthy or falsy
// - Its string representation
function checkValue(value) {
    // Your code here:
    return {
        type: typeof value,
        isTruthy: Boolean(value),
        String: String(value)
    };
}


/*
Test your solutions:
------------------*/
// Uncomment these to test your solutions
console.log(checkValue("Hello")); //? uncomment this
console.log(checkValue(0)); //? uncomment this
console.log(checkValue(undefined)); //? uncomment this
