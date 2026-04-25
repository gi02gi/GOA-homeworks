const d = new Date()

console.log(d.toDateString())
console.log(d.toISOString())
console.log(d.toString())

d.setHours(10);
d.setMinutes(30);
d.setSeconds(45);

console.log(d.getFullYear());
console.log(d.getMonth()); 
console.log(d.getDate());
console.log(d.getDay()); 
console.log(d.getHours());

let now = new Date();
console.log(now);

let ms = Date.now()
console.log(ms)

