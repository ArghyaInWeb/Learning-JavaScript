//- For loops
//? For loops are used to repeat a block of code a certain number of times.
//? They are useful when you know how many times you want to repeat something.

//? The syntax is:
// for (initialization; condition; increment/decrement) {
//     Code to be executed
// }

for (let i = 0; i < 5; i++) {
    console.log(i) 
}
// This will print numbers 0 to 4

//- Nested for loops
//? You can also have loops inside loops, which is called a nested loop.
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        console.log(`i: ${i}, j: ${j}`); 
    }
    console.log('\n');
}
// This will print combinations of i and j values

//- Looping through arrays
let fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); 
}
// This will print each fruit in the array

//- Break and continue
//? You can use `break` to exit a loop early and 
//? `continue` to skip the current iteration and move to the next one.

//* Example of break
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        console.log(`${i} is detected`)
        break; //? Exits the loop when i is 5
    }
    console.log(i)
}

//* Example of continue
for (let i = 0; i <= 10; i++) {
    if (i === 5) {
        console.log(skipped)
        continue; //? Skips the current iteration when i is 5
    }
    console.log(i)
}
