/**
 * Nhập vào số n. In ra bảng cửu chương của n.
 */

let n = parseInt(prompt("Nhập số n:"));

for (i=1;i<=10;i++) {
    document.write(` ${n} x ${i} = ${n*i} <br>`);
};