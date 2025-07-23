//- Lexical Scoping
//? The inner function can access variables from its outer function,
//? but the outer function cannot access variables declared inside the inner function.

function outerFunction() {
    const outerVar = 7
    function innerFunction() {
        const innerVar = 10
        console.log("Inner Function: ", outerVar) // ?Accessing outer function variable
    }
    innerFunction()
    // console.log("Outer Function: ", innerVar) //! This would throw an error as innerVar is not defined here

}

outerFunction() //? Call the outer function to see the output