count = 0
x = setInterval(() => {
    if (count < 10){
        console.log('random')
        count += 1
    } else {
        clearInterval(x)
    }
}, 1000)