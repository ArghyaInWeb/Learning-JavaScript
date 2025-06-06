//- While loops
//? While loops are used to repeat a block of code as long as a specified condition is true.
//? They are useful when you don't know how many times you want to repeat something.

//? The syntax is:
// while (condition) {
//     Code to be executed
// }

let count = 0; //? Initialize a counter variable
while (count < 5) { //? Continue looping as long as count is less than 5
    console.log(count) //? This will print numbers 0 to 4
    count++; //? Increment the counter
}

//- Through arrays
let numbers = [1, 2, 3, 4, 5];
let index = 0;

while (index < numbers.length) {
    console.log(numbers[index]); //? This will print each number in the array
    index++; //? Increment the index
}

//- Do-while loops
//? Do-while loops are similar to while loops, but they guarantee that the code block will run at least once.

//? The syntax is:
// do {
//     Code to be executed
// } while (condition);

let i = 5; //? Initialize a counter variable
do {
    console.log(i); //? This will print numbers 0 to 4
    i++; //? Increment the counter
} while (i < 5);
console.log('\n')

//--------
let j = 6
do {
    console.log(j)
    j++;
} while (j < 5) //! This will print 6 once, even though the condition is false
//? The code block runs once before checking the condition