// ========================================================
// DATA TYPES SUMMARY IN JAVASCRIPT
// ========================================================
// Data types are categorized into 2 groups based on how they 
// are stored in memory and accessed.

// Note: JavaScript is a DYNAMICALLY TYPED language. 
// We don't define the type of the variable (e.g., int, float).
// The JS engine figures it out at runtime.


// --------------------------------------------------------
// 1. PRIMITIVE DATA TYPES (Call by Value)
// --------------------------------------------------------
// When copied, you get a copy of the value, not the memory reference.
// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100;           // Number
//   // Number (JS doesn't have a separate 'float' type)
// const isLoggedIn = false;    // Boolean
// const outsideTemp = null;    // null (Standalone value meaning "completely empty", not 0)
// let userEmail;               // undefined (Variable declared, but no value assigned)

// Symbol - Used to make a value completely unique (often used in React components)
// const id = Symbol('123');
// const anotherId = Symbol('123');
// id === anotherId -> false (Even if the passed string is the same, Symbols are always unique)

// BigInt - Used for massive scientific or trading numbers
// const bigNumber = 3456543576654356754n; // Appending 'n' makes it a BigInt


// --------------------------------------------------------
// 2. NON-PRIMITIVE / REFERENCE TYPES
// --------------------------------------------------------
// When copied or accessed, a reference to the original memory space is given.
// Types: Arrays, Objects, Functions

// Array
// const heroes = ["shaktiman", "naagraj", "doga"];

// Object (Key-Value pairs inside curly braces)
// let myObj = {
//     name: "hitesh",
//     age: 22,
// };

// Function (Functions can be treated as variables in JS)
// const myFunction = function(){
//     console.log("Hello world");
// }


// --------------------------------------------------------
// 'typeof' OPERATOR CHEATSHEET (Crucial for Interviews)
// --------------------------------------------------------
// console.log(typeof scoreValue);  // "number"
// console.log(typeof isLoggedIn);  // "boolean"
// console.log(typeof id);          // "symbol"

// INTERVIEW FAVORITES:
// console.log(typeof outsideTemp); // "object"   --> VERY IMPORTANT: typeof null is an object.
// console.log(typeof userEmail);   // "undefined"--> typeof undefined is just undefined.
// console.log(typeof myFunction);  // "function" --> Returns function, but it's technically an "object function".
// console.log(typeof heroes);      // "object"   --> Arrays return as objects.

// ========================================================
// MEMORY ALLOCATION: STACK vs HEAP
// ========================================================

// --------------------------------------------------------
// 1. STACK MEMORY (Used for Primitive Types)
// --------------------------------------------------------
// Key Concept: When you assign a primitive value to a new variable, 
// you get a COPY of the original value. Modifying it DOES NOT change the original.

// let myYoutubename = "hiteshchoudharydotcom";
// let anothername = myYoutubename; 

// anothername = "chaiaurcode"; 

// console.log(myYoutubename); // Output: "hiteshchoudharydotcom" (Untouched)
// console.log(anothername);   // Output: "chaiaurcode"


// --------------------------------------------------------
// 2. HEAP MEMORY (Used for Non-Primitive / Reference Types)
// --------------------------------------------------------
// Key Concept: When you assign a non-primitive value, you get a REFERENCE 
// to the exact same space in the Heap memory. Modifying it WILL change the original.

// let userOne = {
//     email: "user@google.com",
//     upi: "user@ybl"
// };

// let userTwo = userOne; 

// userTwo.email = "hitesh@google.com"; 

// console.log(userOne.email); // Output: "hitesh@google.com" (Original got changed!)
// console.log(userTwo.email); // Output: "hitesh@google.com"