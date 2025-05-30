let score = 400 //? Implicitly creating a number
console.log(score);

let balance = new Number(1000) //? Explicitly creating a number onject
console.log(balance); // OUTPUT: [Number: 1000]

//-----------------Number Methods---------------------//
console.log(balance.toString()); //? changes the number to a string
console.log(balance.toString().length); //? converts the number to a string and returns its length

console.log(balance.toFixed(2)); //? displays only 2 decimal places


let num = 123.7645
console.log(num.toPrecision(4)); //? displays the number with 4 significant digits --returns a string

let amount = 1000000
console.log(amount.toLocaleString()); //? by defallut displays the number by the user's locale
console.log(amount.toLocaleString('en-US')); //? explicitly displays the number in US format
console.log(amount.toLocaleString('en-IN')); //? explicitly displays the number in Indian format


//-----------------Math Object---------------------//

console.log(Math); //? Math object is a built-in object that has properties and methods for mathematical constants and functions

console.log(Math.PI); //? return the value of PI
console.log(Math.abs(-10)); //? return the absolute a value of a number

console.log(Math.round(4.6)); //? rounds a number to the nearest integer
console.log(Math.ceil(4.2)); //? rounds a number up to the nearest integer
console.log(Math.floor(4.8));//? rounds a number down to the nearest integer



//* Math.random

console.log(Math.random()); //? return a random number between 0 and 1
console.log(Math.random() * 10); //? return a number between 0 and 10
console.log(Math.floor(Math.random() * 10)); //? return a random INTEGER between 0 and 9
console.log(Math.floor(Math.random() * 10) + 1); //? (+1) is to add 1 to the random number,
                                                 //? so it returns a random INTEGER between 1 and 10

//* A common trick

const min = 10; //? initialize your minimum value
const max = 20; //? initialize your maximum value

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; //? return a random integer between MIN and MAX
console.log(randomNumber); //? prints a random between 10 and 20