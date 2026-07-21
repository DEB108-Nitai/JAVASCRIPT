// ========================================================
// ARROW FUNCTIONS & THE 'THIS' KEYWORD
// ========================================================

// --------------------------------------------------------
// 1. THE 'THIS' KEYWORD (Current Context)
// --------------------------------------------------------
// 'this' refers to the CURRENT CONTEXT (the object that is executing the current function).

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        // We use 'this' to access variables inside the same object
        console.log(`${this.username} , welcome to website`);
        
        // Let's print 'this' to see what the current context holds
        console.log(this); 
    }
}

user.welcomeMessage(); 
// Output: "hitesh , welcome to website"
// Output: { username: 'hitesh', price: 999, welcomeMessage: [Function: welcomeMessage] }

user.username = "sam"; // Changing the context
user.welcomeMessage(); 
// Output: "sam , welcome to website"
// Output: { username: 'sam', price: 999, welcomeMessage: [Function: welcomeMessage] }

// INTERVIEW QUESTION: What happens if we print 'this' in the global scope?
console.log(this); 
// Output in Node.js environment: {} (An empty object, because there is no global context here)
// Output in Browser Console: Window object (The global object in browsers is the Window object)


// --------------------------------------------------------
// 2. 'THIS' INSIDE REGULAR FUNCTIONS
// --------------------------------------------------------
function chai() {
    let username = "hitesh";
    // 'this' only works correctly inside objects. Inside a regular standalone function, it behaves differently.
    console.log(this.username); // Output: undefined
}
chai();

const chaiExpression = function () {
    let username = "hitesh";
    console.log(this.username); // Output: undefined
}
chaiExpression();


// ========================================================
// ARROW FUNCTIONS
// ========================================================
// Introduced in ES6, providing a shorter syntax for writing functions.

// --------------------------------------------------------
// 3. ARROW FUNCTION SYNTAX
// --------------------------------------------------------
// Remove the 'function' keyword and add an arrow '=>' after the parentheses.

const chaiArrow = () => {
    let username = "hitesh";
    console.log(this); // Output: {} (Arrow functions do not have their own 'this' context)
    console.log(this.username); // Output: undefined
}
chaiArrow();


// --------------------------------------------------------
// 4. BASIC ARROW FUNCTION (Explicit Return)
// --------------------------------------------------------
// If you use curly braces {}, you MUST use the 'return' keyword.
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(3, 4)); // Output: 7


// --------------------------------------------------------
// 5. IMPLICIT RETURN (One-liner Arrow Function)
// --------------------------------------------------------
// If the function has only one line, you can remove the {} and the 'return' keyword.
const addThree = (num1, num2, num3) => num1 + num2 + num3;
console.log(addThree(3, 4, 1)); // Output: 8

// You can also wrap the implicit return in parentheses (). This is very common in React!
// Rule: {} requires 'return'. () does not require 'return'.
const addTwoImplicit = (num1, num2) => ( num1 + num2 );
console.log(addTwoImplicit(5, 5)); // Output: 10


// --------------------------------------------------------
// 6. RETURNING OBJECTS IN ARROW FUNCTIONS
// --------------------------------------------------------
// To return an object implicitly, you MUST wrap the object {} in parentheses ().
// If you don't use parentheses, JavaScript thinks the object {} is a function block.

// WRONG: const returnObj = () => {username: "hitesh"} // Returns undefined

// CORRECT:
const returnObj = () => ({username: "hitesh"});
console.log(returnObj()); // Output: { username: 'hitesh' }