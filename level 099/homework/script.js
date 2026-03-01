function getMiddle(s) {
    const mid = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? s[mid - 1] + s[mid] : s[mid];
}


function flyBy(lamps, drone){
    let result = '';
    for (let i = 0; i < lamps.length; i++) {
        if (i < drone.length) {
        result += 'o';
        } else {
        result += 'x'; 
        }
    }
    return result;
}


function rowSumOddNumbers(n) {
	return n ** 3
}