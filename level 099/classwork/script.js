function factorial(n)
{
    if (n < 0 || n > 12) {
        throw new Error();
    }
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}


function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    const sum =
        age1 ** 2 +
        age2 ** 2 +
        age3 ** 2 +
        age4 ** 2 +
        age5 ** 2 +
        age6 ** 2 +
        age7 ** 2 +
        age8 ** 2;
    return Math.floor(sum ** 0.5 / 2);
}


function countRedBeads(n) {
    if (n < 2){
        return 0
    }
    return n * 2 - 2
}


function findLongest(array){
    let longest = array[0];
    for (let i = 0; i < array.length; i++) {
        if (String(array[i]).length > String(longest).length) {
        longest = array[i];
        }
    }
    return longest;
}