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



const Jsuser = {
    email: "ankush@mail.com",
    fullname:  {
        firstname: "Ankush",
        lastname: "Goel"
    }
}

console.log(Jsuser.fullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj5 = { obj1, obj2};
// const obj5 = Object.assign({}, obj1, obj2, obj3);
const obj5 = {...obj1, ...obj2}

console.log(obj5);


const users = [
    {
        id: 1,
        email: "a@mail.com"
    },
    {
        id: 2,
        email: "b@mail.com"
    },
    {
        id: 3,
        email: "c@mail.com"
    }
]

console.log(users[1].email);

// console.log(user);

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

console.log(user.hasOwnProperty('isLoggedIn'));
