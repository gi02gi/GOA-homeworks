function isAlt(word) {
    let vowels = 'aeiou'
    for (let i = 0; i < word.length - 1; i++){
        if(vowels.includes(word[i]) === vowels.includes(word[i + 1])){
            return false
        }
    }
    return true
}


function hamming(a, b) {
	let count = 0
    for (let i = 0; i < a.length; i++){
        if(a[i] != b[i]){
        count++
        }
    }
    return count
}


function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays === null || arrayOfArrays.length === 0) {
        return 0
    }
    let lengths = []
    for (let i = 0; i < arrayOfArrays.length; i++) {
        if (arrayOfArrays[i] === null) {
            return 0
        }
        if (arrayOfArrays[i].length === 0) {
            return 0
        }
        lengths.push(arrayOfArrays[i].length)
    }
    lengths.sort((a, b) => a - b)
    for (let i = 0; i < lengths.length - 1; i++) {
        if (lengths[i] + 1 != lengths[i + 1]) {
            return lengths[i] + 1
        }
    }
    return 0
}