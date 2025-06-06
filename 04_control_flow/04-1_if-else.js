const userLoggedIn = true;

//- if
//? If the condition is TRUE, the code inside the block will execute

if (userLoggedIn) {
    //? This will execute if the condition is TRUE
    console.log("Welcome back, user!");
}

//- if (short-hand)
//? You can use a short-hand if statement for simple conditions

if (userLoggedIn) console.log("Welcome back, user!");

//- else
//? If the condition is FALSE, the code inside the else block will execute

if (2 < 2) {
    //! This will execute if the condition is TRUE
    console.log("This won't run because 2 is not less than 2");
} else {
    //? This will execute if the condition is FALSE
    console.log("This will run because 2 is not less than 2");
}

//- else if
//? You can add multiple conditions using else if

if (2 < 1) {
    //! This will execute if the condition is TRUE
    console.log("This won't run because 2 is not less than 1");
}else if (2 < 2) {
    //! This will execute if the condition is TRUE
    console.log("This won't run because 2 is not less than 2");
}else if (2 < 3) {
    //? This will execute if the condition is TRUE
    console.log("This will run because 2 is less than 3");
} else {
    //? This will execute if all previous conditions are FALSE
    console.log("This won't run because 2 is less than 3");
}