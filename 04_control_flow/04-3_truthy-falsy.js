const userName = 'John Doe';

if (userName) { //? Check if userName is truthy
    console.log(`Hello, ${userName}!`);
} else {
    console.log('Hello, Guest!');
}


//- Falsy values
    //? Falsy values are values that evaluate to false in a boolean context
    //? The following values are considered falsy in JavaScript:
/* 
* false
* 0 (zero)
* -0 (negative zero)
* BigInt(0n) (BigInt zero)
* "" (empty string)
* null
* undefined
* NaN (Not a Number)
*/

//- Truthy values
    //? Truthy values are values that evaluate to true in a boolean context
    //? All values that are not falsy are considered truthy
    //? Examples of truthy values include:
/*
* "0" (non-empty string)
* "false" (non-empty string)
* [] (empty array)
* {} (empty object)
* function() {} (empty function)
* new Date() (date object)
* 42 (non-zero number)
*/

const arr = []

if (arr.length === 0) { //? Check if the array is empty
    console.log('Array is empty');
}

const obj = {};
if (Object.keys(obj).length === 0) { //? Check if the object is empty
    console.log('Object is empty');
}