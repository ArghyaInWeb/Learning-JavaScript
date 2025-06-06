//! Immediately Invoked Function Expression (IIFE)
    //? This is a function that runs immediately after it's defined



//- Syntax:

(function() {
    console.log("connected")
})(); 
//! Always put a semicolon(;) to stop the execution of the function
//? The function is defined and immediately executed

//- Arrow Function IIFE

( () => {
    console.log("Connected Arrow function")
})();

//- Named IIFE
(function namedIIFE() {
    console.log("Connected Named IIFE");
})();

//- passing parameters to IIFE

(function giveName(name) {
    console.log(`Hello ${name}`)
})("John");

( (name) => {
    console.log(`Hello ${name}`)
})("John");