const accountId = 14459
let accountEmail = "Nitai@Ekacakra.com"
var accountPassward = "108"

accountCity="Ekacakra" // variable can be declared without let or const but dont use this , not good 

let accountState // value not given, it will throw undefined in terminal 

// accountId =2 // Changing const is Not allowed

accountEmail="Gauranga@Mayapur.com"
accountPassward="216"
accountCity="Mayapur"
/*
prefer not to use var 
because it renders issue in functional and block scope 
*/
console.log(accountId)
// Printing in a Table format
console.table([accountId,accountEmail,accountPassward,accountCity,accountState])