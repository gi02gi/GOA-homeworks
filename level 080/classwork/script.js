// hoisting არის ჯავასკრიპტის მექანიზმი რისი საშუალებითაც შეგვიძლია ფუნქცია გამოვიძახოთ მანამ სანამ მას შევქმნით

let name = "giorgi"
switch (name){
    case "davit":
        console.log("გამარჯობა დავით!");
        break;

    case "nikolozi":
        console.log("გამარჯობა ნიკოლოზ!");
        break;

    case "vazha":
        console.log("გამარჯობა ვაჟა!");
        break;

    default:
        console.log("გამარჯობა!");
}

function greet(name){
    return "hello" + name
}

function multiplication(a,b) {
    return a * b
}

function substriction(a,b){
    return a - b
}

function ageChecker(age){
    if (age > 18){
        return "adult"
    } else{
        return "you are teenager"
    }
}





