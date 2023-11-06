let myDate = new Date()
// console.log(typeof myDate);
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// let createdDate = new Date(2023, 0, 13)
// let createdDate = new Date(2023, 0, 13, 5, 30)
// let createdDate = new Date("2023-01-13")
let createdDate = new Date("01-13-2023")

console.log(createdDate.toDateString());
console.log(createdDate.toLocaleString());

let myTimestamp = Date.now()
console.log(myTimestamp);
console.log(createdDate.getTime());

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

console.log(newDate.toLocaleDateString());
console.log(newDate.toLocaleDateString('en-IN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
})
);