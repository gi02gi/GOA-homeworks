// DOM ნიშნავს Document Object Model-ს
// ეს არის ვებგვერდის სტრუქტურის წარმოდგენა ობიექტების სახით
// ბრაუზერი HTML-ს კითხულობს და აქცევს ხის სტრუქტურად 
// სადაც თითოეული თეგი არის ელემენტი 
// document — ეს არის მთელი HTML გვერდი
// მასზე შეგვიძლია ელემენტების მოძებნა, შეცვლა და მართვა

let x = document.getElementById('button')
let y = document.getElementById('div')
x.addEventListener('click', () => {
    y.style.backgroundColor == 'red' ? y.style.backgroundColor = 'blue' : y.style.backgroundColor = 'red'
})

let but = document.getElementById('plus')
let div = document.getElementById('div2')
size = 50
but.addEventListener('click', () => {
    div.style.width += size + 'px'
    div.style.height += size + 'px'
})


let btn = document.getElementById('btn')
let p = document.getElementById('p')
btn.addEventListener('click', () => {
    p.innerHTML += 'choxeli'
})

const p2 = document.getElementById('p2')
const mult = document.getElementById('mult')
mult.addEventListener('click', () => {
    p2.innerHTML = p2.innerHTML * 2
})

