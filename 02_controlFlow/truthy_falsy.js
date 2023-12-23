const email = "ankush@mail.com"

if (email) {
    console.log("email exists");
} else {
    console.log("email doesn't exists");
}

const array = []
if (array) {
    console.log("truthy");
} else {
    console.log("falsy");
}
if (array.length) {
    console.log("not empty");
} else {
    console.log("empty array");
}

// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values
// true, "0", "false", 'false', " ", [], {}, function(){}