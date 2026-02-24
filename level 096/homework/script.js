const scores = {
    math: 80,
    english: 75,
    science: 90
};
function sum(scores) {
    res = 0
    for (let i in scores){
        res += scores[i]
    }
    return res
}


const user = {
    name: "Gio",
    age: 25,
    city: "Tbilisi",
    salary: 1200
};
function result(user){
    for (let i in user){
        if (typeof user[i] === 'number'){
            console.log(i)
        }
    }
}


function arr(object){
    res = []
    for (let i in object){
        res.push(i)
    }
    return res
}


const student = {
    names: "Ana",
    age: 20,
    faculty: "Computer Science"
};
const { names, faculty } = student


const { names: studentName, age: studentAge } = student


function obj(object){
    const {width, height} = object
    return width*height
}


const product = {
    title: "Laptop",
    price: 1500
};

const { title, price, discount = 0 } = product;


const name = "Nino";
const age = 22;

const person = {
    name,
    age
}