//- Closure
//? Closure is a function that has access to its own scope, the outer function's scope, and the global scope.
//? It allows the inner function to remember the environment in which it was created, even after the outer function has finished executing.


// document.getElementById("orange").onclick = function(){
//     document.body.style.backgroundColor = `orange`
// }
// document.getElementById("green").onclick = function(){
//     document.body.style.backgroundColor = `green`
// }

function clickHandler(color) {
  // document.body.style.backgroundColor = `${color}`

  return function () {
    document.body.style.backgroundColor = `${color}`; 
  };
}

document.querySelector(".orange").onclick = clickHandler("orange"); //? Here the onclick requires a function, so we return a function that changes the background color to orange
//? The clickHandler function returns a new function that has access to the color variable
document.querySelector(".green").onclick = clickHandler("green");
