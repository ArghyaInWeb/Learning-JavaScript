//- for each loops
//? forEach() method is used to iterate over the elements of an array
//? It is a method of the Array prototype
//? It takes a callback function as an argument
//? The callback function is called for each element of the array

// Syntax:
const arr = [1, 2, 3, 4, 5];

arr.forEach( function (val) {
    console.log(val); //? Displays each element of the array
})
console.log("-------");

//- Arrow function syntax:

arr.forEach( (val) => {
    console.log(val); //? Displays each element of the array
})

console.log("-------");
//- passing function as a parameter:

function printValue(val) {
    console.log(val); //? Displays each element of the array
}

arr.forEach(printValue); //? Passing the function reference as an parameter
console.log("-------");


arr.forEach( (val, index, anArr) => { 
    console.log(val, index, anArr); //? Displays each element of the array, its index, and the entire array
})

console.log("-------");

//- forEach() with Array of objects

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

users.forEach( (user) => {
    console.log(user.name) //? Displays the name of each user
})
console.log("-------");
