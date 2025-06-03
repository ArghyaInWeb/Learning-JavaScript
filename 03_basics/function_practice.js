/*
JavaScript Functions & Scope Practice
----------------------------------

These questions focus ONLY on concepts from 03_basics:
- Function declarations
- Function expressions 
- Basic function parameters
- Function return values
- Global vs Block scope
- Variable scope (var, let, const)
- Function hoisting

?Level 1: Basic Functions
----------------------*/

//* Q1: Function Declaration
// Create a function declaration called 'welcomeMessage' that:
// - Takes a name parameter
// - Returns "Welcome, [name]!"
// Then call it with your name
// Your code here:

function welcomeMessage(name) {
    return `Welcome ${name}!`
}

console.log(welcomeMessage("John"))


//* Q2: Function Expression
// Create a function expression called 'multiplyNumbers' that:
// - Takes two parameters
// - Returns their product
// Try to call it before defining it (it should fail - write a comment explaining why)
// Your code here:

// console.log(multiplyNumbers(5, 5)) //! We have to define the function before to access it
const multiplyNumbers = function(num1, num2) {
    return num1 * num2
}
/*
?Level 2: Return Values
--------------------*/

//* Q3: Temperature Converter
// Create two functions:
// 1. Function declaration for celsiusToFahrenheit
// 2. Function expression for fahrenheitToCelsius
// Test both functions with different temperatures
// Your code here:

function celsiusToFahrenheit(temp) {
    return ((temp * (9 / 5)) + 32)
}

function fahrenheitToCelsius(temp) {
    return ((temp - 32) * (5 / 9))
}

console.log(celsiusToFahrenheit(0))
console.log(fahrenheitToCelsius(32))


//* Q4: String Processor
// Create a function that:
// - Takes a string parameter
// - Returns three values: 
//   * The string's length
//   * The string in uppercase
//   * The string's first character
// Your code here:

function giveMeString(string) {
    return {
        Length: string.length,
        Uppercase: string.toUpperCase(),
        First_Character: string[0] 
    }
}

console.log(giveMeString("John"))
/*
?Level 3: Scope Practice
---------------------*/

//* Q5: Variable Scope
// Write code that demonstrates:
// - A global variable
// - A block-scoped variable
// - Show how they behave differently
// Your code here:
let globalVar = "I am global"; //? Global variable
{
    let blockScopedVar = "I am block scoped"; //? Block-scoped variable
    console.log(blockScopedVar); //? This will work
}
console.log(globalVar); //? This will work
// console.log(blockScopedVar); //! This will throw an error because blockScopedVar is not accessible outside its block

//* Q6: Function Hoisting
// Demonstrate function hoisting by:
// 1. Calling a function declaration before its definition
// 2. Trying to call a function expression before its definition
// Add comments explaining what happens in each case
// Your code here:

console.log(hoistedFunction()); //? This will work because function declarations are hoisted
function hoistedFunction() {
    return "I am hoisted!";
}

// console.log(nonHoistedFunction()); //! This will throw an error because function expressions are not hoisted
const nonHoistedFunction = function() {
    return "I am not hoisted!";
}

//? Function declarations are hoisted to the top of their scope, allowing them to be called before they are defined.
//? Function expressions are not hoisted, so they cannot be called before their definition.

/*
Test your solutions:
------------------*/
// Add console.log() statements to test each solution
