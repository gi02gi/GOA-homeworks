const numbers = [1, 2, 3, 4, 5];
numbers.forEach(value => {
    console.log(value)
})

const names = ["John", "Sarah", "Mike"];
names.forEach(value => {
    console.log(`hello, ${value}`)
})

res = 0
numbers.forEach(value => {
    res += value
})
console.log(res)

const words = ["javascript", "is", "awesome"];
words.forEach(value =>{
    console.log(value)
    console.log(value.length)
})

names.forEach((value, index) => {
    console.log(`${index} - ${value}`)
})

const x = numbers.map(value => {
    return value * 2
})

