//- Getter & Setter in JavaScript
//* Getter and Setter methods allow you to define how properties of an object are accessed and modified
//*      They are used to control access to an object's properties, allowing you to add logic when getting or setting values.

//? Getter methods are used to retrieve the value of a property
//? Setter methods are used to set the value of a property
//? They are defined using the `get` and `set` keywords, respectively


class User {
    constructor(password) {
        this.password = password;
    }

    //- Getter method to retrieve the password
    get password() {
        return `${this._password}abcd` //? The underscore is a convention to indicate that this is a private property,
                                   //? When using a getter, you can add logic to modify the value before returning it
        //! So when the user will to access the password, it will return the modified password not the original one. 
    }

    //! -------------------------------------------------------------------------------------
    //! If there is a getter method, you must define a setter method for the same property
    //! -------------------------------------------------------------------------------------

    //- Setter method to set the password

    set password(newPassword) { //? This setter method allows you to set the password with additional logic
        if (newPassword.length < 6) {
            console.log("Password must be at least 6 characters long");
        } else {
            this._password = newPassword; //? The underscore is used to indicate that this is a private property
            console.log("Password set successfully");
        } 

    }
}