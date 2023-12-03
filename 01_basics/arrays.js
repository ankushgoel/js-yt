const myArr = [0, 1, 2, 3, 4, 5]
const heroes = ["ironman", "thor", "spiderman"]
// console.log(myArr[1])

const myArr2 = new Array(1, 2, 3)
// console.log(myArr2[2])

// Methods

myArr.push(6)
myArr.pop()
// console.log(myArr)

myArr.unshift(7)
myArr.shift()
// console.log(myArr)

console.log(myArr.includes(7));
console.log(myArr.indexOf(7));

const newArr = myArr.join() // converts array to string
// console.log(myArr)

// Slice and Splice

console.log("A ", myArr);

console.log(myArr.slice(1, 3));
console.log("B ", myArr);

console.log(myArr.splice(1, 3)); // modifies original array
console.log("C ", myArr);

const marvel = ["ironman", "thor", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel.push(dc);

// console.log(marvel);
// console.log(marvel[3][1]);

// const allHeros = marvel.concat(dc)

const allHeros = [...marvel, ...dc]

console.log(allHeros);

const Arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [1, 0]]]

console.log(Array.isArray("Ankush"));
console.log(Array.from("Ankush"));
console.log((Array.from({name : "Ankush"}))); // Interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));