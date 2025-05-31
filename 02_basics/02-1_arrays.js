//? An array is an object which stores multiple data in a contiguous memory.
//? It can also store data for multiple datatypes

//* Array Syntax
let myArr = [1, 2, 3, 4, 5]

console.log(myArr[0]) //? To access an element in the array; Here we are accessing the element at 0th index

let myArr2 = ["Hello", 3.14, '@', null, false, 69, undefined] //? we can put any datatypes in the array

//* Array Methods

let arr = [1, 2, 3, 4, 5]

arr.push(6) //? Inserts value from the last in an array
console.log(arr)
arr.pop() //? Deletes the last value in the array
console.log(arr) 

arr.unshift(9) //? Inserts value from the start in an array
console.log(arr) 
arr.shift() //? Deletes the first value in the array
console.log(arr)

console.log(arr.includes(5)) //? Checks if the element is present in the array
console.log(arr.indexOf(3))  //? Returns the index of the element in the array; Returs -1 If the element is not present in the array

let newArr = arr.join() //? Joins the elements of the array into a string
console.log(typeof newArr, newArr) // output: string; 1,2,3,4,5,6


let originalArray = [1, 2, 3, 4, 5];
console.log(originalArray)

console.log("Slicing: ",  originalArray.slice(1, 3)) //? Returns a new array with the elements from index 1 to index 3 (exclusive)
console.log("Original Array after Slicing:", originalArray) //? The original array remains unchanged

console.log("Splicing: ", originalArray.splice(1, 3)) //? Removes the elements from index 1 to index 3 (exclusive) and returns them
console.log("Original Array after Splicing:", originalArray) //? The original array is modified

//* More Array Methods
let numbers = [1, 2, 3, 4, 5];
let names = ["Alice", "Bob", "Charlie"];

// Concatenating arrays
//numbers.push(names) //! Wrong way to concatenate arrays
//console.log(numbers) //? Adds the names array as a single element to the end of numbers
                                   
let concatenatedArray = numbers.concat(names) //? Correct way to concatenate arrays
console.log(concatenatedArray) //? Combines both arrays into a new array

//- Better way to concatenate arrays
let spreadArray = [...numbers, ...names] //? Using spread operator to concatenate arrays; can concatenate any number of arrays 
console.log(spreadArray) //? Combines both arrays into a new array 

let aNewArray = [1, 2, 3, 4, [5, 6, 7], 8, 9, [10, 11, [12, 13]]] //? Nested array
console.log(aNewArray.flat()) //? Flattens the array by one level; removes one level of nesting
console.log(aNewArray.flat(Infinity)) //? Flattens the array completely; removes all levels of nesting

console.log(Array.isArray("Arghya")) //? Checks if the value is an array; returns false
console.log(Array.isArray(aNewArray)) //? Checks if the value is an array; returns true

console.log(Array.from("Arghya")) //? Converts a string to an array; returns ['A', 'r', 'g', 'h', 'y', 'a']
console.log(Array.from({name: "Arghya"})) //? Converts "Arghya" to an array; returns ['A', 'r', 'g', 'h', 'y', 'a']; 
                                          //? But counld not covert name into an array and returns an empty array


let score1 = 89;
let score2 = 92;
let score3 = 85;                                          
                
console.log(Array.of(score1, score2, score3)) //? Creates a new array with the given elements; returns [89, 92, 85]