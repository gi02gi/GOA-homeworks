let inputs = document.querySelectorAll('input')
let btn = document.querySelector('button')
btn.addEventListener('click', (e) =>{
    e.preventDefault()
    console.log(inputs[0].value)
    console.log(inputs[1].value)
    console.log(inputs[2].value)
})

