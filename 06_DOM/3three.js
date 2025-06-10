document.body.style.backgroundColor = "#212121"
document.body.style.color = "#fff"

//- .createElement
//? Create an element in the document
const div = document.createElement('div')
console.log(div)

div.className = 'main' //? Giving it a class name
div.id = '1' //? An Id

//? we can also setAttribute
div.setAttribute('title', "generated title")

//? we can give it a style
div.style.backgroundColor = 'green'
div.style.padding = '20px'

//? Adding content
// div.innerText = "DOM Learning" 

//- .createTextNode
//? Another way of creating content
const addText = document.createTextNode("DOM Learning")
//? Creating a text node which hold the content

//* Now we have to add this into the div 
//* by using (.appendChild) property
div.appendChild(addText) //! It will be showing on the browser yet

document.body.appendChild(div)
//? Appending the whole (.div) child in the (body) parent
