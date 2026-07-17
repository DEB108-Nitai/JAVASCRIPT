// ========================================================
// STRINGS IN JAVASCRIPT
// ========================================================
// Strings can be declared with single quotes '' or double quotes "".
// Modern JS heavily relies on backticks `` for String Interpolation.

const devoteeName = "Arjuna";
const roundsChanted = 16;


// --------------------------------------------------------
// 1. STRING CONCATENATION (The Old Way - Avoid this)
// --------------------------------------------------------
// This is the outdated way to combine strings and variables.
// It gets messy quickly.
console.log("O " + devoteeName + ", you have chanted " + roundsChanted + " rounds today."); 


// --------------------------------------------------------
// 2. STRING INTERPOLATION (The Modern Way - Use this)
// --------------------------------------------------------
// Backticks (``) allow you to inject variables directly using ${}
// It's much cleaner and allows for multiline strings.
console.log(`O ${devoteeName}, you have chanted ${roundsChanted} rounds today.`);


// --------------------------------------------------------
// 3. DECLARING STRINGS AS OBJECTS
// --------------------------------------------------------
// You can declare a string using the 'new' keyword.
// This gives you a String Object, where each character is indexed like an array.
// It also exposes the String Prototype methods directly.

const holyDham = new String('Sri-Vrindavan-Dham');

console.log(holyDham[0]); // Accessing the first character: 'S'
console.log(holyDham.__proto__); // Viewing the prototype object (holds the methods)


// ========================================================
// IMPORTANT STRING METHODS
// ========================================================

// Note: String methods DO NOT change the original string.
// They return a *new* string because Primitive types use Stack Memory.

console.log(holyDham.length);          // Returns length of the string: 18
console.log(holyDham.toUpperCase());   // Converts to uppercase: "SRI-VRINDAVAN-DHAM"
console.log(holyDham.charAt(4));       // Returns the character at index 4: "V"
console.log(holyDham.indexOf('V'));    // Returns the index of the first 'V': 4


// --------------------------------------------------------
// SLICING AND SUBSTRINGS
// --------------------------------------------------------

// substring(startIndex, endIndex)
// Extracts a portion of the string.
// The endIndex is NOT included. 
// Note: substring() ignores negative values and treats them as 0.
const title = holyDham.substring(0, 3);
console.log(title); // Output: "Sri" (Indexes 0, 1, 2)

// slice(startIndex, endIndex)
// Similar to substring, but it ACCEPTS NEGATIVE VALUES.
// Negative values count backwards from the end of the string.
const coreName = holyDham.slice(-14, -5);
console.log(coreName); // Output: "Vrindavan"


// --------------------------------------------------------
// CLEANING UP STRINGS
// --------------------------------------------------------

// trim()
// Removes whitespace and line terminators (\n) from BOTH ends of a string.
// Very useful for cleaning up user inputs in forms.
const chant = "   Hare Krsna    ";
console.log(chant);        // Output: "   Hare Krsna    "
console.log(chant.trim()); // Output: "Hare Krsna"


// --------------------------------------------------------
// REPLACING AND SEARCHING
// --------------------------------------------------------

// replace(searchFor, replaceWith)
// Replaces the first instance of a matched string/character.
// Often used to clean up URLs.
const scriptureUrl = "https://vedabase.io/bhagavad%20gita";
console.log(scriptureUrl.replace('%20', '-')); // Output: "https://vedabase.io/bhagavad-gita"

// includes(searchString)
// Returns true/false if the string contains the search term.
console.log(scriptureUrl.includes('krsna')); // Output: false
console.log(scriptureUrl.includes('bhagavad')); // Output: true


// --------------------------------------------------------
// SPLITTING STRINGS INTO ARRAYS
// --------------------------------------------------------

// split(separator)
// Divides a string into an ordered array of substrings based on a separator.
const mahaMantra = "Hare-Krsna-Hare-Rama";
console.log(mahaMantra.split('-')); // Output: [ 'Hare', 'Krsna', 'Hare', 'Rama' ]