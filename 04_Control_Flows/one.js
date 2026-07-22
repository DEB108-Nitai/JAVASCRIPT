// ========================================================
// CONTROL FLOW (PART 1) - If / Else & Operators
// ========================================================

// --------------------------------------------------------
// 1. BASIC IF STATEMENT & COMPARISON OPERATORS
// --------------------------------------------------------
const isUserLoggedIn = true;
const temperature = 41;

// Comparison Operators: <, >, <=, >=, ==, !=, ===, !==
// '==' checks value only. '===' (strict equality) checks value AND data type.

if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50"); // Output: "temperature is greater than 50"
}


// --------------------------------------------------------
// 2. SCOPE INSIDE IF BLOCKS (Recap)
// --------------------------------------------------------
const score = 200;

if (score > 100) {
    let power = "fly";
    console.log(`User power: ${power}`); // Output: "User power: fly"
}
// console.log(`User power: ${power}`); // Error: power is not defined (Because let has block scope)


// --------------------------------------------------------
// 3. IMPLICIT SCOPE (Shorthand notation)
// --------------------------------------------------------
const balance = 1000;

// You can write a single-line if statement without {}. 
// NOT RECOMMENDED for readability, but you will see it in production code.
if (balance > 500) console.log("test"); // Output: "test"

// Technically you can chain them with commas, but this is extremely bad practice:
// if (balance > 500) console.log("test"), console.log("test2");


// --------------------------------------------------------
// 4. NESTING (Else-If Ladder)
// --------------------------------------------------------
if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200"); // Output: "less than 1200"
}


// --------------------------------------------------------
// 5. LOGICAL OPERATORS (&& AND, || OR)
// --------------------------------------------------------
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// AND (&&): ALL conditions must be true
if (userLoggedIn && debitCard && 2==2) {
    console.log("Allow to buy course"); // Output: "Allow to buy course"
}

// OR (||): AT LEAST ONE condition must be true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in"); // Output: "User logged in"
}