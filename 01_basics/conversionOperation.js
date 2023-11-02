let score = 37

// console.log(typeof(score))

let score2 = "37"
// console.log(typeof(score2))

let valueInNumber = Number(score2);
// console.log(typeof(valueInNumber))
// console.log(valueInNumber);

let score3 = "37abc"
// console.log(typeof(score3))

let valInNumber = Number(score3);
// console.log(typeof(valInNumber))
// console.log(valInNumber); // NaN

// null => 0
// undefined => NaN
// boolean => 0/1

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// Operations

let value = 5
let negValue = -value
// console.log(negValue);

// console.log(2+3)
// console.log(2-3)
// console.log(2*3)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1 = "hello"
let str2 = " ankush"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log( 3 + 4 * 5 % 2)

console.log(+true)
// console.log(true+) // not valid
console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);