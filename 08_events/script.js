//-
// document.getElementById('owl').onclick = function(){
//     alert("owl clicked")
// }


//- Old ways of doing events
// attachEvent()
// jQuery - on


//- Important events to remember
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode


//- with eventListener
// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked inside the ul");
// }, false) //? It false by default

//- bubbling & capturing
//* bubbling
//? The phase where the event travels up from the target element to the root.
// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked inside the ul");
// })
// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("clicked inside the owl");
// })

//* capturing
// //? The phase where the event starts from the root and travels down to the target element.
// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked inside the ul");
// }, true)
// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("owl clicked");
// }, true)

//* stopPropagation method
//? Use to stop bubbling or capturing from the current element 
// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked inside the ul"); 
//     e.stopPropagation() //!
// }, true)
// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("owl clicked"); 
//     e.stopPropagation() //!
// }, true)

// const google = document.getElementById('google').addEventListener('click', function(e) {
//     e.preventDefault() //! Prevents the default behavior of <a></a> tag
//     console.log('Google clicked')
// })  

const images = document.querySelector('#images')
images.addEventListener('click', function(e) {
    console.log(e.target.tagName)
    if(e.target.tagName === 'IMG') {
        console.log(e.target.id)
        let removeIt = e.target.parentNode
        removeIt.remove()
    }
})

//removeIt.parentNode.removeChild(removeIt) //- New way of removing element