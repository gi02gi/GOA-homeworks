// fetch ფუნქცია გამოიყენება სერვერზე მოთხოვნის გასაგზავნად 
// .then სრულდება მაშინ, როცა მოთხოვნა წარმატებით მივიდა სერვერთან
// .catch მუშაობს მაშინ, როცა შეცდომა მოხდება
// finally სრულდება ყოველთვის (მიუხედავად იმისა წარმატდა თუ არა მოთხოვნა)
const div = document.getElementById('div')
fetch("https://fakestoreapi.com/users")
    .then(res => res.json())
    .then(users => {
        users.forEach(val => {
            div.innerHTML += `
            <div>
                <p>${val.username}</p>
                <p>${val.email}</p>
                <p>${val.password}</p>
                <button onclick='this.parentElement.remove()'>remove</button>
            </div>
            `
        })
    })