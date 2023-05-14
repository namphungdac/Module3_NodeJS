function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function countDown(i) {
    while (i >= 0) {
        document.getElementById('result').innerHTML = i;
        i--;
        await sleep(1000);
    }
    return "count-finished:";
}
let clicked = false;
function clickBtn() {
    if (!clicked) {
        clicked = true;
        let value = +document.getElementById('second_input').value;
        countDown(value).then((msg) => {
            document.getElementById('result').innerHTML = msg
            clicked = false;
        });
    }
}