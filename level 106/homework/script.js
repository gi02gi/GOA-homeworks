let dark = document.getElementById('dark')
let add = document.getElementById('add')
let clear = document.getElementById('clear')
let div = document.getElementById('div')
let isDark = false

add.addEventListener('click', function(){
    let item = prompt('add item')
    if (item.length > 0){
    div.innerHTML += `
    <div class = "divs">
        <p>${item}</p>
        <button onclick="this.parentElement.remove()">delete</button>
    </div>`
    }
})

clear.addEventListener('click', function(){
    div.innerHTML = ''
})

dark.addEventListener('click', function(){
    if (!isDark){
        isDark = !isDark
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
        dark.textContent = 'light mode'
    } else {
        isDark = !isDark
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        dark.textContent = 'dark mode'
    }
})