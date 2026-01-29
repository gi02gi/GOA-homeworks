// ჩვეულებრივი ფუნქციისთვის გვჭირდება function keyword, arrow function ისთვის კი =>
// ჩვეულებრივი ფუნქციისას მისი სახელი იწერება function ის შემდეგ, ხოლო arrow function ში ცვლადად ვქმნით

const multiplyByThree = a => a * 3

const isAdult = age => {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}

