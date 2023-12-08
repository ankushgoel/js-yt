function addTwoNumbers(num1, num2) { //parameters at the time of func definition
    console.log("Inside func")
    return num1 + num2
    console.log("Unreachable code")
}
console.log(addTwoNumbers()); //Nan
console.log(addTwoNumbers(3, 4));
console.log(addTwoNumbers(3, "4")); //string
console.log(addTwoNumbers(3, "a")); //string
console.log(addTwoNumbers(3, null)); // null is ignored

const result = addTwoNumbers(3, 5);
