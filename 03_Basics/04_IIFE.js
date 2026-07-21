// ========================================================
// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// ========================================================
// An IIFE is a function that runs the moment it is defined.

// --------------------------------------------------------
// 1. WHY USE AN IIFE?
// --------------------------------------------------------
// We use IIFE to prevent our variables and functions from polluting the global scope. 
// Sometimes, global variables can interfere with other scripts or libraries. 
// An IIFE creates its own private, isolated scope.

// --------------------------------------------------------
// 2. SYNTAX AND NAMED IIFE
// --------------------------------------------------------
// Syntax: (Function Definition)(Execution);
// The first set of parentheses () wraps the function. The second set () calls it.

(function chai() {
    // This is called a "NAMED IIFE" because the function has the name 'chai'
    console.log(`DB CONNECTED`);
})(); // Output: "DB CONNECTED"

// ⚠️ CRITICAL RULE: You MUST end an IIFE with a semicolon (;).
// The JavaScript engine does not automatically know where an IIFE ends. 
// If you don't use a semicolon here and try to write a second IIFE below it, 
// JavaScript will throw an error trying to merge them together!


// --------------------------------------------------------
// 3. UNNAMED IIFE (Using Arrow Functions)
// --------------------------------------------------------
// You can also write IIFEs using Arrow Functions. 
// Since it doesn't have a name, it's an "Unnamed IIFE" or "Anonymous IIFE".

( () => {
    console.log(`DB CONNECTED TWO`);
} )(); // Output: "DB CONNECTED TWO"


// --------------------------------------------------------
// 4. PASSING ARGUMENTS TO AN IIFE
// --------------------------------------------------------
// How do we pass variables into it? 
// The parameters go in the first (), and the arguments go in the execution ().

( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
} )('hitesh'); // Output: "DB CONNECTED TO hitesh"


// --------------------------------------------------------
// 5. TWO IIFEs BACK-TO-BACK (Recap)
// --------------------------------------------------------
// This works perfectly because of the semicolons separating them.
(function first() {
    console.log("First IIFE Executed");
})(); // Output: "First IIFE Executed"

(() => {
    console.log("Second IIFE Executed");
})(); // Output: "Second IIFE Executed"