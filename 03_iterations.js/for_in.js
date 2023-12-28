const myObject = {
    'IN': "India",
    'FR': "France",
    'GER': "Germany",
    'CH': "Switzerland"
}

for (const key in myObject) {
    console.log(key);
}

const myArray = [1, 2, 3, 4, 5]

for (const key in myArray) {
    console.log(key, myArray[key]);
}

// Maps are non-iterable
// const map = new Map()
// map.set('IN', "India")
// map.set('UK', "United Kingdom")
// map.set('FR', "France")

// for (const key in map) { 
//     console.log(key, myArray[key]); // No output
// }