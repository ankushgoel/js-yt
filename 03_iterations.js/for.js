for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}
// console.log(element); undefined

for (let i = 1; i <= 10; i++) {
    const element = i;
    if(element == 3){
        console.log("number 3 skipped")
        continue;
    }
    if(element == 5){
        console.log("number 5 matched")
        break;
    }
    console.log(element)
    
}

const myArray = [2, 3, 4, 5, 7, 9, 10]
// console.log(myArray);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}

for (let i = 1; i <= 5; i++) {
    // console.log(`Outer loop val: ${i}`);

    for (let j = 1; j <= 10; j++) {
        const jElement = j;
        // console.log(` Innner loop val: ${j} and outer loop val: ${i}`);
        // console.log(i + "*" + j + ' = ' + i*j);
    }
}