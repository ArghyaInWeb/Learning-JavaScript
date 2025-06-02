/*
JavaScript Objects Practice Questions
----------------------------------

These questions focus on concepts from objects (Part 1 & 2):
- Object literals and creation
- Accessing and modifying properties
- Nested objects
- Object methods
- Object.keys, values, entries
- Object merging
- Arrays of objects
- Symbol as keys

?Level 1: Basic Object Operations
------------------------------*/

//* Q1: User Profile Creator
// Create an object called userProfile with:
// - Basic properties (name, age, email)
// - A property with spaces in its name
// - A Symbol as a key
// Then try to access each property using both dot and bracket notation
// Your code here:

const mySym = Symbol("id")

const userProfile = {
    name: "Arghya Biswas",
    age: 20,
    email: "arghya@google.com",
    [mySym]: "value"
}

console.log(userProfile.name)
console.log(userProfile["name"])
console.log(userProfile.age)
console.log(userProfile["age"])
console.log(userProfile.email)
console.log(userProfile["email"])
console.log(userProfile[mySym])

//* Q2: Product Inventory
// Create an object to manage a product with:
// - Basic product info (name, price, id)
// - A method to apply discount
// - Freeze the object after creation
// Try to modify the price afterwards (it shouldn't work)
// Your code here:

const productInfo = {
    name: "Product",
    price: 49.99,
    id: 69
}
console.log(productInfo)
productInfo.discount = function() {
    this.price = 0.3 * this.price
    console.log(`you got an 30% discount: ${this.price}`)
}

console.log(productInfo.discount())
console.log(productInfo)

Object.freeze(productInfo)
productInfo.price = 99.99
console.log(productInfo)

/*
?Level 2: Nested Objects
---------------------*/

//* Q3: Company Directory
// Create a nested object structure for:
// - Company (name, year)
//   - Department (name, floor)
//     - Employees (array of names)
// Access and print the name of an employee
// Your code here:

const company = {
    name: "XYZ",
    year: 2020,
    department: {
        name: "Human Resource",
        floor: 3,
        employee: [
            "Ram",
            "Sham",
            "Me",
            "You"
        ]
    }
}

console.log(company)
console.log(`An employee: ${company.department.employee[3]}`)

//* Q4: Social Media Post
// Create an object representing a social media post with:
// - Basic info (title, content)
// - Author details (nested object)
// - Comments (array of comment objects)
// - Likes count
// - Method to add a new comment
// Your code here:

const postInfo = {
    title: "Watch me get dumped", //?     lol :)
    content: "I got dumped",
    Author: {
        name: "User6969",
        email: "stupid@gmail.com",
    },
    comments: [
        { user: "User1", comment: "Sorry to hear that!"},
        { user: "User2", comment: "haha noob" },
        { user: "User3", comment: "Stay strong!" }
    ],
    likes: 69,
    newComment: function() {
        const newComment = { user: "User4", comment: "I feel you!" };
        this.comments.push(newComment);
        console.log(`New comment added by ${newComment.user}: "${newComment.comment}"`);
    }
}

//console.log(postInfo);
//console.log(postInfo.newComment())
//console.log(postInfo)


/*
?Level 3: Object Methods & Properties
--------------------------------*/

//* Q5: Library Catalog
// Create an object representing a book catalog:
// 1. Add multiple books (title, author, year)
// 2. Use Object.keys to list all books
// 3. Use Object.values to list all years
// 4. Use Object.entries to list book titles with their authors
// Your code here:

const bookCatalog = {
    "1984": {
        Author: "George Orwell",
        Year: 1949
    },
    "To Kill a Mockingbird": {
        Author: "Harper Lee",
        Year: 1960
    },
    "The Great Gatsby": {
        Author: "F. Scott Fitzgerald",
        Year: 1925
    }
}

console.log(Object.keys(bookCatalog))

const allBookObj = Object.values(bookCatalog)
console.log(`[${allBookObj[0].Year}, ${allBookObj[1].Year}, ${allBookObj[2].Year}]`)


//* Q6: Object Merger
// Create three different objects:
// - personalInfo (name, age)
// - contactInfo (email, phone)
// - addressInfo (city, country)
// Merge them into a single user profile using:
// 1. Object.assign()
// 2. Spread operator
// Your code here:

const personalInfo = {
    name: "Arghya",
    age: 20
}

const contactInfo = {
    email: "arghya@google.com",
    phone: "+69 56699665"
}

const addressInfo = {
    city: "WB",
    country: "India"
}

const mergedWAssign = Object.assign({},  personalInfo, contactInfo, addressInfo)
console.log(mergedWAssign)

const mergedWSpread = {...personalInfo, ...contactInfo, ...addressInfo}
console.log(mergedWSpread)

/*
?Level 4: Arrays of Objects
-----------------------*/

//* Q7: Shopping Cart
// Create an array of product objects:
// - Each product has: name, price, quantity
// Add methods to:
// 1. Calculate total price
// 2. Add new product
// 3. Remove the last product
// Your code here:
const shoppingCart = {
    products: [
        {
            name: "Apple",
            price: 5.99,
            quantity: 12
        },
        {
            name: "Banana",
            price: 5.99,
            quantity: 12
        },
        {
            name: "Mango",
            price: 5.99,
            quantity: 12
        }
    ],

    calcTotalPrice: function() {
        console.log(this.products[0].price * this.products[0].quantity +
                    this.products[1].price * this.products[1].quantity +
                    this.products[2].price * this.products[2].quantity
        )
    },

    addNewProduct: function() {
        
        const newProduct =  {
            name: "Orange",
            price: 5.99,
            quantity: 12
        }
        

        this.products.push(newProduct)
    },

    removeProduct: function() {
        this.products.pop()
    }
}

console.log(shoppingCart.products)
console.log(shoppingCart.calcTotalPrice())

shoppingCart.addNewProduct()
console.log(shoppingCart.products)

shoppingCart.removeProduct()
console.log(shoppingCart.products)



//* Q8: Student Records
// Create an array of student objects:
// - Each student has: name, grades (array), subjects (array)
// - Add a method to calculate average grade
// - Add a method to list all subjects
// Your code here:

const students = {
    studentList: [
        {
            name: "Arghya Biswas",
            grades: [85, 79, 90],
            subjects: ["English", "Mathematics", "Sanskrit"]
        },
        {
            name: "Sounok Das",
            grades: [94, 86, 72],
            subjects: ["Science", "Economics", "Hindi"]
        },
    ],

    calcAvg: function() {
        const avg = (this.studentList[0].grades[0] + this.studentList[0].grades[1] + this.studentList[0].grades[2] +
                     this.studentList[1].grades[0] + this.studentList[1].grades[1] + this.studentList[1].grades[2]
                ) / 6
        console.log(`Average of all the students: ${avg.toFixed(2)}`)
    },

    listSubjects: function() {
        let allSubject = [...this.studentList[0].subjects, ...this.studentList[1].subjects]
        console.log(`All subjects: ${allSubject}`)  
    }
}

console.log(students.studentList)
students.calcAvg()
students.listSubjects()
