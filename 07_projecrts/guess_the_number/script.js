let randomNumber = parseInt((Math.random() * 100) + 1)

const form = document.querySelector('.form')
const userGuess = document.querySelector('.guessField')
const submit = document.querySelector('.guessSubmit')
const result = document.querySelector('.resultParas')
const previousGuess = document.querySelector('.guesses')
const remainingGuess = document.querySelector('.lastResult')
const hint = document.querySelector('.lowOrHigh')


const p = document.createElement('p')

let allGuesses = []
let numOfGuess = 1
let playGame = true


if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()
        const guess = parseInt(userGuess.value)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if(guess < 1) {
        alert("Please enter a number greater than 1")
    } else if(guess > 100) {
        alert("Please enter a number less than 100")
    } else if(isNaN(guess)) {
        alert("Please enter a valid number")
    } else {
        allGuesses.push(guess)
        if(numOfGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber) {
        displayMessage(`You guessed right ${randomNumber}`)
        endGame()
    } else if(guess < randomNumber) {
        displayMessage('Number is low')
    } else if(guess > randomNumber) {
        displayMessage('Number is high')
    }
}

function displayGuess(guess) {
    userGuess.value = ''
    previousGuess.innerHTML += `${guess} `
    numOfGuess++
    remainingGuess.innerHTML = `${11 - numOfGuess}`
}

function displayMessage(message) {
    hint.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    playGame = false
    userGuess.value = ''
    userGuess.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    result.appendChild(p)
    startGame()
}

function startGame() {
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', function(e) {
        randomNumber = parseInt((Math.random() * 100) + 1)
        allGuesses = []
        numOfGuess = 1
        previousGuess.innerHTML = ''
        userGuess.removeAttribute('disabled')
        remainingGuess.innerHTML = `${11 - numOfGuess}`
        result.removeChild(p)
        playGame = true
    })
}