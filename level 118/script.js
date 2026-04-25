const form = document.querySelector('form')
const btn = document.querySelector('button')
const div = document.getElementById('right')
const clear = document.getElementById('clear')
const dolar = document.getElementById('dolar')
const year = document.getElementById('year')
const percent = document.getElementById('percent')

clear.addEventListener('click', ()=>{
    form.reset()
})

btn.addEventListener('click', (e) => {
    e.preventDefault()

    if (form.amount.value.length == 0) {
        dolar.style.backgroundColor = 'red'
    } else {
        dolar.style.backgroundColor = '#e3f3fd'
    }

    if (form.years.value.length == 0) {
        year.style.backgroundColor = 'red'
    } else {
        year.style.backgroundColor = '#e3f3fd'
    }
    
    if (form.rate.value.length == 0) {
        percent.style.backgroundColor = 'red'
    } else {
        percent.style.backgroundColor = '#e3f3fd'
    }

    if (
        form.amount.value.length > 0 &&
        form.years.value.length > 0 &&
        form.rate.value.length > 0
    ){
        const amount = Number(form.amount.value)
        const rate = Number(form.rate.value) / 100
        const years = Number(form.years.value)

        const x = amount * (1 + rate * years)
        const y = x / years / 12

        div.innerHTML = `
        <h2>Your results</h2>
        <p id="p3">Your results are shown below based on the information you provided.</p>
        <div id='div2'>
            <p>Your monthly repayments</p>
            <p id='p4'>$${y.toFixed(2)}</p> 
            <hr>
            <p>Total you will repay over term</p>
            <p>$${x.toFixed(2)}</p>
        </div>
        `
    }
})