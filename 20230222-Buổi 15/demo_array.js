//khai báo mảng
let nameList = ["Long", "Hien", "Phuc"];//danh sách tên
let numberList = [1, 2, 3, 4, 5];//danh sách số tự nhiên
let info = ["Long", "Longlamduc@gmail.com", true, 5.0];//thông tin
let weekdays = new Array("Sunday", "Monday", "Tuesday");

console.log(weekdays);
document.write(weekdays + "<br>");

//Kiểm tra kiểu dữ liệu của mảng
document.write(typeof(weekdays));

//truy vấn 1 phần tử trongm mảng
let numbers = [1, 2, 3, 4, 5];

//in ra phần tử số 4
document.write(`Mảng ban đầu: ${numbers}<br>`)
document.write(`Phần tử tại vị trí 3 trong mảng có giá trị là: ${numbers[3]}<br>`);

//thay đổi giá trị tại index 3
numbers[3] = 10;
document.write(`Phần tử tại vị trí 3 trong mảng có giá trị là: ${numbers[3]}`);