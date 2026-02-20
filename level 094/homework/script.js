let cars = {
    brand: "mercedes",
    model: 'idk'
}
cars.year = 2024

const calculator = {
    func: function (a, b){
        return a + b
    }
}

let user = {
    name: 'giorgi',
    age: 17
}
delete user.age
user.weigth = 75

let book = {
    title: 'harry potter'
}
book.title = 'war and peace'

const person = {
    name: "Giorgi",
    age: 17,
    sport: "Volleyball"
}
for (let key in person) {
    console.log(key)
}