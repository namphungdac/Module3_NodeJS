const onMyBirthday = (isKayoSick, callback) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isKayoSick) resolve(2);
            else reject(new Error('I am sad'));
            callback();
        }, 2000);
    });
};

function Party(isKayoSick) {
    onMyBirthday(isKayoSick, Print)
        .then((result) => {
            console.log(`I have ${result} cake`);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => console.log('Party'));
}
function Print() {
    console.log('=============');
}
Party(false, Print);
Party(true, Print);