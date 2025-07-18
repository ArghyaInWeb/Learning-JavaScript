//- Promise
//* Promise is a constructor function that creates a new Promise object.
//* A Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//* A Promise is in one of these states:
//*     1. Pending: Initial state, neither fulfilled nor rejected.
//*     2. Fulfilled: The operation completed successfully.
//*     3. Rejected: The operation failed.


//* Creating a Promise and holding in a variable
const myPromise = new Promise(function(resolve, rejected) { // 
    //? We can do some asynchronous operation here
    setTimeout(() => {
        console.log("Async Task 1 is Completed")
        resolve(); //? If the task is successful, we call resolve()
    }, 1000);
})

//- .then() method is used to handle the resolved promise
//* It takes a callback function that will be called when the promise is resolved.


myPromise.then(function() { //? This function is called when the promise is resolved
    console.log("Promise is Resolved")
})

//* We can create a promise without holding it in a variable
new Promise(function(resolve, rejected) {
    setTimeout(() => {
        console.log("Async Task 2 is Completed")
        resolve(); //? If the task is successful, we call resolve()
    }, 1000);
}).then(function() { //? Now we can chain a .then() method to handle the resolved promise
    console.log("Promise 2 is resolved")
})

//* Passing a parameter to the resolve function
new Promise(function (resolve, rejected) {
    setTimeout(() => {
        resolve({username: 'Arghya', age: 20}); //? We can pass any value to the resolve function
    }, 1000);
}).then(function(data) { //? The data parameter will hold the value passed to the resolve function
    console.log("Promise 3 is resolved with data:", data)
})


//- .catch() method is used to handle the rejected promise
//* It takes a callback function that will be called when the promise is rejected.

//- .finally() method is used to execute code after the promise is settled (either resolved or rejected).
//* It takes a callback function that will be always called even if the promise is resolved or rejected.

//- Chaining promises
new Promise(function(resolve, rejected) {
    setTimeout(() => {
        let error = true; //? Simulating an error

        if (!error) {
            resolve({name: 'Arghya', password: '12345'});
        } else {
            rejected("Error: Something went wrong!"); //? If there is an error, we call rejected()
        }
    }, 1000);
}).then(user => {
    console.log(user)
    return user.name; //? We can return a value from the .then() method
}).then(userName => {
    console.log(userName) //? This will log the value returned from the previous .then() method
}).catch(err => {
    console.log(err) //? This will log the error message if the promise is rejected
}).finally(() => {
    console.log("Promise is settled") //? This will always be called, regardless of the promise being resolved or rejected
})

//- async/await
//* The async keyword is used to declare an asynchronous function, and the await keyword is used to wait for a promise to be resolved or rejected.
//* The async function always returns a promise, and the await keyword can only be used inside an async function.

const newPromise = new Promise(function(resolve, rejected) {
    setTimeout(() => {
        let error = true; 

        if (!error) {
            resolve({lang: 'Javascript', password: '12345'});
        } else {
            rejected("Error: JS went wrong!");
        }
    }, 1000);
})

//? Creating an async function to handle the promise
//!!!!!
//!  When using async/await, we need to handle the promise with try/catch block to catch any errors.


async function consumeNewPromise() {
    try {
        const response = await newPromise
        console.log(response) //? This will log the resolved value of the promise
    } catch (err) {
        console.log(err) //? This will log the error message if the promise is rejected
    }
}

consumeNewPromise(); //? Calling the async function to consume the promise



//* Using a json for example

//?Using async/await to fetch data from an API
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json() //? parsing the response takes time {await} for the response to be converted to json. 
        console.log(data) //? This will log the array of users
    } catch (err) {
        console.log('E: ', err)
    }
}
getAllUsers(); //? Calling the async function to get all users from the API



//? Using .then() & .catch() to fetch data from an API
fetch('https://jsonplaceholder.typicode.com/users') //? fetch returns a promise
.then((response) => {
    return response.json()
})
.then((parsedResponse) => {
    console.log(parsedResponse)
})
.catch((err) => {
    console.log('E: ', err)
})

