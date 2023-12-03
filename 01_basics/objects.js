// singleton is made using constructor
// Object.create
// new Object()

// object literals
const mySym = Symbol("key1");
const mySym2 = Symbol("key2");

const user = {
    mySym: "mykey1",
    [mySym2]: mySym2,
    name: "Ankush",
    "full name": "Ankush Goel",
    age: "28",
    location: "Delhi",
    email: "ankush@mail.com",
    isLoggedIn: false,
    lastLogin: "2 Dec 11:11 PM"
}

// console.log(user.email);
// console.log(user["full name"]);

// console.log(user.mySym); // mykey1
// console.log(typeof user.mySym); // string

// console.log( user[mySym2]); // Symbol(key2)
// console.log(typeof user[mySym2]); // symbol

user.email = "ankushgoel@mail.com"

// Object.freeze(user); // No changes can be made in freezed object
// user.age = 21;

user.greeting = function() {
    console.log("Hello user");
}

user.greeting2 = function() {
    console.log(`Hello, ${this.name}`);
}

// console.log(user.greeting);
// console.log(user.greeting()); // log expects return from func and prints it as undefined
user.greeting()
user.greeting2()