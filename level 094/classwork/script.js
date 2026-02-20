const object0 = {
    name: 'giorgi',
    age: 17,
    city: 'rustavi'
}
console.log(`My name is ${object0.name} and I live in ${object0.city}`)

object0.height = 178
object0.age = 18

for (let i in object0) {
    console.log(i + ": " + object0[i]);
}

const object1 = {
    info: function () {
        console.log("i study in group 77")
    }
}

const me = {
    name: "Giorgi",
    surname: "Chokheli",
    age: 15,
    sport: "Volleyball",
    city: "Rustavi"
};

for (let i in me) {
    console.log(i + ": " + me[i]);
}

for(let i in me) {
    delete me[i]
}
console.log(me)

const surname = "Chokheli"
for (let i in surname) {
    // i ინახავს სტრინგის ინდექსს (0, 1, 2, ...)
    // for in_ით სტრინგზე გადავლა გვაძლევს თითოეული სიმბოლოს ინდექსს
    console.log(i + ": " + surname[i]);
}