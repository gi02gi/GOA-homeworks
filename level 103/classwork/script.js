function highestRank(arr){
    let maxCount = 0;
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) count++;
        }
        if (count > maxCount || (count === maxCount && arr[i] > result)) {
        maxCount = count;
        result = arr[i];
        }
    }
    return result;
}

function getOrder(input) {
    const menu = ["burger","fries","chicken","pizza","sandwich","onionrings","milkshake","coke"];
    let result = [];
    for (let item of menu) {
        let count = input.split(item).length - 1
        for (let i = 0; i < count; i++) {
        result.push(item[0].toUpperCase() + item.slice(1))
        }
    }
    return result.join(" ")
}