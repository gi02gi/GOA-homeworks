const nums = [10, 20, 30, 40, 50];
console.log(nums.map(value => {
    return `number is: ${value}`
}));

let numbers = [1, 4, 6, 7, 8, 10, 3, 12];
let result = numbers.filter(n => n % 2 === 0 && n > 5);
console.log(result);

let num = [5, 10, 15, 20];
let sum = numbers.reduce((acc, n) => {
    return acc + n;
}, 0);
let average = sum / numbers.length;
console.log(average);



let xx = [1, 2, 3, 4, 5, 6];
let y = 0;
for (let n of numbers) {
    if (n % 2 === 0) {   
    sum += n * 3;     
    }
}
console.log(sum);
