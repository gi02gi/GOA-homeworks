function dup(s) {
    let res = []
    let str = ''
    s.forEach(element => {
        for(let i = 0; i < element.length; i++){
            if(element[i] != element[i+1]){
                str += element[i]
            }
        }
        res.push(str)
    });
    return res
};


function sumConsecutives(s) {
    res = []
    count = 0
    for (let i = 0; i < s.length; i++){
        if(s[i] === s[i+1]){
        count++
        } else if(s[i] != s[i+1] && count > 0){
        count++
        res.push(s[i] * count)
        count = 0
        } else {
        res.push(s[i])
        }
    }
    return res
}


function spinWords(string){
    let x = string.split(' ')
    let res = []
    let str = ''
    for (let i of x){
        if (i.length <= 4){
        res.push(i)
        }else {
        for (let y = 1; y < i.length + 1; y++){
            str += i.at(-y)
        }
        res.push(str)
        str = ''
        }
    }
    return res.join(' ')
}