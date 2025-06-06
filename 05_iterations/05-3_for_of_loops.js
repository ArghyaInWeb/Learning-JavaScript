//- for of loops
//? for of loops are used to iterate over iterable objects like arrays, strings, maps, ,ets, etc.

let arr = [1, 2, 3, 4, 5]
for (const value of arr) {
    console.log(value)
}
// Output: 1 2 3 4 5


//- for of loops can also be used with strings
let str = "Hello"
for (const ch of str) {
    console.log(ch)
}
// Output: H e l l o

//- for of loops can also be used with maps
let map = new Map([
    ["name", "John"],
    ["age", 30],
    ["city", "New York"]
])

for (const key of map) {
    console.log(key) //? Displays the key-value pairs as ARRAYS
}
// Output: [ 'name', 'John' ] [ 'age', 30 ] [ 'city', 'New York' ]

for (const [key, value] of map) { //? Destructuring the array to get key and value separately
    console.log(`${key}: ${value}`) //? Displays the key-value pairs as STRINGS
}
// Output: name: John
// Output: age: 30
// Output: city: New York

//! for of loops cannot be used with objects directly