// setInterval(() => {
//     console.log("Hello World")
// }, 2000)

let seconds = 0;

const timeId = setInterval(() => {
    console.log(++seconds)
    if(seconds > 15) {
        clearInterval(timeId);
    }
}, 1000)