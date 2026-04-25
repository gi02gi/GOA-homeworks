// rest ოპერატორი იღებს დარჩენილ არგუმენტებს და ქმნის მათგან სიას
// spread გამოიყებენა სიის დაშლისთვის

const sum = (...nums) => {
    nums.reduce((acc, val) => {
        return acc + val
    })
}

const obj = {
    name: 'giorgi',
    age: 17,
    height: 180
}

const arr = [1, 2, 3, 4];
const newArr = [...arr];

const obj = {
    name: "Giorgi",
    age: 15
};

const newObj = {...obj};

