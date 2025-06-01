/*
JavaScript Arrays Practice Questions
---------------------------------

These questions are based on array concepts from 02_basics folder:
- Array creation and access
- Basic array methods (push, pop, shift, unshift)
- Array operations (slice, splice)
- Array concatenation
- Array utility methods (isArray, from, of)

!Instructions:
1. Write your solutions below each question
2. Test your code by running this file
3. Don't use any concepts not covered in the basics

?Level 1: Basic Array Operations
-----------------------------*/

//* Q1: Array Creation and Access
// Create an array of your favorite fruits (at least 5)
// Then console.log the first and last fruit
// Your code here:

let favFruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"]
console.log(favFruits[0], favFruits[4])

//* Q2: Mixed Array
// Create an array with different types of elements:
// - a string
// - a number
// - a boolean
// - null
// - undefined
// Your code here:

let mixedArr = ["Hello", 69, true, null, undefined]

/*
?Level 2: Array Methods
--------------------*/

//* Q3: Shopping Cart
// Start with this cart array: ["Milk", "Bread", "Butter"]
let cart = ["Milk", "Bread", "Butter"];
// 1. Add "Eggs" to the end
// 2. Add "Salt" to the beginning
// 3. Remove the last item
// 4. Remove the first item
// 5. Console.log the final cart
// Your code here:

cart.push("Eggs")
cart.unshift("Salt")
console.log(cart)

cart.pop()
cart.shift()
console.log(cart)

//* Q4: Array Search
let numbers = [11, 22, 33, 44, 55];
// 1. Check if 33 is in the array 
// 2. Find the index of 44 
// 3. Check if 77 is in the array
// Your code here:

console.log(numbers.includes(33))
console.log(numbers.indexOf(44))
console.log(numbers.includes(77))

/*
?Level 3: Array Operations
-----------------------*/

//* Q5: Phone Number Formatter
// Given this array: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
// Use slice to create these formats:
// - Area code (first 3 numbers)
// - First part (next 3 numbers)
// - Last part (last 4 numbers)
// Your code here:

let phoneNo = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

let areaCode = phoneNo.slice(0, 3)
console.log(areaCode)

let firstPart = phoneNo.slice(3, 6)
console.log(firstPart)

let lastPart = phoneNo.slice(6)
console.log(lastPart)

//* Q6: Email List Cleanup
// Start with: ["work@email.com", "personal@email.com", ".", "random@email.com", ""]
// Use splice to:
// 1. Remove the "." from the array
// 2. Remove the empty string from the end
// Your code here:

let emailList = ["work@email.com", "personal@email.com", ".", "random@email.com", ""]
console.log(emailList)

let removedDot = emailList.splice(2, 1)
let removedStr = emailList.splice(3, 1)

console.log(emailList)

/*
?Level 4: Array Concatenation
-------------------------*/

//* Q7: Playlist Merger
// Given these arrays:
let playlist1 = ["Song1", "Song2", "Song3"];
let playlist2 = ["Song4", "Song5"];
// Create a new playlist array that combines both:
// 1. Using concat()
// 2. Using spread operator (...)
// Your code here:

console.log(playlist1.concat(playlist2))
let bySpread = [...playlist1, ...playlist2]
console.log(bySpread)

//* Q8: Student Groups
// Combine these arrays into one:
let group1 = ["John", "Jane"];
let group2 = ["Mike", "Sarah"];
let group3 = ["David", "Anna"];
// Try both concat and spread operator
// Your code here:

console.log((group1.concat(group2)).concat(group3))


let usingSpread = [...group1, ...group2, ...group3]
console.log(usingSpread) 

/*
?Level 5: Array Utility Methods
---------------------------*/

//* Q9: String to Array
// Convert this string into an array where each character is an element:
let name = "JavaScript";
// Use Array.from()
// Your code here:

console.log(Array.from(name))

//* Q10: Array Builder
// Create an array from these individual numbers:
let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;
// Use Array.of()
// Your code here:

console.log(Array.of(num1, num2, num3, num4))

/*
?Bonus Challenge
-------------*/

//* Q11: Nested Array Flattening
// Given this nested array:
let nested = [1, [2, 3], [4, [5, 6]], 7];
// Flatten it to one level
// Use flat()
// Your code here:

console.log(nested.flat())

// Add console.log() statements to test your solutions
