const array = [2, 5, 6, 456, 2, 76, 1000, 123, 888];
let max = array[0];
for (const i in array) {
    if (array[i] > max) max = array[i];
}
console.log(max);