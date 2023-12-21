const age = 18

if(age <= 19) {
    console.log("teenager")
} else {
    console.log("not a teenager")
}

// const score = 100
// if (score > 50) { //Block scope
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

const balance = 100
// if(balance < 500 ) console.log("low balance");
// if(balance < 500 ) console.log("low balance"),
// console.log("using comma is not a good pratice");

// if(balance > 100 ) {
//     console.log("greter than 100");
// } else if (balance < 100) {
//     console.log("low balance");
// } else {
//     console.log("100 balance");
// }

const userLoggedIn = true
const paymentMethod = true

if(userLoggedIn && paymentMethod) {
    console.log("Allowed to buy")
}
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in")
}