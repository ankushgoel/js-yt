function addTwoNumbers(num1, num2) { //parameters at the time of func definition
    console.log("Inside func")
    let result = num1 + num2
    return result;
    console.log("Unreachable code")
}
// console.log(addTwoNumbers()); //Nan
// console.log(addTwoNumbers(3, 4));
// console.log(addTwoNumbers(3, "4")); //string
// console.log(addTwoNumbers(3, "a")); //string
// console.log(addTwoNumbers(3, null)); // null is ignored
// console.log(addTwoNumbers(null, 3)); // null is ignored

const result = addTwoNumbers(3, 5);

console.log("Result: ", result);

function loginUserMsg(username) {
    // if(username === undefined){ 
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

loginUserMsg("ankush")
// console.log(loginUserMsg()); // undefined just logged in
// console.log(loginUserMsg(""));
// console.log(loginUserMsg(null)); // null just logged in

// Default value
function UserMsg(username = "default user") {
    return `Hello, ${username}`
}
console.log(UserMsg());


function calculateCartPrice(val1, val2, ...nums){
    return nums
}

console.log(calculateCartPrice(200, 400, 600, 700, 900))


const userObj = {
    username: "ankush",
    age: "29"
}
function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and age is ${anyObj.age}`)
}
handleObject(userObj);

const numArray = [200, 400, 600, 800]
function returnSecondVal(anyArray) {
    return anyArray[1]
}
console.log(returnSecondVal(numArray));