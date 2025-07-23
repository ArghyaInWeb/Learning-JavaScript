const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);


//? Object.defineProperty() is used to define a new property or modify an existing property on an object.
//? It allows you to set property attributes such as writable, enumerable, and configurable.
const User = {
    name: 'Arghya',
    age: 25,
    isAvailable: true,

    logName: function(){
        console.log(`Name: ${this.name}`);
    }
}

console.log(Object.getOwnPropertyDescriptor(User, "name")); //? Get the property descriptor for the 'name' property

Object.defineProperty(User, 'name', { //? Modify the 'name' property to make it non-writable
    //writable: false,
    enumerable: false,
    
})

console.log(Object.getOwnPropertyDescriptor(User, "name")); //? Get the property descriptor for the 'name' property again to see the changes

//- Object.entries() returns an array of key-value pairs for the object's own enumerable properties
for (let [key, value] of Object.entries(User)) { //? Iterate over the properties of the User object, 
    //! this will not log the 'name' property as it is now non-enumerable
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}
