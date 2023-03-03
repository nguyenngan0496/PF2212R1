//Các thuộc tính và phương thức của mảng
let nameList = ["Anthony", "Bella", "Chris"];
document.write(`Mảng ban đầu: ${nameList} <br>`);

//độ dài của mảng
document.write(`Độ dài của mảng là: ${nameList.length}<br>`);

//thêm phần tử vào mảng
nameList.push("David");
document.write(` Mảng sau khi thêm 'David': ${nameList}<br>`);
document.write(` Độ dài của mảng là: ${nameList.length}<br>`);

nameList[nameList.length] = "Emily";
document.write(` Mảng sau khi thêm 'Emily': ${nameList}<br>`);
document.write(` Độ dài của mảng là: ${nameList.length}<br>`);

//xóa phần tử khỏi mảng
//cách 1 - shift
removedItem = nameList.shift();//xóa phần tử đầu tiên của mảng
document.write(` Phần tử đã bị xóa: ${removedItem}<br>`);
document.write(` Mảng sau khi shift(): ${nameList}<br>`);
document.write(` Độ dài của mảng là: ${nameList.length}<br>`);

//cách 2 - pop
removedItem = nameList.pop();//xóa phần tử đầu tiên của mảng
document.write(` Phần tử đã bị xóa: ${removedItem}<br>`);
document.write(` Mảng sau khi pop(): ${nameList}<br>`);
document.write(` Độ dài của mảng là: ${nameList.length}<br>`);
