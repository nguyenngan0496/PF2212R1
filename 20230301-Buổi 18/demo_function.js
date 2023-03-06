//Nhập vào 2 số a, b. Tính tổng 2 số vừa nhập.
//Nhập vào 2 số c, d. Tính tổng 2 số vừa nhập.

// let a = parseInt(prompt("Please input a:"));
// let b = parseInt(prompt("Please input b:"));

// let sumAB = a + b;

// console.log(sumAB);

function calculateSum() {
   let n1 =parseInt(prompt("Please input n1:"));
   let n2 =parseInt(prompt("Please input n2:"));

   let total = n1 + n2;

   // console.log(total);
   // sau khi tính toán xong,trả kết quả ra
   // bên ngoài thay vì in trực tiếp

   return  total;//trả kq mà hàm đã xử lý ra ctrinh
   //ko để thêm code dưới lệnh return
   //nếu ko thì sẽ unreadable
}   

let result = calculateSum();
console.log(result);
// calculateSum();
// calculateSum();
// calculateSum();