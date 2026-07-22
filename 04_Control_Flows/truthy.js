// ========================================================
// CONTROL FLOW (PART 3) - Truthy/Falsy, ??, & Ternary
// ========================================================

// --------------------------------------------------------
// 1. TRUTHY AND FALSY VALUES
// --------------------------------------------------------
// In JavaScript, when a value is evaluated in a boolean context (like an 'if' statement), 
// it is automatically converted to true or false.

const userEmail = "h@hitesh.ai";

if (userEmail) {
    console.log("Got user email"); // Output: "Got user email" (Because non-empty strings are true)
} else {
    console.log("Don't have user email");
}

/*
FALSY VALUES (Memorize these! Everything else is Truthy):
- false
- 0
- -0
- BigInt 0n
- "" (Empty string)
- null
- undefined
- NaN (Not a Number)

SURPRISING TRUTHY VALUES (Watch out for these in interviews):
- "0" (Zero inside a string)
- 'false' (The word false inside a string)
- " " (A string with a space inside)
- [] (Empty array)
- {} (Empty object)
- function(){} (Empty function)
*/


// --------------------------------------------------------
// 2. CHECKING FOR EMPTY ARRAYS AND OBJECTS
// --------------------------------------------------------
const emptyObj = {};

// Checking an empty array:
const emptyArray = [];
if (emptyArray.length === 0) {
    console.log("Array is empty"); // Output: "Array is empty"
}

// Checking an empty object (Use Object.keys to convert to array first):
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty"); // Output: "Object is empty"
}


// --------------------------------------------------------
// 3. NULLISH COALESCING OPERATOR (??)
// --------------------------------------------------------
// Designed specifically to handle 'null' and 'undefined' when fetching data from databases/APIs.
// It returns the right-hand value ONLY if the left-hand value is null or undefined.

let val1;
val1 = 5 ?? 10;
console.log(val1); // Output: 5

let val2;
val2 = null ?? 10; // If database returns null, use 10 as a safety fallback
console.log(val2); // Output: 10

let val3;
val3 = undefined ?? 15;
console.log(val3); // Output: 15

let val4;
val4 = null ?? 10 ?? 20; // It takes the first valid value it finds
console.log(val4); // Output: 10


// --------------------------------------------------------
// 4. TERNARY OPERATOR (? :)
// --------------------------------------------------------
// A shorthand way to write a simple if/else statement.
// Syntax: condition ? true_execution : false_execution

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80"); 
// Output: "more than 80"