// ========================================================
// OBJECTS IN JAVASCRIPT (PART 2 & 3)
// Singletons, Merging, Destructuring & JSON APIs
// ========================================================

// Declaring a Singleton object (using Constructor)
const tinderUser = new Object();

// Adding properties manually
tinderUser.id = "1234abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser); // Output: { id: '1234abc', name: 'Sammy', isLoggedIn: false }

// --------------------------------------------------------
// NESTED OBJECTS
// --------------------------------------------------------
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// Accessing nested objects
console.log(regularUser.fullname.userfullname.firstname); // Output: "hitesh"


// --------------------------------------------------------
// MERGING OBJECTS
// --------------------------------------------------------
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};
const obj4 = {5: "a", 6: "b"};

// Method 1: Object.assign(target, ...sources)
// We use an empty object {} as the target so obj1 isn't modified directly.
const obj3 = Object.assign({}, obj1, obj2, obj4);
console.log(obj3); // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Method 2: Spread Operator (Preferred and most common)
const obj5 = {...obj1, ...obj2, ...obj4};
console.log(obj5); // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


// --------------------------------------------------------
// ARRAYS OF OBJECTS (Common Database Response Format)
// --------------------------------------------------------
const users = [
    { id: 1, email: "h@gmail.com" },
    { id: 2, email: "i@gmail.com" },
    { id: 3, email: "j@gmail.com" }
];

// Accessing properties of an object inside an array
console.log(users[1].email); // Output: "i@gmail.com"


// --------------------------------------------------------
// EXTRACTING KEYS AND VALUES 
// --------------------------------------------------------
// Object.keys() returns an array of all the keys. Extremely useful for loops!
console.log(Object.keys(tinderUser)); // Output: [ 'id', 'name', 'isLoggedIn' ]

// Object.values() returns an array of all the values.
console.log(Object.values(tinderUser)); // Output: [ '1234abc', 'Sammy', false ]

// Object.entries() returns an array of key-value pair arrays.
console.log(Object.entries(tinderUser)); // Output: [ [ 'id', '1234abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// Checking if a property exists inside an object (Returns boolean)
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Output: true
console.log(tinderUser.hasOwnProperty('isLoggedOut')); // Output: false


// ========================================================
// OBJECT DESTRUCTURING (Very important for React)
// ========================================================
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Instead of writing course.courseInstructor repeatedly, we extract it directly into a variable.
const {courseInstructor} = course;
console.log(courseInstructor); // Output: "hitesh"

// We can also rename the extracted variable for cleaner code
const {courseInstructor: instructor} = course;
console.log(instructor); // Output: "hitesh"


// ========================================================
// JSON APIs (Introduction)
// ========================================================
// When we get data from a backend API, it usually comes in JSON format.
// JSON is essentially a JavaScript object, but the keys MUST be strings (wrapped in double quotes).

/* 
Example JSON structure (Note the double quotes around keys):
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}
*/

// APIs will also frequently return an array containing multiple JSON objects:
/*
[
    {},
    {},
    {}
]
*/