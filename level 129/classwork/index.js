function changer(str) { 
    let res = ''
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const vowels = 'aeiou'
    for (let i of str.toLowerCase()){
        let index = alphabet.indexOf(i)
        if (index !== -1){
        let letter = ''
        if(i ==='z'){
            letter = 'a'
        } else {
            letter = alphabet[index + 1]
        }
        if (vowels.includes(letter)){
            res += letter.toUpperCase()
        } else {
            res += letter
        }
        }
        else {
            res += i
        }
    }
    return res
}

function solve(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let max = 0
    let sum = 0
    for (let i of s){
        if ('aeiou'.includes(i)){
        if (sum > max){
            max = sum
        } 
        sum = 0
        } else {
            sum += alphabet.indexOf(i) + 1
        }
    }
    if (sum > max){
        max = sum
    }
    return max
};