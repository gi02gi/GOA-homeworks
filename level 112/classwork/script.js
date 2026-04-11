function countTargets(n,sequence) {
    count = 0
    for (let i = 0; i < sequence.length; i++){
        if(sequence[i] === sequence[i - n]){
        count += 1
        }
    }
    return count
}


