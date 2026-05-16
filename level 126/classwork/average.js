let calculatorAverage = (list) => {
    let x = list.reduce((acc, val) => {
        return acc + val
    })
    return x / list.length
}

export default calculatorAverage 