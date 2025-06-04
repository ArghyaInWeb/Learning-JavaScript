//- Arrow functions and 'this' context
const user = {
    username: "John",
    age: 25,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`) //? 'this' refers to the user object
        console.log(this) //? 'this' refers to the user object
    }
}
user.welcomeMessage()
//output: John , welcome to website

user.username = "Doe"
user.welcomeMessage() //? 'this' still refers to the user object, even after changing the username
//output: Doe , welcome to website

console.log(this) //? 'this' refers to the global object in non-strict mode, or undefined in strict mode
//output: {}
//? In a browser, 'this' refers to the window object
//? In Node.js, 'this' refers to the global object



//--------
// function one() {
//     let username = "Sarah"
//     console.log(this.username) //! 'this' refers to the global object, which does not have a username property
//     //output: undefined
//     console.log(this) //? 'this' refers to the global object in non-strict mode, or undefined in strict mode
// }

// console.log(one()) ;
/* 
 *   The commented out code block is defining a function named `one`. Inside this function, there is a
 *   variable `username` set to "Sarah". The function then attempts to log `this.username`, which is
 *   trying to access the `username` property on the global object. Since the global object does not have
 *   a `username` property, it will log `undefined`. Finally, the function logs `this`, which will show
 *   that `this` refers to the global object in non-strict mode, or `undefined` in strict mode. 
*/

//---------

//* Arrow Function

const one = () => {
    let username = "John"
    console.log(this.username) //? 'this' refers to the global object, which does not have a username property
    //output: undefined
}

one()


//- Basic Arrow Function Syntax or Explicit Return
const addOne = (num) => {
    return num + 1; //? Arrow function that takes a number and returns it incremented by 1
}
console.log(addOne(5))


//- Arrow Function with Implicit Return
//? Arrow functions can have an implicit return if they consist of a single expression
const addTwo = (num) => num + 2; //? Arrow function that takes a number and returns it incremented by 2
console.log(addTwo(5))

//? for returning an object, we need to wrap it in parentheses
const createUser = () => ({username: "John"})
console.log(createUser()) //? Output: { username: 'John' }

   //? Without parentheses, it would be interpreted as a function body
// const createUser = () => {username: "John"} //! This would throw an error because it is not a valid object literal

