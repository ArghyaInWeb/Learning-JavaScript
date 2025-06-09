//- To select an element by id
//? It will return the element with the id that we have passed in the argument

document.getElementById('title') 
//OUTPUT: <h1 id="title" class="heading">DOM Learning with Chai Aur Code</h1>

//? to access the id of the element
document.getElementById('title').id 
//OUTPUT: title

//? to access the class of the element
document.getElementById('title').className //* It will work
//OUTPUT: heading

document.getElementById('title').class //! it will not work
//OUTPUT: undefined

//- get Attribute
document.getElementById('title').getAttribute('id')
//OUTPUT: title

document.getElementById('title').getAttribute('class')
//OUTPUT: heading

//- set Attribute
document.getElementById('title').setAttribute('class', 'heading-new') //! ❌ It will always override the existing attribute 
document.getElementById('title').setAttribute('class', 'heading heading-new') //? ✅ It will add the new attribute to the existing attribute 

//- Storing the element in a variable

const title = document.getElementById('title')
title.id //* It will return the id of the element
//OUTPUT: title

title.className //* It will return the class of the element
//OUTPUT: heading

title.getAttribute('id') //* It will return the id of the element
//OUTPUT: title

console.log(title)

//- Giving style to the element
title.style.backgroundColor = 'royalblue' //? ✅ It will give the background color to the element
title.style.color = 'white' //? ✅ It will give the color to the element
title.style.padding = '10px' //? ✅ It will give the padding to the element
title.style.borderRadius = '15px' //? ✅ It will give the border radius to the element
title.style.textAlign = 'center' //? ✅ It will give the text align to the element
title.style.fontSize = '20px' //? ✅ It will give the font size to the element
title.style.fontWeight = 'bold' //? ✅ It will give the font weight to the element
title.style.textTransform = 'uppercase' //? ✅ It will give the text transform to the element
title.style.textDecoration = 'underline' //? ✅ It will give the text decoration to the element


//- To access content of the element

title.textContent //? It will return the text content of the element. It will show all the hidden text
//OUTPUT: DOM Learning with Chai Aur Code test text
title.innerText //? It will return the inner text of the element It does not show the hidden text
//OUTPUT: DOM Learning with Chai Aur Code 

title.innerHTML //? It will return the inner HTML of the element. It will show all the hidden text and also return the HTML tags
//OUTPUT: DOM Learning with Chai Aur Code <span style="display: none">test text</span>



//- Query Selector
//? Query selectors are powerful methods in JavaScript that allow, 
//? you to select elements from the DOM using CSS-style selectors.

//- There are two main query selector methods:
//? querySelector(): Returns the first element that matches the specified CSS selector
//? querySelectorAll(): Returns a NodeList containing all elements that match the specified CSS selector

document.querySelector('#title') 
//output: <h1 id="title" class="heading heading-new" style="background-color: royalblue; color: white; padding: 10px; border-radius: 15px; text-align: center; font-size: 20px; font-weight: bold; text-transform: uppercase; text-decoration: underline;">

document.querySelector('input')
//output: <input type=​"password" name id>​

document.querySelector('input[type="password"]') //? we can also specify the attribute
//output: <input type="password" name="" id="">



document.querySelector('ul')
//output: <ul>​…​</ul>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​</ul>​

const myUL = document.querySelector('ul')
//? storing it in a variable

myUL.querySelector('li') //? we can further use querySelector using that variable
//output: <li>​…​</li>​::marker​"one"</li>​

const li = myUL.querySelector('li')
//? again storing 

li.style.backgroundColor = 'green' //? can also give styles through it
li.style.padding = '15px'

li.innerText //? accessing the inner text
//output: 'one'

li.innerText = 'five' //! changing the the CONTENT

//- Query selector all
document.querySelectorAll('h2') //? Returns a node-list of all h2 in the document
//output: ['h2', 'h2', 'h2']
//! Node-list are not arrays but it does contains some similar methods(not all) of arrays. Like: forEach()

//? We can also store the it a variable and perform operations through it
const allH2 = document.querySelectorAll('h2')

//? We can access a single element by using the similar syntax as arrays with [] notation
allH2[1].style.color = 'black' 

//? We can give style using every element by using forEach like this
allH2.forEach( (h) => {
    h.style.backgroundColor = 'royalblue'
})


//- get element by class name

const tempClassList = document.getElementsByClassName('list-item')
//? returns HTML Collection

let convertedClassList = Array.from(tempClassList) //? turning HTML Collection -> Array

//? Now we can use the elements using array methods
convertedClassList.forEach((li) => {
    li.style.backgroundColor = 'crimson'
    li.style.color = '#212121'
})