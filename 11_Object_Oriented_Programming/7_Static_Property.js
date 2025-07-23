//- Static
//* Static properties are properties that belong to the class itself rather than to instances of the class.
//* They are defined using the 'static' keyword and can be accessed without creating an instance of the class.
class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        return `User: ${this.username}`
    }

    static userCount = 0 //? Static property to keep track of the number of users

    static incrementUserCount() { //? Static method to increment user count
        User.userCount++
    }
}

const user1 = new user("Arghya")

console.log(user1.logMe()) //? Call the logMe method on the user instance

// console.log(user1.userCount) //! Will throw an error, as userCount is a static property and cannot be accessed on an instance
// console.log(user1.incrementUserCount) //! Will throw an error, as incrementUserCount is a static property and cannot be accessed on an instance

//? We can only access static properties and methods on the class itself
console.log(User.userCount) //? Accessing static property userCount on the User class
User.incrementUserCount() //? Incrementing user count using static method
console.log(User.userCount) //? Accessing static property userCount again to see the increment

//! It also applies to all the classes that extend the User class.