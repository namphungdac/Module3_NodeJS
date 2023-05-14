let findDay = () => {
    const array = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"];
    let day = new Date();
    let index = day.getDay();
    console.log(array[index]);
}

findDay();
