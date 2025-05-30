let myDate = new Date(); //? creates a new Date object with the current date and time
console.log(myDate); //? logs the current date and time

console.log(typeof myDate); //? logs the type of myDate, which is "object"

console.log(myDate.toString()); //? converts the date to a string representation
//OUTPUT: "Mon Oct 16 2023 12:34:56 GMT+0200 (Central European Summer Time)"

console.log(myDate.toDateString()); //? converts the date to a string representation without the time
//OUTPUT: "Mon Oct 16 2023"

console.log(myDate.toTimeString()); //? converts the date to a string representation of the time
//OUTPUT: "12:34:56 GMT+0200 (Central European Summer Time)";

console.log(myDate.toISOString()); //? converts the date to a string in ISO format
//OUTPUT: "2023-10-16T10:34:56.789Z" (the time may vary based on the current time)

console.log(myDate.toLocaleString()); //? converts the date to a string representation in the local timezone
//OUTPUT: "10/16/2023, 12:34:56 PM" (format may vary based on locale)



let myCreatedDate = new Date(2025, 0, 1); //? creates a new Date object for January 1, 2025
console.log(myCreatedDate); //? logs the date for January 1, 2025

console.log(myCreatedDate.toDateString()); //? converts the date to a string representation without the time
//OUTPUT: "Wed Jan 01 2025"

let myCreatedDate2 = new Date(2025, 0, 1, 12, 0, 0); //? creates a new Date object for January 1, 2025 at 12:00:00
console.log(myCreatedDate2.toLocaleString()); //? converts the date to a string representation in the local timezone

let myCreatedDate3 = new Date("2025-01-15"); //? creates a new Date object for January 15, 2025
console.log(myCreatedDate3.toLocaleString()); //? converts the date to a string representation in the local timezone



let myTimestamp = Date.now(); //? gets the current timestamp in MILLISECONDS since January 1, 1970
console.log(myTimestamp); //? logs the current timestamp    

console.log(myCreatedDate3.getTime()); //? gets the timestamp for January 15, 2025

console.log(Date.now() / 1000); //? gets the current timestamp in SECONDS since January 1, 1970

console.log(Math.floor(Date.now() / 1000)); //? gets the current timestamp in SECONDS since January 1, 
                                            //? 1970 and rounds it down to the nearest integer


let newDate = new Date();
console.log(newDate.getFullYear()); //? gets the yeat of the date
console.log(newDate.getMonth() + 1); //? gets the month of the date (0-11, so we add 1 to get 1-12)
console.log(newDate.getDate()); //? gets the day of the month (1-31)
console.log(newDate.getDay() + 1); //? gets the day of the week (0-6, so we add 1 to get 1-7)
console.log(newDate.getHours() + 1); //? gets the hour of the date (0-23, so we add 1 to get 1-24)
console.log(newDate.getMinutes()); //? gets the minutes of the date (0-59)
console.log(newDate.getSeconds()); //? gets the seconds of the date (0-59)
console.log(newDate.getMilliseconds()); //? gets the milliseconds of the date (0-999)


//* We can make more customizations with the toLocaleString() method

newDate.toLocaleString('default', {
    weekday : 'long', //? full name of the day of the week
    year : 'numeric', //? full year
    month : 'long', //? full name of the month
})