//- setInterval
//? repeatedly executes a specified function or code block at fixed time intervals, 
//? measured in milliseconds, until it is manually stopped using clearInterval().

// setInterval(() => {
//     console.log('Arghya')
// }, 1000);

// //* We can also pass more parameters 
// setInterval((str) => {
//     console.log(str)
// }, 3000, 'Hi');

const start = document.querySelector('.start')
const stop = document.querySelector('.stop')

let intervalID

start.addEventListener('click', function() {
    intervalID = setInterval(() => {
        console.log('Arghya')
    }, 1000);
})

stop.addEventListener('click', function() {
    clearInterval(intervalID)
})