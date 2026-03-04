const person = {
    name: "Giorgi",
    age: 15,
    height: 170
};
let property = prompt("შეიყვანე კუთვნილება (name, age ან height):");
console.log(person[property]);

for (let [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}

// დესტრუქცია არის სიიდან ან ობიექტიდან რაიმე მნიშვნელობის ცვლადში შენახვა