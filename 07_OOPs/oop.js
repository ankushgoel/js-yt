const user = {
    username: "ankush",
    loginCount: 7,
    signedIn: true,
    
    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

// console.log(user.username)
// user.getUserDetails();
// console.log(this);

// class User {
    // constructor(username, loginCount, isLoggedIn) {
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("ankush", 12, true)
const userTwo = new User("CodeWithCoffee", 11, false)
// console.log(userOne);
// console.log(userTwo);

console.log(userOne.constructor);