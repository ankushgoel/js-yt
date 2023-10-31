let score = 37

console.log(typeof(score))

let score2 = "37"
console.log(typeof(score2))

let valueInNumber = Number(score2);
console.log(typeof(valueInNumber))
console.log(valueInNumber);

let score3 = "37abc"
console.log(typeof(score3))

let valInNumber = Number(score3);
console.log(typeof(valInNumber))
console.log(valInNumber); // NaN

// null => 0
// undefined => NaN
// boolean => 0/1

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);