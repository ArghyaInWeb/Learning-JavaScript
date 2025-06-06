//- reduce()

const myNum = [1, 2, 3];


const totalNum = myNum.reduce(function(acc, current) {
    return acc + current
}, 0)
console.log(totalNum)

const totalNum2 = myNum.reduce( (acc, current) => acc + current, 0)
console.log(totalNum2)

//* Example Scenario

const shoppingCart = [
    {
        itemName: 'JS Course',
        price: 2999
    },
    {
        itemName: 'Python Course',
        price: 2999
    },
    {
        itemName: 'C++ Course',
        price: 2999
    },
    {
        itemName: 'React Course',
        price: 2999
    }
]

const cartPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(cartPrice)