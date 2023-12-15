let a = 10
const b = 20
var c = 30

// console.log(a)
// console.log(b)
// console.log(c)

if(true) {
    let i = 10
    const j = 20
    var k = 30 

    var c = 400
    let a = 100
    // console.log("inside value of a: ", a)
}

// console.log(i)
// console.log(j)
// console.log(k)

// console.log(c)
// console.log("outside value of a: ", a)

array = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

// Nested scopes

function one(){
    const username = "ankush"

    function two() {
        const age = "29"
        console.log(username)
    }
    // console.log(age);

    two()
}

one()

if(true) {
    const username = "ankush"
    if(username === "ankush") {
        const age = " 29 years"
        console.log(username + age);
    }
    // console.log(age);
}
// console.log(username);


//hoisting
addone(5)
function addone(num) {
    return num + 1
}

addTwo(5)
const addTwo = function(num) {
    return num + 2
}