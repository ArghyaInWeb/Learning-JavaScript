//- .map()
//? The .map() method creates a new array populated with the results of 
//? calling a provided function on every element in the calling array. 
//? It does not execute the function for empty elements.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Using map to create a new array with each number multiplied by 2

const doubledNumbers = numbers.map((num) => num * 2); // ?Implicit return 
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

//- Chained map and filter

const newNum = numbers
    .map( (num) => num * 10)
    .map( (num) => num + 2)
    .filter( (num) => num >= 25)

console.log(newNum)