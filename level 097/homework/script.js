// შეგვიძლია რაღაც მოვლენაზე შევცვალოთ რაიმე

const p = document.getElementById('p')
const btn = document.getElementById('btn')
btn.addEventListener('click', () => {
    if (p.innerHTML == 'yes') {
        p.innerHTML = 'no'
    } else {
        p.innerHTML = 'yes'
    }
})

const div = document.getElementById('div')
const btn2 = document.getElementById('btn2')
btn2.addEventListener('click', () => {
    div.innerHTML == div.style.color.random
})
