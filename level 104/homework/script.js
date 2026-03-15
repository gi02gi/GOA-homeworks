let list = document.getElementById("list")
let taskBtn = document.getElementById("taskBtn")
let modeBtn = document.getElementById("modeBtn")
let dark = false

taskBtn.addEventListener("click", function(){
let task = prompt("Enter task")
list.innerHTML += `
<div>
<p>${task}</p>
<button onclick="this.parentElement.remove()">Delete</button>
</div>`
})

modeBtn.addEventListener("click", () => {
if(dark === false){
document.body.style.background = "black"
document.body.style.color = "white"
dark = true
}else{
document.body.style.background = "white"
document.body.style.color = "black"
dark = false
}
})