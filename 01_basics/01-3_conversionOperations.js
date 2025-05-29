//* Typeof Operator
//console.log(typeof num); //* Syntax 1 
// console.log(typeof(num)); //* Syntax 2

//-------------------------NUMERIC CONVERSION-------------------------//

let score = "33"; //? score is now string
console.log(typeof score, score);                   //OUTPUT: string, 33
let valueInNumber = Number(score); //? score is now Number
console.log(typeof valueInNumber, valueInNumber);   //OUTPUT: number, 33

let score2 = "33abc";
console.log(typeof score2, score2);                 //OUTPUT: string, 33abc
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2, valueInNumber2); //OUTPUT: number, NaN

let score3 = null; //? score is now null
console.log(typeof score3, score3);                 //OUTPUT: object, null
let valueInNumber3 = Number(score3);
console.log(typeof valueInNumber3, valueInNumber3); //OUTPUT: number, 0

let score4 = undefined; //? score is now undefined
console.log(typeof score4, score4);                 //OUTPUT: undefined, undefined
let valueInNumber4 = Number(score4);
console.log(typeof valueInNumber4, valueInNumber4); //OUTPUT: number, NaN

let score5 = true; //? score is now boolean
console.log(typeof score5, score5);                 //OUTPUT: boolean, true
let valueInNumber5 = Number(score5);
console.log(typeof valueInNumber5, valueInNumber5); //OUTPUT: number, 1; 0 for false

//-------------------------STRING CONVERSION-------------------------//

let value = 98; //? score is now number
console.log(typeof value, value);                       //OUTPUT: number, 98
let convertToString = String(value); 
console.log(typeof convertToString, convertToString);   //OUTPUT: string, 98

let value2 = true; //? score is now boolean
console.log(typeof value2, value2);                     //OUTPUT: boolean, true
let convertToString2 = String(value2); 
console.log(typeof convertToString2, convertToString2); //OUTPUT: string, "true"

let value3 = null; //? score is now null
console.log(typeof value3, value3);                     //OUTPUT: object, null
let convertToString3 = String(value3); 
console.log(typeof convertToString3, convertToString3); //OUTPUT: string, "null"

let value4 = undefined; //? score is now null
console.log(typeof value4, value4);                     //OUTPUT: undefined, undefined
let convertToString4 = String(value4); 
console.log(typeof convertToString4, convertToString4); //OUTPUT: string, "undefined"

//-------------------------BOOLEAN CONVERSION-------------------------//

let data = ""; //? data is now an empty string
console.log(typeof data, data);                           //OUTPUT: string, ""
let convertToBoolean = Boolean(data);
console.log(typeof convertToBoolean, convertToBoolean);   //OUTPUT: boolean, false

let data2 = "Hello"; //? data is now a non-empty string
console.log(typeof data2, data2);                         //OUTPUT: string, "Hello"
let convertToBoolean2 = Boolean(data2);
console.log(typeof convertToBoolean2, convertToBoolean2); //OUTPUT: boolean, true

let data3 = 0; //? data is now a number
console.log(typeof data3, data3);                         //OUTPUT: number, 0
let convertToBoolean3 = Boolean(data3);
console.log(typeof convertToBoolean3, convertToBoolean3); //OUTPUT: boolean, false

let data4 = 1; //? data is now a number
console.log(typeof data4, data4);                         //OUTPUT: number, 1
let convertToBoolean4 = Boolean(data4);
console.log(typeof convertToBoolean4, convertToBoolean4); //OUTPUT: boolean, true

let data5 = null; //? data is now null
console.log(typeof data5, data5);                         //OUTPUT: object, null
let convertToBoolean5 = Boolean(data5);
console.log(typeof convertToBoolean5, convertToBoolean5); //OUTPUT: boolean, false

let data6 = undefined; //? data is now undefined
console.log(typeof data6, data6);                         //OUTPUT: undefined, undefined
let convertToBoolean6 = Boolean(data6);
console.log(typeof convertToBoolean6, convertToBoolean6); //OUTPUT: boolean, false