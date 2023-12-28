const myArray = [1, 2, 3, 4, 5]

for (const num of myArray) {
    // console.log(num);
}

const greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(greet);
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('UK', "United Kingdom")
map.set('FR', "France")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'IN': "India",
    'FR': "France"
}

for (const key of myObject) { // TypeError: myObject is not iterable
    console.log(key, ':-', value);
}