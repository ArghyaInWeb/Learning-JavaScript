const body = document.querySelector('body')
const buttons = document.querySelectorAll('.buttons')

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        if (e.target.id === "crimson") {
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === "rebeccapurple") {
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === "royalblue") {
            body.style.backgroundColor = e.target.id
        }
        else if (e.target.id === "aqua") {
            body.style.backgroundColor = e.target.id
        }
    }) 
})