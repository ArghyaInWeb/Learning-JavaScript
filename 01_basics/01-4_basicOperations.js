let value = 3;
let negativeValue = -value;
console.log(negativeValue); //? -3

// Arithmetic operations
console.log(3 + 3); //? 6
console.log(3 - 3); //? 0
console.log(3 * 3); //? 9
console.log(3 / 3); //? 1
console.log(3 % 2); //? 1 (remainder of 3 divided by 2)
console.log(3 ** 2); //? 9 (3 raised to the power of 2)

// Increment and Decrement
let x = 5;
console.log(x++); //? 5 (post-increment, returns value before incrementing)
console.log(x); //? 6 (x is now incremented)
console.log(++x); //? 7 (pre-increment, increments before returning value)

console.log(x--); //? 7 (post-decrement, returns value before decrementing)
console.log(x); //? 6 (x is now decremented)
console.log(--x); //? 5 (pre-decrement, decrements before returning value)

// Assignment operations
let a = 10;
let b = 5;
a += b; //? 15 (equivalent to a = a + b)
console.log(a); //? 15
a -= b; //? 10 (equivalent to a = a - b)
console.log(a); //? 10
a *= b; //? 50 (equivalent to a = a * b)
console.log(a); //? 50
a /= b; //? 10 (equivalent to a = a / b)
console.log(a); //? 10
a %= b; //? 0 (equivalent to a = a % b)
console.log(a); //? 0
a **= b; //? 0 (equivalent to a = a ** b, 0 raised to any power is 0)
console.log(a); //? 0

// Comparison operations
console.log(3 == 3); //? true (equal value)
console.log(3 === 3); //? true (equal value and type)
console.log(3 != 4); //? true (not equal value)
console.log(3 !== 4); //? true (not equal value or type)
console.log(3 < 4); //? true (less than)
console.log(3 > 2); //? true (greater than)
console.log(3 <= 3); //? true (less than or equal to)
console.log(3 >= 2); //? true (greater than or equal to)

// Logical operations
console.log(true && true); //? true (logical AND)
console.log(true || false); //? true (logical OR)
console.log(!true); //? false (logical NOT)
console.log(!false); //? true (logical NOT)

// Bitwise operations
console.log(5 & 3); //? 1 (bitwise AND)
console.log(5 | 3); //? 7 (bitwise OR)
console.log(5 ^ 3); //? 6 (bitwise XOR)
console.log(~5); //? -6 (bitwise NOT, inverts bits)
console.log(5 << 1); //? 10 (left shift, shifts bits to the left)
console.log(5 >> 1); //? 2 (right shift, shifts bits to the right)
console.log(5 >>> 1); //? 2 (unsigned right shift, shifts bits to the right without sign)

// Typeof operator
console.log(typeof 3); //? "number" (type of 3 is number)
console.log(typeof "Hello"); //? "string" (type of "Hello" is string)
console.log(typeof true); //? "boolean" (type of true is boolean)
console.log(typeof null); //? "object" (null is considered an object in JavaScript)
console.log(typeof undefined); //? "undefined" (type of undefined is undefined)
console.log(typeof Symbol("symbol")); //? "symbol" (type of Symbol is symbol)
console.log(typeof { name: "Alice" }); //? "object" (type of object literal is object)
console.log(typeof [1, 2, 3]); //? "object" (arrays are also objects in JavaScript)
console.log(typeof function() {}); //? "function" (functions are a special type of object)
console.log(typeof NaN); //? "number" (NaN is a special numeric value in JavaScript)

// Ternary operator
let condition = true;
let message = condition ? "Condition is true" : "Condition is false"; //? "Condition is true" (if condition is true, returns first value, otherwise returns second)
console.log(message); //? "Condition is true"

//---- Some optional cases ----//

let str1 = "arghya";
let str2 = " biswas";
let str3 = str1 + str2; //? (concatenation of strings)
console.log(str3); //? "arghya biswas"

console.log("1" + 2); //? "12" (string concatenation, number is converted to string)
console.log(1 + "2"); //? "12" (string concatenation, number is converted to string)
console.log("1" + "2"); //? "12" (string concatenation)
console.log(1 + 2 + "3"); //? "33" (numbers are added first, then concatenated with string)
console.log("3" + 1 + 2); //? "312" (string concatenation, numbers are converted to strings)

console.log(true); //? true (boolean value)
console.log(+true); //? 1 (boolean true is converted to number 1)
console.log(-true); //? -1 (boolean true is converted to number 1, then negated)

console.log(+""); //? 0 (empty string is converted to number 0)
console.log(+" "); //? 0 (whitespace string is converted to number 0)


