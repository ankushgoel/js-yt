const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`accumulator: ${acc} and currrent Value: ${currval}`);
//     return acc + currval
// }, 0)
const myTotal = myNums.reduce( (acc, val) => acc + val, 0)

console.log(myTotal)

const shoppingCart = [
    {
        itemName: "frontend course",
        price: 1999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 6999
    },
    {
        itemName: "data science course",
        price: 13999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);