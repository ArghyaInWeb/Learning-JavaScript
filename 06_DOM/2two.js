const parent = document.querySelector(".parent");
console.log(parent);

//- .children property
console.log(parent.children); //? It returns a HTML collection of all the children inside a parent element

console.log(parent.children[1]); //? targets the 1st child in the parent
console.log(parent.children[1].innerHTML); //output: Tuesday

console.log("++++++++++++++++++++++++++++++++");
//? We can use normal for loop in HTML Collection without casting it into an array
for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
}

//- Styling the element
parent.children[1].style.color = "blue";

console.log("++++++++++++++++++++++++++++++++");
//- first and last element property
//? we can target the first and last element in a parent with this two property
console.log(parent.firstElementChild);
//output: <div class="day">Monday</div>
console.log(parent.lastElementChild);
//output: <div class="day">Thursday</div>

console.log("++++++++++++++++++++++++++++++++");
//- .parentElement property
//? We can also target a Parent from its child

const dayOne = document.querySelector(".day"); //? targets the first .day class
console.log(dayOne.parentElement);

console.log("++++++++++++++++++++++++++++++++");
//- .nextElementSibling property
//? Can also target its next sibling element
console.log(dayOne.nextElementSibling);

console.log("++++++++++++++++++++++++++++++++");
//- childNodes
/*
 *   The childNodes property returns a NodeList containing all child nodes of an element, including:
    - Element nodes (like <div>, <p>, etc.)
    - Text nodes (including whitespace and line breaks)
    - Comment nodes
    - Other node types
*/
console.log(parent.childNodes);
