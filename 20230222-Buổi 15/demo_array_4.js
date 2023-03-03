//Các thuộc tính và phương thức của mảng - join, reverse, sort
let nameList = ["Heeseung", "Ni-ki", "Sunghoon", "Jake", "Sunoo"];

//đảo ngược mảng
document.write(` Mảng trước khi reverse: ${nameList}<br>`);
nameList.reverse(); //đảo ngược thứ tự ban đầu của mảng
document.write(` Mảng sau khi reverse: ${nameList}<br>`);

//sắp xếp lại các phần tử trong mảng
document.write(` Mảng trước khi sort: ${nameList}<br>`);
nameList.sort();//sắp xếp lại thứ tự các phần tử trong mảng
document.write(` Mảng sau khi sort: ${nameList}<br>`);

//nối các phần tử trong mảng lại thành chuỗi
console.log(nameList);
console.log(nameList.join("---"));
document.write(nameList.join("..."));