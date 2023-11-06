const name = "Ankush"
const age = 28

const string = name + age + " yrs old"

// console.log(string);

// String Interpolation/Template Literals
// console.log(`Hey my name is ${name} and I'm ${age} yrs old!`);

const newName = new String('ankushag') // key val pairs

// console.log(newName[0]);
// console.log(newName.length);

// console.log(newName.__proto__);

// console.log(newName.toUpperCase());
// console.log(newName.indexOf('k'));
// console.log(newName.charAt(5));

const newName2 = new String('ankush-ag') // key val pairs

const newString = newName2.substring(0, 3)
// console.log(newString);

const stringSplice = newName2.slice(-7, 6)
// console.log(stringSplice);
/* TL;DR:
If you know the index (the position) on which you'll stop (but NOT include end/stop), use slice().
If you know the length of characters to be extracted, you could use substr(), but that is discouraged as it is deprecated.


If start > stop, 
    then substring will swap those 2 arguments.
    slice() will return the empty string. ("")
if negative indexes, 
    Substring requires positive indexes and will set a negative index to 0. 
    Slice's negative index means the position from the end of the string.
*/

const url = "https://developersnation.com/ankush%20goel"
console.log(url.replace('%20', '-'));
console.log(url.includes('goel'));

console.log(url.split('/'));
