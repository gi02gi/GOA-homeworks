nums = [10, 20, 30, 40, 50]
const [num1, num2, num3, num4, num5] = nums
console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)

const obj = {
    name: 'giorgi',
    weight: 75,
    height: 178
}

const {name, height: number} = obj
console.log(name)
console.log(number)

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))