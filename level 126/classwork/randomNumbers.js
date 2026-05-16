let nums = () => {
    const numbers = [];
    for (let i = 0; i < 5; i++) {
        const random = Math.floor(Math.random() * 100) + 1;
        numbers.push(random);
    }
    return numbers;
}

export { nums }