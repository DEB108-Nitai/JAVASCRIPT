// ========================================================
// SCOPE IN JAVASCRIPT
// Global Scope vs Local (Block) Scope
// ========================================================

// --------------------------------------------------------
// 1. LET, CONST, AND VAR (The problem with var)
// --------------------------------------------------------
// The curly braces {} define a block scope when used with functions or if/for statements.
// (Note: {} in an object is just an object declaration, not a scope block).

let a = 300; // Global Scope - Available everywhere

if (true) {
    let a = 10;   // Block Scope - Only available inside this 'if' block
    const b = 20; // Block Scope - Only available inside this 'if' block
    var c = 30;   // VAR DOES NOT RESPECT BLOCK SCOPE!

    console.log("INNER a: ", a); // Output: "INNER a:  10"
}

// Let's see what happens when we try to access these variables outside the block:

console.log(a); // Output: 300 (Global 'a' is safe and completely separate from the inner 'a')

// console.log(b); // Error: b is not defined (This is expected and good behavior)

console.log(c); // Output: 30 
// THIS IS BAD! 'c' leaked out of the block scope. This is why we avoid using 'var'.
// If a programmer had declared a global 'var c = 300' earlier, it would have been silently overwritten here!


// ========================================================
// NESTED SCOPE AND CLOSURES
// ========================================================
// Rule of thumb: Child functions can access parent variables, 
// but parent functions CANNOT access child variables. 
// (Analogy: The child can ask the parent for ice cream, but the parent doesn't take the child's ice cream).

// --------------------------------------------------------
// 2. NESTED FUNCTIONS
// --------------------------------------------------------
function one() {
    const username = "hitesh";

    function two() {
        const website = "youtube";
        console.log(username); // Child accessing Parent's variable -> Works perfectly!
    }
    
    // console.log(website); // Error: website is not defined (Parent trying to access Child's variable)

    two(); 
}

one(); // Output: "hitesh" (Because two() gets executed inside one() and logs the username)


// --------------------------------------------------------
// 3. NESTED IF/ELSE BLOCKS
// --------------------------------------------------------
if (true) {
    const username = "hitesh";
    
    if (username === "hitesh") {
        const website = " youtube";
        console.log(username + website); // Output: "hitesh youtube"
    }
    
    // console.log(website); // Error: website is not defined (Out of the inner block scope)
}

// console.log(username); // Error: username is not defined (Out of the outer block scope)


// ========================================================
// HOISTING (MINI INTRODUCTION)
// Function Declarations vs Function Expressions
// ========================================================

// --------------------------------------------------------
// 4. FUNCTION DECLARATION
// --------------------------------------------------------
// You CAN call a standard function before it is initialized. 
// The JavaScript engine "hoists" the declaration to the top of the context before execution.

console.log(addone(5)); // Output: 6

function addone(num) {
    return num + 1;
}


// --------------------------------------------------------
// 5. FUNCTION EXPRESSION (Holding a function in a variable)
// --------------------------------------------------------
// You CANNOT call an expression before it is initialized. Variables do not get hoisted in the same way.

// console.log(addTwo(5)); // ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
}

console.log(addTwo(5)); // Output: 7