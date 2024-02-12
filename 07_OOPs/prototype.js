let myName = "ankush     "
let mychannel = "CodeWithCoffee     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.inAll = function(){
    console.log(`this is present in all objects`);
}

Array.prototype.heyAnkush = function(){
    console.log(`Ankush says hello`);
}

// heroPower.inAll()
// myHeros.inAll()
// myHeros.heyAnkush()
// heroPower.heyAnkush()


// Inheritance

const User = {
    name: "code",
    email: "code@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

mychannel.trueLength()

" ankush ".trueLength()
"   cappuccino    ".trueLength()