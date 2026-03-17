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


function sortArray(array) {
    let odds = array.filter(x => x % 2 !== 0).sort((a, b) => a - b);
    let i = 0;
    return array.map(x => {
        if (x % 2 !== 0) {
        return odds[i++];
        }
        return x;
    });
}