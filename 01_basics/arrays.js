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
