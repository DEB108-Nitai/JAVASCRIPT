// ========================================================
// OBJECTS IN JAVASCRIPT (PART 1) - Object Literals
// ========================================================
// There are two ways to declare an object: Literal and Constructor.
// A Singleton is created when we declare using a constructor. 
// Object literals do NOT create singletons.

// INTERVIEW QUESTION: Declare a Symbol and use it as a key in an object.
const mySym = Symbol("key1");

// --------------------------------------------------------
// CREATING AN OBJECT LITERAL
// --------------------------------------------------------
const jsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// --------------------------------------------------------
// ACCESSING OBJECT PROPERTIES
// --------------------------------------------------------
// Method 1: Dot notation (Most common)
console.log(jsUser.email); // Output: "hitesh@google.com"

// Method 2: Square brackets (Required for keys with spaces or Symbols)
console.log(jsUser["email"]); // Output: "hitesh@google.com"
console.log(jsUser["full name"]); // Output: "Hitesh Choudhary"
console.log(jsUser[mySym]); // Output: "mykey1"

// --------------------------------------------------------
// MODIFYING AND FREEZING OBJECTS
// --------------------------------------------------------
jsUser.email = "hitesh@chatgpt.com";
console.log(jsUser.email); // Output: "hitesh@chatgpt.com"

// Object.freeze() locks the object so no further changes can be made.
// Uncomment the line below to test freezing:
// Object.freeze(jsUser); 

// This change won't apply if the object is frozen, but it won't throw an error either.
jsUser.email = "hitesh@microsoft.com";
console.log(jsUser.email); // Output: "hitesh@chatgpt.com" (if frozen), "hitesh@microsoft.com" (if not frozen)

// --------------------------------------------------------
// ADDING FUNCTIONS TO OBJECTS
// --------------------------------------------------------
jsUser.greeting = function() {
    console.log("Hello JS user");
}

// Using 'this' to reference properties inside the same object
jsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

jsUser.greeting(); // Output: "Hello JS user"
jsUser.greetingTwo(); // Output: "Hello JS user, Hitesh"