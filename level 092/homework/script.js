numbers = [10, 15, 20, 25, 40, 55]
console.log(numbers.every(value => {
    return value % 2 === 0
}))

console.log(numbers.map(value => {
    return value ** 2
}))

list = [true, false, 18, 'gio', 'lizi', 21]
console.log(list.filter(value => {
    return typeof value === "string"
}))

