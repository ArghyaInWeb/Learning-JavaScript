function displayMyName() { //? Function declaration
    console.log("My name is arghya"); 
}

displayMyName(); //? Calling the function
displayMyName; //? Reference to the function (not calling it)

function addTwoNumbers(num1, num2) { //? Function declaration with parameters
    console.log(num1 + num2)
}

addTwoNumbers(5, 10); //? Calling the function with arguments
const result = addTwoNumbers(5, 10); //? Calling the function and storing the result 
//! (undefined in this case since function does not return anything)

//- Ways to return a value from a function
//* 1. Using return statement
function addTwoNumbersWithReturn(num1, num2) {
    let result = num1 + num2; //? Local variable to store the result
    return result; //? Returning the result
}

const sum = addTwoNumbersWithReturn(5, 10); //? Calling the function and storing the result
console.log(sum); // Output: 15

//* 2. Returning directly
function addTwoNumbersDirectly (num1, num2) {
    return num1 + num2; //? returning the result directly
    console.log("This will not be executed"); //? This line will not be executed
}

const resultDirect = addTwoNumbersDirectly(5, 19); //? Calling the function and storing the result
console.log(resultDirect); // Output: 24


//- Ways of passing arguments to a function

function loginUserMessage(username) {
    return `${username} just logged in!`;
}

console.log(loginUserMessage("google")); //? Passing a string as an argument
//output: "google just logged in!"
console.log(loginUserMessage("")); //? Passing an empty string as an argument
//output: " just logged in!" (no username provided)
console.log(loginUserMessage(123)); //? Passing a number as an argument
//output: "123 just logged in!" (number is converted to string)
console.log(loginUserMessage()); //? Passing no argument (undefined)
//output: "undefined just logged in!" (no username provided)


//* By giving default values to parameters
function loginUserWithDefault(username = "Guest") {
    return `${username} just logged in!`;
}

console.log(loginUserWithDefault()); //? Passing no argument (undefined) will use the default value
//output: "Guest just logged in!"


//* Rest parameters
function numbers(...num1) { //? Using rest parameters to accept multiple arguments
    return num1; //? num1 is an ARRAY of all arguments passed
}

console.log(numbers(1, 2, 3, 4, 5)); //? Passing multiple arguments
//output: [1, 2, 3, 4, 5] (num1 is an array of all arguments passed)

//* Passing an object as an argument

const user = {
    name: "Arghya",
    age: 25,
}
function passingObject(anyObject) { //? Function that accepts an object as an argument
    return  `Name: ${anyObject.name}, Age: ${anyObject.age}` //? Accessing properties of the object
}
console.log(passingObject(user)); //? Passing the user object as an argument

console.log(passingObject({ //? Passing an object directly as an argument
    //? This object will be used as the argument for the function
    name: "john",
    age: 30
}))

//* Passing an array as an argument

const myArray = [1, 2, 3, 4, 5]

function getThirdValueFromArray(anyArray) {
    return anyArray[2] 
}

console.log(getThirdValueFromArray(myArray)); //? Passing the array as an argument
console.log(getThirdValueFromArray([400, 200, 69, 100])) //? Passing an array directly as an argument

