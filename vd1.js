let a = {
    name: 'AAA',
    phone: 123,
    address: 'HN',
}
let arr = [];
for (let key in a) {
    let newObj = {[key]: a[key]};
    arr.push(newObj);
    console.log(a[key]);
};
// console.log(arr);
