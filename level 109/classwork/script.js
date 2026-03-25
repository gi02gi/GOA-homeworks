const box = document.querySelector("#box");
let left = 0;
let tops = 0;

const myAnimation = setInterval(() => {
    if (left < 170 && tops === 0){
        left += 1
    } else if (left === 170 && tops < 170){
        tops += 1
    } else if (left > 0 && tops === 170){
        left -= 1
    } else if (left === 0 && tops > 0){
        tops -= 1
    }
    box.style.left = `${left}px`
    box.style.top = `${tops}px`
}, 10)

box.addEventListener("click", () => {
    clearInterval(myAnimation);
})