//- Classes in JavaScript
//? Classes are a blueprint for creating objects with shared properties and methods.
//? They encapsulate data and behavior, allowing for object-oriented programming.
//? Classes can be defined using the 'class' keyword, and they can have a constructor method to initialize properties.

class User { //? Define a class named User
    constructor(name, age) { //? The constructor method is called when a new instance of the class is created
        
        //? 'this' refers to the instance of the class being created
        this.name = name
        this.age = age
    }

    changeName () { //? It is a method of the User class, we don't need to use 'function' keyword here
        return `Name in Uppercase: ${this.name.toUpperCase()}` 
    }
}

//? Create an instance of the User class
const user = new User("Arghya", 20)
console.log(user.changeName())


// How classes work Behind the scenes

function userWithFunction(name, age) { //? Function to create a User object
    this.name = name //? 'this' refers to the instance of the User object being
    this.age = age //? created, similar to the constructor in the class
} 

userWithFunction.prototype.changeName = function() { //? Adding a method to the User prototype
    return `Name in Uppercase: ${this.name.toUpperCase()}`
}

const user2 = new userWithFunction("Peter", 15) //? Creating a new instance of User
console.log(user2.changeName())
