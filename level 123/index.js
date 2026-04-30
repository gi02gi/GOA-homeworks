function twistedSum(n) {
    let res = 0
    for (let i = 1; i <= n; i++){
        res += i.toString().split('').reduce((num1, num2) => {
        return Number(num1) + Number(num2)
        }, 0)
    }
    return res
}

function removeParentheses(s){
    let count = 0
    let res = ''
    for (i of s){
        if (i === '('){
        count ++
        } else if (i === ')'){
        count --
        }
        if(count === 0 && i != ')'){
        res += i
        }
    }
    return res
}


class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        let x = dirtyFileName.indexOf('_') + 1
        let y = dirtyFileName.lastIndexOf('.')
        return dirtyFileName.slice(x,y)
    }
}
