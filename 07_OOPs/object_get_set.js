const User = {
    _email: 'ankush@mail.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const user1 = Object.create(User)
console.log(user1.email);