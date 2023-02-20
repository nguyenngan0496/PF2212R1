/**Nhập vào số hạng đầu tiên và công sai của cấp số cộng.
 * In ra 10 số hạng đầu tiên của cấp số cộng đó.
 * Ví dụ: số hạng đầu tiên = 3; công sai = 5
 * output: 3 8 13 23 28 33 38 43 48.
 *
 */

let soHang = parseInt(prompt("Nhập số hạng đầu tiên:"));
let congSai = parseInt(prompt("Nhập công sai:"));
document.write(soHang+``); //số hạng đầu tiên của cấp số cộng

for (let i=0; i<9;i++) {
    soHang+=congSai;
    document.write(soHang +'');
};

// for (i = soHang; i <= 50; i += congSai) {
//   document.write(i + congSai + '<br>');
// }
