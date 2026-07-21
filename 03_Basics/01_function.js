// ========================================================
// FUNCTIONS IN JAVASCRIPT (PART 1 & 2 - EXHAUSTIVE)
// Every detail, quirk, and example covered before "Scope"
// ========================================================

// --------------------------------------------------------
// 1. FUNCTION REFERENCE VS EXECUTION
// --------------------------------------------------------
function sayMyName() {
    console.log("H"); // Output: "H"
    console.log("I"); // Output: "I"
    console.log("T"); // Output: "T"
    console.log("E"); // Output: "E"
    console.log("S"); // Output: "S"
    console.log("H"); // Output: "H"
}

// sayMyName;   // This is just a REFERENCE. It tells you the function exists but does nothing.
// sayMyName(); // The parentheses () EXECUTE the function.


// --------------------------------------------------------
// 2. PARAMETERS, ARGUMENTS & TYPE COERCION
// --------------------------------------------------------
function addTwoNumbers(number1, number2) { // number1, number2 are PARAMETERS
    console.log(number1 + number2);
}

// Calling the function with ARGUMENTS
addTwoNumbers(3, 4);    // Output: 7

// JavaScript does not strictly check data types, which can lead to bugs:
addTwoNumbers(3, "4");  // Output: "34" (Number + String = String Concatenation)
addTwoNumbers(3, "a");  // Output: "3a" 
addTwoNumbers(3, null); // Output: 3 (null is converted to 0)


// --------------------------------------------------------
// 3. CONSOLE.LOG vs RETURN (The "undefined" trap)
// --------------------------------------------------------
function addTwoNumbersTrap(number1, number2) {
    console.log(number1 + number2);
}

const result1 = addTwoNumbersTrap(3, 5); 
// The console.log inside the function prints '8', BUT...
console.log("Result: ", result1); // Output: "Result:  undefined"
// WHY? Because the function didn't RETURN anything to the variable 'result1'.

// The correct way to store a value:
function addTwoNumbersCorrect(number1, number2) {
    // let result = number1 + number2;
    // return result;
    
    // Any code AFTER a return statement is unreachable
    // console.log("Hitesh"); // This will NEVER execute

    // Shorter syntax:
    return number1 + number2; 
}

const result2 = addTwoNumbersCorrect(3, 5);
console.log("Result: ", result2); // Output: "Result:  8"


// --------------------------------------------------------
// 4. HANDLING UNDEFINED & DEFAULT PARAMETERS
// --------------------------------------------------------
function loginUserMessage(username) {
    // If we call this function with no arguments, 'username' becomes undefined.
    // In JavaScript, undefined is considered a "falsy" value.
    
    // You can check it like this: if (username === undefined)
    // Or use the professional shorthand: if (!username)
    if (!username) {
        console.log("Please enter a username");
        return; // Stops the function so it doesn't execute the next line
    }
    
    return `${username} just logged in`;
}

console.log(loginUserMessage("hitesh")); // Output: "hitesh just logged in"
console.log(loginUserMessage(""));       // Output: "Please enter a username" then 'undefined'
console.log(loginUserMessage());         // Output: "Please enter a username" then 'undefined'

// Avoiding undefined with Default Parameters
function loginUserMessageWithDefault(username = "sam") {
    // If no argument is passed, "sam" is used. If an argument is passed, it overrides "sam".
    return `${username} just logged in`;
}
console.log(loginUserMessageWithDefault()); // Output: "sam just logged in"


// --------------------------------------------------------
// 5. THE REST OPERATOR (Handling multiple arguments)
// --------------------------------------------------------
// Used in e-commerce carts when you don't know how many items the user will add.
// The ... operator bundles all arguments into a single Array.

function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(200, 400, 500, 2000)); 
// Output: [ 200, 400, 500, 2000 ]

// Tricky Interview Question: Mixing parameters with Rest
function calculateDiscountedPrice(val1, val2, ...num1) {
    return num1;
}

// 200 goes to val1. 400 goes to val2. The rest gets bundled into the array.
console.log(calculateDiscountedPrice(200, 400, 500, 2000)); 
// Output: [ 500, 2000 ]


// --------------------------------------------------------
// 6. PASSING OBJECTS TO FUNCTIONS
// --------------------------------------------------------
const user = {
    username: "hitesh",
    prices: 199 // Notice the typo in the key (prices instead of price)
}

function handleObject(anyobject) {
    // If you type a key that doesn't exist (like anyobject.price instead of prices), it returns undefined.
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user); 
// Output: "Username is hitesh and price is undefined" (Because the object key was 'prices')

// You can pass the object directly into the function call without declaring a variable first
handleObject({
    username: "sam",
    price: 399
}); 
// Output: "Username is sam and price is 399"


// --------------------------------------------------------
// 7. PASSING ARRAYS TO FUNCTIONS
// --------------------------------------------------------
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray)); // Output: 400

// You can also pass the array directly into the function call
console.log(returnSecondValue([1000, 2000, 3000, 4000])); // Output: 2000