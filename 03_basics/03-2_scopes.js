
if (true) {
    let a = 40
    const b = 50
    var c = 60
}

// console.log(a) //? let and const are block-scoped, so a and b are not accessible here
// console.log(b) //? let and const are block-scoped, so b is not accessible here
console.log(c) //? var is function-scoped or globally scoped, so c is accessible here

//! What is Global Scope?
    //? Global scope refers to variables that are accessible from anywhere in the code, outside of any function or block.
    //* Global scope is different in node environment and browser environment.
        //- In Node.js, global variables are accessible throughout the entire application.
        //- In the browser, global variables are accessible in the window object.


//! What is Block Scope?
    //? Block scope refers to variables that are only accessible within the block they are defined in, 
    //? such as within an if statement or a loop.

//- An example scenario

var value = 300; //* This is a global variable that can be accessed anywhere in the code
let value2 = 200; //* This is block-scoped and will not affect the global value variable

if(true) {
    var value = 30 //! This will overwrite the global value variable
    let value2 = 20 //? This is block-scoped and will not affect the global value variable
}

console.log(value); //? 30, because var is function-scoped or globally scoped, so it overwrites the global value 
//output: 30
console.log(value2); //? 200, because let is block-scoped, so it does not affect the global value2 variable
//output: 200


//- More on Scopes
//* Example 1
function one() {
    const username = "John"; //? This is a local variable, only accessible within this function
    function two() {
        const age = 25; //? This is also a local variable, only accessible within this function
        console.log(username); //? This will work, as username is accessible here
    }

    // console.log(age); //! This will not work, as age is not accessible here
    two() //? This will work, as two() is called within one(), and it can access username
}

one(); //? Calling the function one() will execute its code and call two() inside it

//* Example 2
if (true) {
    const username = "Alice"; //? This is a block-scoped variable, only accessible within this block
    if (username === "Alice") {
        const age = 30;
        console.log(username + age)
    }

    // console.log(age) //! This will not work, as age is not accessible here
}

// console.log(username) //! This will not work, as username is not accessible here

//- Function Hoisting
//? Function hoisting is a JavaScript mechanism where function declarations are moved to the top of their containing scope during the compilation phase.
console.log(addOne(5)) 
function addOne(num) { 
    return num + 1; //? This function can be called before its declaration due to hoisting
}

console.log(addTwo(5)) //? This will throw an error because addTwo is a function expression and cannot be called before its declaration
const addTwo = function(num) {
    return num + 2; //! This function cannot be called before its declaration, as it is a function expression
}

