const btn = document.querySelector('button')
const div = document.querySelector('div')
const form = document.querySelector('form')
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
            <button onclick='this.parentElement.remove()'>delete</button>
        </div>`
    })
}