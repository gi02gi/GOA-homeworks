// map - მონაცემთა ტიპი რომელიც არის ობიექტის სახით და მასში სიის სახით არის key, value წყვილები, ობიექტისგან განსხვავებით გასაღები ნებისმიერი მონაცემი შეიძლება იყოს
// set - სია რომელშიც ერთნაირი ელემენტები არ იქნება

const student = new Map([ ['name', 'giorgi'] ])
student.set('point', 8)
student.set('subject', 'programming')
console.log(student)

const mySet = new Set([1, 20, 20, 7, 30, 5, 30])
console.log(mySet)

const element = 3;
if(mySet.has(element)) {
    console.log("theres not that element");
} else {
    console.log("theres that element");
}

const names = ["Gio", "Nika", "Gio", "Luka", "Nika", "Ana"];
const uniqueNames = new Set(names);
const nameLengths = new Map();
uniqueNames.forEach(name => {
    nameLengths.set(name, name.length);
});

console.log(nameLengths);