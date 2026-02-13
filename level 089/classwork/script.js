function positiveSum(arr) {
    let res = 0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){
        res += arr[i]
        }
    }
    return res
}

function solution(str){
    let result = ""
    let i = str.length - 1
    while (i >= 0){
        result += str[i]
        i--
    }
    return result
}

function findSmallestInt(arr) {
    let res = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < res){
        res = arr[i] 
        }
    }
    return res
}