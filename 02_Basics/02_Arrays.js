  // ========================================================
// ADVANCED ARRAY OPERATIONS (PART 2)
// ========================================================

const marvel_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["superman", "flash", "batman"];

// --------------------------------------------------------
// COMBINING ARRAYS
// --------------------------------------------------------
// IMPORTANT: push() inside another array creates an array inside an array. It does not merge them.
// marvel_heroes.push(dc_heroes); 
// console.log(marvel_heroes); -> ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]

// Method 1: concat() -> Returns a new array combining both.
const allHeroes = marvel_heroes.concat(dc_heroes);
console.log(allHeroes); 

// Method 2: SPREAD OPERATOR (...) -> Preferred Method
// Analogy from video: Drop a glass, and it spreads/shatters everywhere.
const all_new_heroes = [...marvel_heroes, ...dc_heroes];
console.log(all_new_heroes);


// --------------------------------------------------------
// FLATTENING NESTED ARRAYS
// --------------------------------------------------------
// flat(depth) -> Returns a new array with all sub-array elements concatenated into it recursively.
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Passing 'Infinity' as depth automatically flattens it completely regardless of nesting levels.
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array); // Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// --------------------------------------------------------
// DATA SCRAPING / CONVERSION METHODS
// --------------------------------------------------------
// Often used when fetching data (NodeLists, HTMLCollections) and converting them to Arrays to use map/filter/loops.

console.log(Array.isArray("Hitesh")); // false (It's a string)
console.log(Array.from("Hitesh"));    // Output: ['H', 'i', 't', 'e', 's', 'h'] (Converts string to Array)

// INTERVIEW QUESTION: Converting objects using Array.from()
// If it cannot figure out how to convert the object directly, it returns an empty array.
// You have to specify if you want an array of keys or values.
console.log(Array.from({name: "hitesh"})); // Output: []

// Array.of() -> Returns a new array from a set of elements (variables, numbers, strings).
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Output: [100, 200, 300]