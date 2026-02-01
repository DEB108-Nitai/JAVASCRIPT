let score = "33"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score )

console.log(typeof valueInNumber)
console.log(valueInNumber)

//"33" after converting to Number : 33
//"33abc" after converting to Number : NaN 
// true => 1 , false => 0 

let isLoggedIn = "Hare Krishna "

let booleanLoggedIn = Boolean(isLoggedIn)

console.log(typeof booleanLoggedIn)
console.log(booleanLoggedIn)

// 1 => true , 0 => false 
// "" => false 
// "Nitai" => true 

let someNumber = 108

let stringNumber = String(someNumber)

console.log(typeof stringNumber)
console.log(stringNumber)

//***********OPERATIONS**********

let value = 3
let negValue = -value

console.log(negValue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3); // 2^3
console.log(2/3);
console.log(2%3);

let str1 = "Hare"
let str2 = " Krishna"
let str3 = str1+str2
console.log(str3)

console.log("1" + 2);
console.log(1 + "2"); // string operation more priority 
console.log("1" + 2 +2); // 122 : if string operation happens first then it will convert everything into string 
console.log( 1+ 2 + "2"); // 32 :  first arithmatic then string happened {Left to Right}

console.log((3+4)*5 %3); // Use parenthesis for good code quality 

console.log(true);
console.log(+true); // 1 [converted to numerical]
console.log(+"") // 0 [converted to numerical]

let num1 , num2 , num3 
// how not to write 
num1=num2 = num3 = 2+2 

let gameCounter = 100

gameCounter++ // incremental operation 

console.log(gameCounter)





