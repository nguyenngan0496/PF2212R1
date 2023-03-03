//Tạo 1 danh sách mới từ 2 danh sách ban đầu theo thứ tự:
array1 = ["Hello ", "take "];
array2 = ["Dear", "Sir"];
array3= [];

for (let i in array1) {
    for (let j in array2) {
        array3.push(array1[i] + array2[j]);
    }
};
document.write(array3)