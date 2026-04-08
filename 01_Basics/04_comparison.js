// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// comparison b/w diff data types 
// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// == and inequality works differently in js . inequality converts null into number so outputs come accordingly but == doesn't change the null into number, thats why it is giving false . >= converts null into 0 , thats why it is giving true


console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===   : strict checking , it also checks the data type  

console.log("2" === 2);