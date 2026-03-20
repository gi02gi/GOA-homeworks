function persistence(num) {
    let count = 0
    while (num >=10){
        let x = 1
        for (let i of String(num)){
        x *= i
        }
        num = x
        count++
    }
    return count
}


function tribonacci(signature,n){
    if (n === 0){
        return []
    }
    let result = signature.slice(0,n)
    for(let i = 3; i < n; i++){
        result.push(result[i-1] + result[i-2] + result[i-3])
    }
    return result
}


function narcissistic(value) {
    let digits = value.toString().split('')
    let power = digits.length
    let sum = 0
    for (let x of digits){
        let val = 1
        for (let i = 0; i < power; i++){
        val *= Number(x)
        }
    sum += val
    }
    return sum === value
}
