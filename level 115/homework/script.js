const btn = document.querySelector('button')
const div = document.querySelector('div')
const form = document.querySelector('form')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const filter = document.getElementById('filter')
const min = document.getElementById('min')
const max = document.getElementById('max')
const lst = []

btn.addEventListener('click', (e) => {
    e.preventDefault()
    let name = form.item.value
    let quantity = form.quantity.value
    let price = form.price.value

    const data = {
        name,
        quantity,
        price
    }

    lst.push(data)
    render()
    form.reset()
})

const minus = (index) => {
    lst[index].quantity--
    render()
    
}

const plus = (index) => {
    lst[index].quantity++
    render()
    
}

const render = () => {
    div.innerHTML = ''
    lst.forEach((val, index) => {
        div.innerHTML += `
        <div id='div1'>
            <p>${val.name}</p>   
            <button onclick='minus(${index})'>-</button>
            <p>${val.quantity}</p>
            <button onclick='plus(${index})'>+</button>   
            <p>${val.price * val.quantity}</p>   
            <button onclick='removeItem(${index})'>delete</button>
        </div>`
    })
}

const removeItem = (index) => {
    lst.splice(index, 1)
    render()
}

btn1.addEventListener('click', () => {
    lst.sort((a, b) => (b.price * b.quantity) - (a.price * a.quantity))
    render()
})

btn2.addEventListener('click', () => {
    lst.sort((a, b) => b.quantity - a.quantity)
    render()
})

filter.addEventListener('click', () => {
    const minVal = Number(min.value)
    const maxVal = Number(max.value)

    const filtered = lst.filter(item => {
        const total = item.price * item.quantity
        return total >= minVal && total <= maxVal
    })

    div.innerHTML = ''
    filtered.forEach((val, index) => {
        div.innerHTML += `
        <div id='div1'>
            <p>${val.name}</p>   
            <button onclick='minus(${index})'>-</button>
            <p>${val.quantity}</p>
            <button onclick='plus(${index})'>+</button>   
            <p>${val.price * val.quantity}</p>   
            <button onclick='removeItem(${index})'>delete</button>
        </div>`
    })
})