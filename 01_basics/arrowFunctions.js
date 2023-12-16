const user = {
    username: "ankush",
    age: 29,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome!`);
        console.log(this);
    }
}

// console.log(user.welcomeMessage);
// user.welcomeMessage()

// user.username = "rohit"
// user.welcomeMessage()
console.log(this); // {} object in case of node env and window global object in case of browser

function userFunc() {
    let username = "ankush"
    console.log(this)
    console.log(this.username) // undefined
}
userFunc()

const newFunc = function() {
    let username = "ankush"
    console.log(this.username) // undefined
}
newFunc()

const newFunc2 = () => {
    let username = "ankush"
    console.log(this) // {} empty object
    console.log(this.username) // undefined
}
newFunc2()

const addTwo = (num1, num2) => {
    return num1 + num2 // explicit
}
// const addTwo = (num1, num2) => num1 + num2 // implicit return
// const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3, 4))

const newFunc3 = () => ({name: "ankush"})
console.log(newFunc3())

const myArray = [1, 2, 3, 4, 5, 6, 7]

myArray.forEach(element => {
    return element*2
});