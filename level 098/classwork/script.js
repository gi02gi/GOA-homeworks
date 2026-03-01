const btn = document.getElementById("btn")
const users = []

const personFactory = (firstname, lastname) => {
    return {
        firstname,
        lastname
    }
}

btn.addEventListener("click", () => {
    const firstname = prompt("Enter your firstname:");
    const lastname = prompt("Enter your lastname:");

    users.push(personFactory(firstname, lastname))
    console.log(users)
})


const car1 = {
    brand: "BMW",
    model: "X5",
    aboutCar() {
        console.log(`this is ${this.brand} ${this.model}`);
    }
};

const car2 = {
    brand: "Mercedes",
    model: "C-Class",
    aboutCar() {
        console.log(`this is ${this.brand} ${this.model}`);
    }
};



const func = (favouriteFilm, favouriteSong, favouriteAnimation) => {
    return {
        favouriteFilm,
        favouriteSong,
        favouriteAnimation
    }
}

