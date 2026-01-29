// arrow function არის ფუქნციის შექმნის გზა. function ის ნაცვლად => ით ვქმნით ფუნქციას
const getAge = age => age * 2

// function sayHello(name) {
//     return `Hi ${name}`
// }
const sayHello = name => `Hi ${name}`

function sum(a, b) {
    return a + b;
}

function sum2(a, b) {
    const result = sum(a, b); 
    return result * 2;        
}

function sayHello() {
    return "Hello";
}

const sayHi = function () {
    return "Hi";
};

const sayHey = () => {
    return "Hey";
};