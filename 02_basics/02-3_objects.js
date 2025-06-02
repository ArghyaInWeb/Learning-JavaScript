//! Objects in JavaScript Part 2

//? Singletons is a design pattern that restricts a class to a single instance and provides a global point of access to it.
Object.create //? It is also called constructor method through which we can create an object
              //? It creates a new object with the specified prototype object and properties

const app = new Object() //! Creates a new object // It is a singleton object

app.id = 1 //? Adding a property to the object
app.name = "MyApp" //? Adding another property to the object 
app.version = "1.0.0" //? Adding another property to the object

console.log(app) //? Accessing the object

console.log(Object.keys(app)) //? Returns an ARRAY of the object's own enumerable property names
console.log(Object.values(app)) //? Returns an ARRAY of the object's own enumerable property values
console.log(Object.entries(app)) //? Returns an ARRAY of the object's own enumerable property [key, value] pairs

console.log(app.hasOwnProperty("id")) //? Checks if the object has a property with the specified name; returns true or false

//* Nested Objects
//* Objects can contain other objects, allowing for complex data structures
let regularUser = { //? Regular user object
    email: "arghya@gmail.com",
    name: { //? Nested object for user's name
        fullname: { //
            userFirstName: "Arghya",
            userLastName: "Biswas"
        }
    }
}

console.log(regularUser.name.fullname.userFirstName) //? Accessing nested object properties


//* Object Methods
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1, obj2} //? Merging objects using object literal syntax
console.log(obj3)           // output: {obj1: {1: "a", 2: "b"}, obj2: {3: "c", 4: "d"}}

//const obj3 = Object.assign({}, obj1, obj2) //? Merging objects using Object.assign()
console.log(obj3)                            // output: {1: "a", 2: "b", 3: "c", 4: "d"}                          

const obj3 = {...obj1, ...obj2} //? Merging objects using spread operator
console.log(obj3)               // Output: {1: "a", 2: "b", 3: "c", 4: "d"}                                           

//* Array of Objects
const users = [ //? Array of user objects
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
]

console.log(users[0].name) //? Accessing the name of the first user in the array

