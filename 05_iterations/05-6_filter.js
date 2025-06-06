//- filter
//? Filter elements in an array based on a condition
//? It creates a new array with all elements that pass 
//? the test implemented by the provided function

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Using filter to get even numbers

//? implicit returning

const evenNumbers = numbers.filter( (num) => num % 2 === 0 ); //? Filter function checks if the number is even 
console.log(evenNumbers) // Output: [2, 4, 6, 8, 10]

//? explicit returning
const oddNumbers = numbers.filter( (num) => {
    return num % 2 !== 0; //? Filter function checks if the number is odd
})

//* Example Scenario: Filtering an array of objects

const books = [
    { title: "Book A", genre: "Fiction", published: 1981, edition: "First" },
    { title: "Book B", genre: "Non-Fiction", published: 1995, edition: "Second" },
    { title: "Book C", genre: "Fiction", published: 2005, edition: "Third" },
    { title: "Book D", genre: "Science", published: 2010, edition: "First" },
    { title: "Book E", genre: "Fiction", published: 2018, edition: "Fourth" },
    { title: "Book F", genre: "Non-Fiction", published: 2020, edition: "Fifth" },
    { title: "Book G", genre: "Science", published: 2022, edition: "Sixth" }
];
//? Filter books by genre
const userBooks = books.filter( (bk) => bk.genre === 'Fiction') //? Filter function checks if the genre is 'Fiction'
console.log(userBooks) // Output: Array of books with genre 'Fiction'