// ========================================================
// ARRAYS IN JAVASCRIPT (PART 1)
// ========================================================
// Arrays in JS are resizable and can contain a mix of different data types.
// Array-copy operations create SHALLOW COPIES (share the same reference point/heap memory).

const myArr = [0, 1, 2, 3, 4, 5];
const myHeroes = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr[1]); // Accessing element at index 1


// --------------------------------------------------------
// BASIC ARRAY METHODS
// --------------------------------------------------------
myArr.push(6);       // Adds 6 to the end of the array
myArr.push(7);       
myArr.pop();         // Removes the last element (7) from the array

myArr.unshift(9);    // Adds 9 to the START of the array (shifts all other elements - heavy operation)
myArr.shift();       // Removes the first element from the array

console.log(myArr.includes(9)); // Checks if 9 exists: Output false
console.log(myArr.indexOf(3));  // Returns index of 3: Output 3 (-1 if it doesn't exist)

// join() binds the array elements together and converts them into a String.
const newArr = myArr.join();
console.log(myArr);  // Output: [0, 1, 2, 3, 4, 5, 6] (Type: Array)
console.log(newArr); // Output: "0,1,2,3,4,5,6" (Type: String)


// --------------------------------------------------------
// INTERVIEW QUESTION: SLICE vs SPLICE
// --------------------------------------------------------
// slice() -> Returns a copy of a section of an array. DOES NOT modify the original array. Last range is not included.
// splice() -> Modifies the original array by removing/replacing elements. Last range IS included.

const arrA = [0, 1, 2, 3, 4, 5];
console.log("Original Array A ", arrA);

const myn1 = arrA.slice(1, 3);
console.log("Slice Result: ", myn1); // Output: [1, 2]
console.log("Array after Slice: ", arrA); // Output: [0, 1, 2, 3, 4, 5] (Original array is intact)

const myn2 = arrA.splice(1, 3);
console.log("Splice Result: ", myn2); // Output: [1, 2, 3]
console.log("Array after Splice: ", arrA); // Output: [0, 4, 5] (Original array is MUTATED!)