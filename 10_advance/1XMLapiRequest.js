
//!
//!
//!         Check the output in the browser console
//!
//!


const requestURL = "https://api.github.com/users/ArghyaInWeb"

const xhr = new XMLHttpRequest(); //? Create a new XMLHttpRequest object

//- open: is a method that initializes a request
xhr.open("GET", requestURL); //? Initialize a GET request to the specified URL

//- onreadystatechange: is an event that is triggered whenever the readyState property of the XMLHttpRequest changes
xhr.onreadystatechange = function() { //? Define a callback function to handle the response
    console.log(xhr.readyState); //? Log the current state of the request
    if (xhr.readyState === 4) { //? Check if the request is complete
        // //! Wrong Way ❌
        // const data = xhr.responseText; //? Get the response text
        // console.log(data); //? Log the response data // It will be a string data

        //* Correct Way ✅
        const data = JSON.parse(xhr.responseText); //? Parse the response text as JSON
        console.log(data); //? Log the parsed response data

        //- Now you can access the properties of the data object
        console.log(`Followers: ${data.followers}`); //? Log the number of followers

    }
}

//- send: is a method that sends the request to the server
xhr.send(); //? Send the request to the server