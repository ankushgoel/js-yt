const languages = ["js", "java", "php", "python", "ruby", "cpp"]

languages.forEach( (item) => {
    // console.log(item);
})

function printData(item) {
    console.log(item);
}

// languages.forEach(printData)

languages.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

const myArrayOfObject = [
    {
        name: "javascript",
        ext: "js"
    },
    {
        name: "java",
        ext: "java"
    },
    {
        name: "php",
        ext: "php"
    },
]
myArrayOfObject.forEach( (object) => {
    console.log(object.name, object.ext);
})