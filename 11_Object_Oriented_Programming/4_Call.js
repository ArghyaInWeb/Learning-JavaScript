function SetUsername(username){
    this.username = username //? 'this' refers to the context of the object that calls this function, 
    //? which is the object created by (createUser)
    //? 'this' is not the global object, but the object that calls this function
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername.call(username) //❌ This is incorrect, as it does not pass the context of 'this'
    SetUsername.call(this, username) //? pass the context of 'this' to SetUsername
   
    this.email = email
    this.password = password
}

const chai = new createUser("Arghya", "arghya@gmail.com", "007")
console.log(chai);