let firstName = "arghya";
let lastName = "biswas";
console.log(firstName + lastName); //? "arghyabiswas" (concatenation of strings)
console.log(firstName + " " + lastName); //? "arghya biswas" (concatenation with space)

console.log(`Hello, I'm ${firstName} ${lastName}`); //? (template literal for string interpolation)

let str = new String("Hello, World!"); //? (creating a string object)
console.log(str); //? [String: 'Hello, World!'] (string object representation)
console.log(str.__proto__); //? [String: 'Hello, World!'] (prototype of the string object)


//------------------String Methods------------------//
console.log(str[0]); //? 'H' (accessing character at index 0)
console.log(str[7]); //? 'W' (accessing character at index 7)
console.log(str[12]); //? '!' (accessing character at index 12)
console.log(str[13]); //? undefined (index out of bounds, no character at index 13)

firstName.length

console.log(str.length); //? 13 (length of the string object)

console.log(str.charAt(7)); //? 'W' (character at index 7)
console.log(str.indexOf('o')); //? 4 (index of first occurrence of 'o')
console.log(str.lastIndexOf('o')); //? 8 (index of last occurrence of 'o')

console.log(str.toUpperCase()); //? 'HELLO, WORLD!' (convert to uppercase)
console.log(str.toLowerCase()); //? 'hello, world!' (convert to lowercase)

let str_2 = "Arghya-Biswas";
console.log(str_2.substring(0, 5)); //? 'Arghy' (substring from index 0 to 5)
console.log(str_2.slice(0, 5)); //? 'Arghy' (slice from index 0 to 5)
console.log(str_2.slice(-6, -3)); // //? 'Bisw' (slice from index -6 to -3, counting from the end)

console.log(str_2.replace('-', ' ')); //? 'Arghya Biswas' (replace '-' with ' ')

console.log(str_2.includes('Biswas')); //? true (check if 'Biswas' is included in the string)
console.log(str_2.includes("good")); //? false (check if 'good' is included in the string)

console.log(str_2.split('-')); //? [ 'Arghya', 'Biswas' ] (split the string into an array using '-' as the delimiter)

let str_3 = "   Hello, World!   ";
console.log(str_3.trim()); //? 'Hello, World!' (remove whitespace from both ends)
console.log(str_3.trimStart()); //? 'Hello, World!   ' (remove whitespace from the start)
console.log(str_3.trimEnd()); //? '   Hello, World!' (remove whitespace from the end)
