//! Objects in JavaScript Part 1

//- What is an Object?
//- An object is a collection of properties, where each property is defined as a key-value pair.

//* Object Literals 
//? is a way to create an object using curly braces

const apps = {} //! It is an empty object literal
              //? It is a way to create an object without using the Object constructor
              //? It is a singleton object, as it can only have one instance
              //? It is used to store properties and methods related to the application
              //? It can be used to create a namespace for the application

const mySym = Symbol("Key") //? Symbols are unique and immutable data types that can be used as object keys

let User = {
    name: "Arghya",  //! key-value pair
    age: 20,         //! key are strings, values can be any datatype
    "Full Name": "Arghya Biswas", //! key can also be a string with spaces, but must be accessed using bracket notation
    [mySym]: "Value", //? key can also be a symbol, and can be used to access the value
    location: "India",
    email: "arghya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(User) //? Accessing the object

console.log(User.email) //? Accessing the value of a key in an object
console.log(User["Full Name"]) //? Accessing the value of a key in an object using bracket notation

User.age = 21 //? Updating the value of a key in an object
console.log(User) //? Updated object

User["Full Name"] = "Arghya B" //? Updating the value of a key in an object using bracket notation
console.log(User["Full Name"]) //? Updated value of the key in an object

//Object.freeze(User) //? Freezes the object, preventing any changes to it
User.age = 22 //? This will not change the value of age, as the object is frozen
console.log(User.age) //! Still 21, as the object is frozen

User.greeting = function() { //? Adding a method to the object
    console.log("Hello!") //? This method can be called using User.greeting()
}

console.log(User.greeting()) //? Calling the method of the object
//console.log(User.greeting) //? Accessing the method of the object

User.greeting2 = function() {
    console.log(`Hello, ${this.name}!`) //? Using 'this' to access the current object properties
}

console.log(User.greeting2()) //? Calling the method of the object with 'this'