const score = 300
// console.log(score);

const balance = new Number(500)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(2));

const someNumber = 2127.383259
// console.log(someNumber.toPrecision(3));

const hundereds = 10000000
// console.log(hundereds.toLocaleString('en-IN'));

// ******************** Maths ********************* //

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(3.2));
// console.log(Math.ceil(5.1));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 9));
// console.log(Math.max(4, 3, 6, 9));

const randomValue = Math.random()
// console.log(randomValue);
// console.log((randomValue*10) + 1);
// console.log(Math.floor((randomValue*10) + 1));

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1) + min));