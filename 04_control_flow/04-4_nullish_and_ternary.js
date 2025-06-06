//- Nullish Coalescing Operator (??)
//? It returns the right-hand operand when the left-hand operand is NULL or UNDEFINED, 
//? otherwise it returns the left-hand operand.

const userAge = null;
const defaultAge = 18;
const age = userAge ?? defaultAge; //? If userAge is null or undefined, use defaultAge
console.log(age); // Output: 18

//* Multiple Nullish Coalescing

const val = null ?? undefined ?? 0 ?? "default"; //? Evaluates from left to right, returns the first defined value
console.log(val); // Output: 0

//- Ternary Operator
//? It is a shorthand for an if-else statement. 
//? It takes three operands: a condition, a value if true, and a value if false.

const price = 100;
const discount = price > 50 ? "20% off" :  "No discount"; //? If price is greater than 50, apply 20% off, otherwise no discount
console.log(discount); // Output: "20% off"
