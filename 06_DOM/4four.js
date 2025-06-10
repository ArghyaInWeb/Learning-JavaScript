//- Adding elements by making functions

function addLanguage(langName) {
    const li = document.createElement('li')
    li.innerHTML = `${langName}`
    document.querySelector('.languages').appendChild(li)
}

addLanguage('Python')

//? More Optimized way to add a element
function addLanguageOptimized(langName) {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langName)) //? Better Optimization
    document.querySelector('.languages').appendChild(li)
}

addLanguageOptimized('golang')
addLanguageOptimized('Rust')


//- Edit - replacing elements

const secondLang = document.querySelector('li:nth-child(2)') //? targeting the 2nd child in th parent element
const newLi = document.createElement('li')
newLi.innerHTML = 'Typescript'

secondLang.replaceWith(newLi) //? replacing the the second child with the new element

//* example 2

const thirdLang = document.querySelector('li:nth-child(3)')
thirdLang.outerHTML = "<li>C</li>"


//- Remove
const lastLang = document.querySelector('li:last-child')
lastLang.remove()