"use strict"; // treat all JS code as newer version

// alert(3 + 3) // we are using nodejs, not broswer engine

// Primitive & non primitive(Reference) types
// Primitive types
let age = 25 // number
let name = "ankush" // string
let isLoggedIn = true // boolean
let state; // undefined
let bigNumber = 876348349838n;

// bigint
// null => standalone value
// undefined => value not assigned
// symbol => uniqueness
const id = Symbol('123')

// object

console.log(typeof name); // string
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof bigNumber); // bigint
console.log(typeof id); // symbol

// Reference - Array, Object, Function
const arr = ["ironman","thor","spiderman"]
const obj = {
    name: "surya",
    age: 22,
}
const func = function () {
    console.log("hello world!");
}

console.log(typeof arr); //object
console.log(typeof obj); //object
console.log(typeof func); //function