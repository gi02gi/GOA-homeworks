function solve(s) {
    if (s.length % 2 != 0){
        return -1
    }
    let open = 0
    let changes = 0
    
    for (let i of s){
        if (i === '('){
        open++
        }else{
        if (open > 0){
            open--
        } else{
            changes++
            open=1
        }
        }
    }
    return changes + open / 2
}