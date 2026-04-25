const promise1 = new Promise(resolve => {
    setTimeout(() => {
        resolve('resolved')
    }, 2000);
}).then(res => console.log(promise1))

const promise2 = new Promise((resolve, reject) => {
    let x = prompt('enter number')
    setTimeout(() => {
        if (x % 2 === 0){
            resolve("resolved")
            console.log(promise2)
        } else {
            reject('rejected')
            console.log(promise2)
        }
    }, 3000);
})