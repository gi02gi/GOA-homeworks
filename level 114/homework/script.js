// local storage - არის ადგილი სადაც საიტი ბრაუზერში ინახავს ინფორმაციას
// event ობიექტი არის მოვლენის ობიექტი რომელიც იქმნება რაღაც მოვლენის შედეგად

let form = document.querySelector('form');
let users = JSON.parse(localStorage.getItem('users')) || [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let lst = form.elements;
    let gender = "";
    if (lst[3].checked) {
        gender = lst[3].value;
    } else if (lst[4].checked) {
        gender = lst[4].value;
    }
    let info = {
        name: lst.name.value,
        surname: lst.surname.value,
        age: lst.age.value,
        gender: gender
    };
    users.push(info);
    localStorage.setItem('users', JSON.stringify(users));
    form.reset();
});