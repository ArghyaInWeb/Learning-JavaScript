//- Function is a function, and also an object

function multiply(num) {
    return num * 2
}
multiply.power = 2 //... Here, we are adding a property 'power' to the function 'multiply'.

console.log(multiply(5)) //... Calling the function 'multiply' with an argument of 5, which returns 10 (5 * 2).
console.log(multiply.power) //... Accessing the property 'power' of the function 'multiply'.    
console.log(multiply.prototype) //... Accessing the prototype of the function 'multiply', which is an empty object by default.


function createUser(name, score) {
    this.name = name
    this.score = score
}

//? here, we are creating a new function and injecting it with prototype.
createUser.prototype.incrementScore = function () {
    // score++; //❌ score will not get the current context if there are multiple instances of createUser.

    this.score++ //✅ Using 'this' to refer to the current instance of createUser, so score will be incremented correctly.
}

createUser.prototype.print = function () {
    console.log(`Score is: ${this.score} for user: ${this.name}`)
}

//? If we create a user without using "new", the newly created functions/properties will not be attached to the instance.
// const testUser1 = createUser('John', 10)
// testUser1.incrementScore() //❌ This will not work as expected because 'testUser1' is not an instance of 'createUser'.


//? Using 'new' keyword to create instances of createUser, which will attach the properties and methods to the instance.
const user1 = new createUser('John', 10)
const user2 = new createUser('Jane', 20)
user1.incrementScore() //✅ This will work as expected, incrementing the score of user1.


/* 

-Here's what happens behind the scenes when the new keyword is used:

-1. A new object is created: The new keyword initiates the creation of a new JavaScript object.

-2. A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

-3. The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

-4. The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/