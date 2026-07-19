// ========================================================
// DATES IN JAVASCRIPT
// ========================================================
// JavaScript Date objects represent a single moment in time.
// It is calculated in milliseconds since January 1, 1970 (Epoch time).
// Note: A future API called 'Temporal' is proposed to make this easier, 
// but for now, we use the standard Date object.

let myDate = new Date();

// --------------------------------------------------------
// DIFFERENT DATE FORMATS
// --------------------------------------------------------
// The default output of Date is not very readable, so we use string methods.

console.log(myDate); // Output: Unreadable format (e.g., 2023-08-27T10:00:00.000Z)
console.log(myDate.toString()); // Output: Wed Mar 01 2023 12:00:00 GMT...
console.log(myDate.toDateString()); // Output: Wed Mar 01 2023
console.log(myDate.toLocaleString()); // Output: 3/1/2023, 12:00:00 PM

// INTERVIEW QUESTION: What is the data type of Date?
console.log(typeof myDate); // Output: "object"


// --------------------------------------------------------
// CREATING SPECIFIC DATES
// --------------------------------------------------------
// IMPORTANT: When passing parameters like (Year, Month, Date), MONTHS START FROM 0.
// January is 0, February is 1, etc.

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString()); // Output: Mon Jan 23 2023

// Passing Year, Month, Date, Hours, Minutes
let myCreatedDateTime = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDateTime.toLocaleString()); // Output: 1/23/2023, 5:03:00 AM

// When writing dates in a "MM-DD-YYYY" or "YYYY-MM-DD" string format, months start from 1.
let myStringDate = new Date("01-14-2023");
console.log(myStringDate.toLocaleString()); // Output: 1/14/2023, 12:00:00 AM


// --------------------------------------------------------
// TIMESTAMPS (Used for Quizzes, Polls, Hotel Bookings)
// --------------------------------------------------------
// Timestamps give you the exact milliseconds since Jan 1, 1970.
// This makes it easy to compare two different dates to see which is earlier/later.

let myTimeStamp = Date.now();
console.log(myTimeStamp); // Returns current time in milliseconds

// Getting milliseconds from a specific created date for comparison
console.log(myCreatedDate.getTime()); 

// INTERVIEW QUESTION: Convert current time to seconds (instead of milliseconds)
// We divide by 1000 and use Math.floor() to remove the decimal values.
console.log(Math.floor(Date.now() / 1000));


// --------------------------------------------------------
// EXTRACTING SPECIFIC DATE VALUES
// --------------------------------------------------------
let newDate = new Date();

console.log(newDate.getDate());
console.log(newDate.getDay()); // Monday is 1, Tuesday is 2, etc.

// Because months start at 0, developers often add 1 so the end-user sees the correct month number.
console.log(newDate.getMonth() + 1); 

// Using String Interpolation to display the date:
console.log(`The day is ${newDate.getDay()} and the month is ${newDate.getMonth() + 1}`);


// --------------------------------------------------------
// ADVANCED toLocaleString() CUSTOMIZATION
// --------------------------------------------------------
// You can pass an object to toLocaleString to define exactly how you want the date formatted.
// This is very helpful for standardizing formats or setting time zones.

newDate.toLocaleString('default', {
    weekday: "long"
    // timeZone: "Asia/Kolkata" // Can also define specific time zones
});