class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // same like calling .call() and passing this
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacher1 = new Teacher("ankush", "ankush@teacher.com", "12345")
teacher1.logMe()

const user1 = new User("user1")
user1.logMe()

console.log(teacher1 instanceof User);