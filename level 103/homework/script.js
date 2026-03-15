var uniqueInOrder=function(iterable){
    let result = [];
    let last;
    for (let item of iterable) {
        if (item !== last) {
        result.push(item);
        last = item;
        }
    }
    return result;
}