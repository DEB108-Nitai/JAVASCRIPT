// ========================================================
// NUMBERS IN JAVASCRIPT
// ========================================================

// Auto-detected as a Number
const score = 400;
console.log(score); // Output: 400

// Explicity defining a Number using the 'new' keyword
// This guarantees the type is an object and exposes the Number prototype methods
const balance = new Number(100);
console.log(balance); // Output: [Number: 100]


// --------------------------------------------------------
// IMPORTANT NUMBER METHODS
// --------------------------------------------------------

// toString()
// Converts the number to a string. Once it's a string, you can use String methods like .length
console.log(balance.toString());        // Output: "100" (Type is now string)
console.log(balance.toString().length); // Output: 3

// toFixed(fractionDigits)
// Very heavily used in E-commerce apps to limit decimals (e.g., GST calculations).
console.log(balance.toFixed(2)); // Output: "100.00"

// toPrecision(precision)
// Returns a string representing the number to a specified precision.
// BE CAREFUL: Priority is given to digits before the decimal.
const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3)); // Output: "124" (Rounds the first 3 digits)

const trickyNumber = 23.8966;
console.log(trickyNumber.toPrecision(3)); // Output: "23.9"

// toLocaleString()
// Makes reading large numbers easier by adding commas.
const hundreds = 1000000;
console.log(hundreds.toLocaleString());        // Default is US standard: "1,000,000"
console.log(hundreds.toLocaleString('en-IN')); // Indian standard: "10,00,000"


// --------------------------------------------------------
// NUMBER PROPERTIES (Used often in Competitive Programming)
// --------------------------------------------------------
console.log(Number.MAX_VALUE); // Maximum possible value in JS
console.log(Number.MIN_VALUE); // Minimum possible value in JS
console.log(Number.MAX_SAFE_INTEGER);


// ========================================================
// MATH OBJECT IN JAVASCRIPT
// ========================================================
// Math is a built-in object that has properties and methods for mathematical constants and functions.

console.log(Math); // Displays the Math object and its properties in the browser console

// Math.abs(x) -> Absolute value (converts negative to positive)
console.log(Math.abs(-4)); // Output: 4

// Math.round(x) -> Rounds to the nearest integer (Most commonly used)
console.log(Math.round(4.6)); // Output: 5
console.log(Math.round(4.3)); // Output: 4

// Math.ceil(x) -> Rounds UP to the nearest integer (Ceiling)
console.log(Math.ceil(4.2)); // Output: 5

// Math.floor(x) -> Rounds DOWN to the nearest integer (Floor)
console.log(Math.floor(4.9)); // Output: 4

// Math.min() / Math.max() -> Finds the lowest/highest value
console.log(Math.min(4, 3, 6, 8)); // Output: 3
console.log(Math.max(4, 3, 6, 8)); // Output: 8


// --------------------------------------------------------
// MATH.RANDOM() - (EXTREMELY IMPORTANT)
// --------------------------------------------------------
// Math.random() always gives a value between 0 (inclusive) and 1 (exclusive).
// Example outputs: 0.123, 0.984, 0.001

console.log(Math.random());

// To get a number from 1 to 10:
// 1. Multiply by 10 to shift the decimal (e.g., 0.54 * 10 = 5.4).
// 2. Add 1 to guarantee we avoid the case where random() gives 0.04 (Math.floor(0.04 * 10) = 0).
// 3. Wrap in Math.floor() to get a single integer.
console.log(Math.floor(Math.random() * 10) + 1);


// --------------------------------------------------------
// GENERIC FORMULA FOR RANDOM NUMBERS IN A RANGE
// --------------------------------------------------------
// Memorize or keep this formula handy for defining a strict Min and Max range!

const min = 10;
const max = 20;

// Step-by-step breakdown:
// 1. (max - min + 1) -> Defines the range of possible numbers and avoids the 0 case.
// 2. + min -> Ensures the final result doesn't fall below the minimum required value.

console.log(Math.floor(Math.random() * (max - min + 1)) + min);