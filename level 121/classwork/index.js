let mySet = new Set();
let arr = [1, 2, 3, 4, 5, 3, 2, 6, 7, 1];

for (let i = 0; i < arr.length; i++) {
    mySet.add(arr[i]);
}

while (true) {
    num = Number(prompt("enter number: "));

    if (mySet.has(num)) {
        mySet.delete(num);
        break;
    }
}

console.log(mySet);
console.log(mySet.size);

let myMap = new Map();
myMap.set("name", "Giorgi");
myMap.set("age", 15);
myMap.delete("age");
let value = myMap.get("name");
console.log(value);