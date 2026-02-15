var number=function(array){
    return array.map((value, index) => `${index + 1}: ${value}`);
}

function digits(n) {
    let x = 1
    while (n >= 10){
        n = Math.floor(n / 10)
        x++
    }
    return x
}


function adjacentElementsProduct(array) {
  let res = array [0] * array[1]
    for (let i = 0; i < array.length; i++){
    if (array[i] * array[i + 1] > res){
      res = array[i] * array[i + 1]
    }
    }
    return res
}

