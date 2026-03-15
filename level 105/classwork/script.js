let div = document.querySelector('div')
let p = document.createElement('p')
let p2 = document.createElement('p')
let p3 = document.createElement('p')
let p4 = document.createElement('p')
let p5 = document.createElement('p')

p.textContent = 'hello'
p2.textContent = 'hello2'
p3.textContent = 'hello3'
p4.textContent = 'hello4'
p5.textContent = 'hello5'

div.appendChild(p)
div.appendChild(p2)
div.appendChild(p3)
div.appendChild(p4)
div.appendChild(p5)

div.removeChild(div.children[0])
div.removeChild(div.children[3])