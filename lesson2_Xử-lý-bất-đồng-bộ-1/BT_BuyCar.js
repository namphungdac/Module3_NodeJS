const checkEnoughMoney = (car, money) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can buy " + car);
            } else {
                reject("Do not enough money to buy " + car);
            }
        }, 100);
    }))
}

function buyCar(car, money) {
    checkEnoughMoney(car, money)
        .then(value => console.log(value))
        .catch(err => console.log(err))
}

buyCar('Porcher', 20000);
buyCar('Mer', 5000);