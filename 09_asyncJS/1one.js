//- setTimeout
//? It calls a function and performs a task after set amount of time.

setTimeout(function(){
    console.log('Arghya')
}, 2000)

//* we can also pass a function reference to it instead of a whole new function
const myName = function() {
    console.log('Arghya')
}
setTimeout(myName, 3000) //? Passing the function reference

//* In DOM
setTimeout(() => { //? We can also use arrow function
    document.querySelector('#first').innerHTML = 'Arghya'
}, 2000);

///- clearTimeout
//? We can a stop a setTimeout method before it can happen

const secH1 = document.getElementById('second')
const showName = setTimeout(() => { //? Store the setTimeout in a variable to use him as a reference later
    secH1.innerHTML = 'Arghya Biswas'
}, 4000)

const stopBtn = document.querySelector('.stop')
stopBtn.addEventListener('click', function() {
    clearTimeout(showName) //? Passing the timeout reference. With this event we can stop the timeout before it gets shown in the document
    console.log('Timeout stopped')
})