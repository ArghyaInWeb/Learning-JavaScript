//- for in loops
//? for in loops are used to iterate over the properties of an object
//? It iterates over the keys of the object
//? It can also be used to iterate over the indices of an array

const myObj = {
    py: 'python',
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
}

for (const key in myObj) {
    console.log(`${key}: ${myObj[key]}`) //? Displays the key-value pairs as STRINGS
}


//- in array, for in loops will iterate over the indices of the array
//? It is not recommended to use for in loops with arrays as it can lead to unexpected results
//? It is recommended to use for of loops or forEach() method for arrays

const fruits = ['apple', 'banana', 'cherry'];

for (const key in fruits) {
    console.log(key) //? Displays the indices of the array
    console.log(`${fruits[key]}`) //? Displays the elements of the array
}


