//- Prototype
//? Prototype is a mechanism in JavaScript that allows you to add properties and methods to existing objects or constructors. 
//? Every JavaScript object has a prototype, which is itself an object. When you try to access a property or method on an object, 
//? JavaScript will first look at the object itself, and if it doesn't find it, it will look at the object's prototype, 
//? and so on up the prototype chain until it, finds the property or method or reaches the end of the chain (null).
//? This allows for inheritance and shared behavior among objects.


//- We can create our own (function) & inject it in the "Object" through prototype.
Object.prototype.sayHello = function () { //? Here, we are adding a method 'sayHello' to the Object prototype.
    console.log("Hello")
}

//? Now, all objects will have access to the 'sayHello' method.
//? And that will be Arrays, Strings, Functions, etc.

const obj = {}
const arr = []
const str = "Hello"

obj.sayHello()
arr.sayHello()
str.sayHello()
//? They can access the "sayHello" method because behind the hood,
//? they are all OBJECTS and have access to the Object prototype.

//- But, if create a function on the Array prototype, it will not be available to the Object prototype.
Array.prototype.customMethod = function () {
    console.log("This is a custom method for arrays")
}
//? Now, only arrays will have access to the 'customMethod'.
const newArr = [1, 2, 3]
newArr.customMethod() //✅ This will work as expected, calling the custom method for arrays.

//? But, if we try to call it on an object, it will throw an error.
// obj.customMethod() //❌ This will throw an error because 'customMethod' is not defined on the Object prototype.




//- Prototypal Inheritance
//? Prototypal inheritance is a feature in JavaScript that allows objects to inherit properties and methods from other objects.

//- Old Way of Creating Objects

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //... Here, we are setting the prototype of TASupport to TeachingSupport, so TASupport will inherit properties from TeachingSupport.
}

Teacher.__proto__ = User //... Another way to set the prototype of Teacher to User, so Teacher will inherit properties from User.


//- Modern Syntax for doing prototypal inheritance. 

Object.setPrototypeOf(Teacher, User) //... Here, we are setting the prototype of Teacher to User using Object.setPrototypeOf method.