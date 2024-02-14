class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `13`
    }
}

const user1 = new User("ankush")
// console.log(user1)
// console.log(user1.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const aman = new Teacher("aman", "aman@dnacademy.com")
console.log(aman);
// console.log(aman.createId()); // TypeError: aman.createId is not a function
// Can't access static method