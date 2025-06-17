const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()


    const height = document.querySelector('#height').value
    const weight = document.querySelector('#weight').value
    const results = document.querySelector('.results')

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please input a valid height  ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please input a valid weight  ${weight}`
    } else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<span>${BMI}</span>`

        const message = document.querySelector('.message')
        if(BMI < 18.6) {
            message.innerHTML = `<p>You are Under Weight</p>`
        } else if(BMI > 18.6 && BMI < 24.9) {
            message.innerHTML = `<p>Your wight is Normal</p>`
        } else if(BMI > 24.9) {
            message.innerHTML = `<p>You are Over Weight</p>`
        }
    }
})