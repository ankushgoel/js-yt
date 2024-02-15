const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const coffee = {
    name: 'coffee',
    price: 250,
    isAvailable: true,

    orderCoffee: function(){
        console.log("ordering coffee!");
    }
}

console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

Object.defineProperty(coffee, 'name', {
    //writable: false,
    enumerable: true,
})

console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

for (let [key, value] of Object.entries(coffee)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}