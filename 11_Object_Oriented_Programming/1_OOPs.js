//? OOPs
//? Object Oriented Programming in JavaScript
//? OOPs is a programming paradigm that uses objects and classes to structure code.
//? It allows for encapsulation, inheritance, and polymorphism, making code more modular and reusable.
//? In JavaScript, OOPs can be implemented using constructor functions, ES6 classes, or object literals.
//? Here is a simple example of OOPs in JavaScript using ES6 classes:

//- Object Literal
//* Object literals are a way to define objects using a simple syntax.
//* They are useful for creating single objects without the need for a constructor function or class.
const user = {
    name: 'Arghya',
    age: 20,
    signedIn: true,

    getUserDetails: function() {
        console.log('Got user details from DB')
        // console.log(`Username: ${name}`) //! ❌Error: name is not defined, because `name` is not in the scope of this function
        console.log(`Username: ${this.name}`) //* ✅ Correct way to access properties in object literal
        console.log(this) //? ✅ `this` refers to the object itself
    }
}
console.log(user.name); // Output: Arghya
console.log(user.getUserDetails()); 

console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
//!++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//- new 
//* The `new` keyword is used to create an instance of a constructor function or class.
//? In the above example if we were to create a new user we would have to repeat the code for each user.
//* Using `new` allows us to create multiple instances of the same object without repeating code.

//? An example using function
function User(name, age, signedIn) {
    this.name = name; 
    this.age = age;
    this.signedIn = signedIn;
    //! the name, age, and signedIn properties are set on the new object being created

    return this; //? `this` refers to the new object being created
    //? "this" will always return implicitly if not returned explicitly
}

//! We are creating two user objects using the User function without the `new` keyword
const testUser1 = User('Arghya', 21, true)
const testUser2 = User('John', 25, false)

//! Since we did not use the `new` keyword, `user2` will overwrite the details of `user1` and the output will be the same for both.
console.log(testUser2.name); // Output: John (overwrites testUser1)
console.log(testUser1.name); // Output: John (overwritten by testUser2)

//* To create a new user object using the `new` keyword, we can do the following:
const user1 = new User('Arghya', 21, true);
const user2 = new User('John', 25, false);

//* Now, `user1` and `user2` are two separate instances of the User function.
console.log(user1.name); // Output: Arghya
console.log(user2.name); // Output: John