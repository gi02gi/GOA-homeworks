function firstNonRepeatingLetter(s) {
    const lower = s.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        let char = lower[i];
        if (lower.indexOf(char) === lower.lastIndexOf(char)) {
        return s[i];
        }
    }
    return "";
}