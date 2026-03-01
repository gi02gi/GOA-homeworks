const obj1 = {
    brand: 'samsung',
    model: 'idk',
    aboutPhone() {
        console.log(`this is ${this.model} ${this.brand}`)
    }
}

const obj2 = {
    brand: 'redmi',
    model: 'idk',
    aboutPhone() {
        console.log(`this is ${this.model} ${this.brand}`)
    }
}


function createPerson(hobby1, hobby2, hobby3) {
    return {
        hobby1,
        hobby2,
        hobby3,
        myHobbies() {
        return `ჩემი ჰობებია ${this.hobby1}, ${this.hobby2} და ${this.hobby3}.`
        }
    }
}



function createUser(info1, info2, info3) {
    return {
        info1,
        info2,
        info3,
        showInfo() {
        return `მომხმარებლის ინფორმაციაა: ${this.info1}, ${this.info2} და ${this.info3}.`
        }
    }
}
const first = prompt("შეიყვანე პირველი ინფორმაცია შენზე:")
const second = prompt("შეიყვანე მეორე ინფორმაცია შენზე:")
const third = prompt("შეიყვანე მესამე ინფორმაცია შენზე:")
const user = createUser(first, second, third)