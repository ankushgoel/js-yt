class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`
    }
}

const user = new User("ankush", "ankush@mail.com", "12345")
console.log(user);
console.log(user.encryptPassword());