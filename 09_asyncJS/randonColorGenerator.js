//? Generating Random Color
function randomColorGenerator() {
    const hex = '0123456789ABCDEF'
    let colors ='#'

    for (let i = 0; i < 6; i++) {
        colors += hex[parseInt(Math.random() * 16)]
    }
    return colors
    
}

let intervalID;

function startGenerator() {
    if (!intervalID) {
        intervalID = setInterval(colorGenerator, 1000)
    }

    function colorGenerator() {
        document.body.style.backgroundColor = randomColorGenerator()
    }
}

function stopGenerator() {
    clearInterval(intervalID)
    intervalID = null
}
document.querySelector('.start').addEventListener('click', startGenerator)
document.querySelector('.stop').addEventListener('click', stopGenerator)