//* Object Destructuring 

const course = {
    title: "JS Course",
    price: 999,
    courseInstructor: "Hitesh"
}

const {courseInstructor} = course; //? Destructuring to extract courseInstructor from course object
console.log(courseInstructor); // Output: Hitesh

const {courseInstructor: instructor} = course; //? Renaming the destructured variable
console.log(instructor); // Output: Hitesh

const {title, price} = course; //? we can also destructure multiple properties at once
console.log(title); // Output: JS Course
console.log(price); // Output: 999