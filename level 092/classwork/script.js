const callback = (value, index, arr) => {
    return value * 2
}

function Map(Arr, callback){
    let res = []
    for (let i = 0; i < Arr.length; i++){
        res.push(callback(Arr[i], i, Arr))
    }
    return res
}



function Even(number) {
    return number % 2 === 0;
}
function Filter(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++){
        if (Even(arr[i])) {
            res.push(arr[i])
        }
    }
    return res
} 

const numbers = [21, 25, 30, 40];
console.log(numbers.every(num => num > 20))

const names = ['giorgi', 'soso', 'salome', 'nia']
console.log(names.filter(value => value[0] === 's'))

const names2 = ['giorgi', 'niako', 'lizi', 'anano']
console.log(names2.every(name => name.length > 6))


const myself = {
    firstName: "გიორგი",
    lastName: "ჩოხელი",
    age: 16,
    height: 178,
    weight: 70
};

const sentence = `ჩემს სახელი არის ${myself.firstName} ${myself.lastName}, მე ვარ ${myself.age} წლის, სიმაღლე: ${myself.height} სმ და წონა: ${myself.weight} კგ.`;
