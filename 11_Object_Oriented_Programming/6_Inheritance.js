//- Inheritance in JavaScript
//? Inheritance allows a class to inherit properties and methods from another class.
//? This promotes code reuse and establishes a parent-child relationship between classes.
//? Inheritance is implemented using the 'extends' keyword in class definitions

//? The child class can override methods from the parent class or add new properties and methods.

class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        return `User: ${this.username}`
    }
}

class Admin extends User  { //? Admin class inherits from User class
    constructor(username, role) {
        super(username) //? Call the constructor of the parent class (User) to initialize username
        this.role = role //? Initialize the role property specific to Admin
    }

    displayRole() {
        return `Admin ${this.username}'s role is ${this.role}` 
    }
}

const newAdmin = new Admin("Arghya", "SuperAdmin") //? Create an instance of Admin
console.log(newAdmin) //? Log the newAdmin object to see its properties
console.log(newAdmin.logMe()) //? Call the logMe method from the User class
console.log(newAdmin.displayRole()) //? Call the displayRole method to see the role of the admin

console.log("----- Normal User -----")
const normalUser = new User("John") //? Create an instance of User
console.log(normalUser) //? Log the normalUser object to see its properties
console.log(normalUser.logMe()) //? Call the logMe method from the User class
// console.log(normalUser.displayRole()) //❌ This will be undefined, as displayRole is not defined in User class


//- instanceof operator
//* The instanceof operator checks if an object is an instance of a specific class.
//* It returns true if the object is an instance of the class or its subclasses.

console.log(normalUser instanceof User) //? TRUE, normalUser is an instance of User
console.log(normalUser instanceof Admin) //! FALSE, normalUser is not an instance of Admin

console.log(newAdmin instanceof User) //? TRUE, newAdmin is an instance of User
console.log(newAdmin instanceof Admin) //? TRUE, newAdmin is an instance of Admin