const arrayStudent = [
    {
        name: "Ha",
        gender: 'female',
        poin: 8
    },
    {
        name: "Huy",
        gender: 'male',
        poin: 9
    },
    {
        name: "Hung",
        gender: 'male',
        poin: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        poin: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        poin: 10
    },
    {
        name: "Long",
        gender: 'male',
        poin: 5
    },
    {
        name: "Luan",
        gender: 'male',
        poin: 10
    },
    {
        name: "Linh",
        gender: 'female',
        poin: 8
    }

];
let arrayMaleStudent = arrayStudent.filter(value => value.gender === 'male');
let arrayFemaleStudent = arrayStudent.filter(value => value.gender === 'female');
let sumScoreOfMaleStudent = arrayMaleStudent.reduce((sum, value) => sum + value.poin, 0);
let sumScoreOfFemaleStudent = arrayFemaleStudent.reduce((sum, value) => sum + value.poin, 0);
console.log(`Điểm trung bình của các học sinh nam: ${sumScoreOfMaleStudent / arrayMaleStudent.length}`);
console.log(`Điểm trung bình của các học sinh nữ: ${sumScoreOfFemaleStudent / arrayFemaleStudent.length}`);