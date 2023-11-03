console.log("2" > 1);
console.log("02" > 1);
// js is smart enough to convert it to a number
// which creates problem on a bigger level

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// Comparisons convert null to a number, treating it as 0

// undefined comparison will yeild false only

// strict checking including datatype using ===