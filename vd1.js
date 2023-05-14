function printNumber(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number < 0) {
                reject();
            } else {
                console.log(number);
                resolve();
            }
        }, 1000)
    })
}
printNumber(1)
    .then(()=> printNumber(2))
    .then(() => printNumber(-1))
    .then(() => printNumber(3))
    .catch(() => {
        console.log('number < 0')
    })