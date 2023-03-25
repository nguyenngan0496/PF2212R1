/*
Mô tả một lớp PhanSo, lớp này gồm có 2 thuộc tính: tuSo, mauSo
Hai thuộc tính này được khởi tạo trong constructor */

class PhanSo {
  constructor(tuSo, mauSo) {
    this.tuSo = tuSo;
    this.mauSo = mauSo;
  }

  add(other) {
    //other là một đối tượng PhanSo
    //phanso 1: this
    //phanso 2: other
    let tuSoCong = this.tuSo * other.mauSo + other.tuSo * this.mauSo;
    let mauSoCong = this.mauSo * other.mauSo;
    console.log(` Kết quả của phép cộng: ${tuSoCong} / ${mauSoCong}`);
  }

  subtract(other) {
    let tuSoTru = this.tuSo * other.mauSo - other.tuSo * this.mauSo;
    let mauSoTru = this.mauSo * other.mauSo;
    console.log(`Kết quả: ${tuSoTru} / ${mauSoTru}`);
  }

  multiply(other) {
    let tuSoTru = this.tuSo * other.tuSo;
    let mauSoTru = this.mauSo * other.mauSo;
    console.log(`Kết quả: ${tuSoTru} / ${mauSoTru}`);
  }

  divide(other) {
    let tuSoTru = this.tuSo * other.mauSo;
    let mauSoTru = this.mauSo * other.tuSo;
    console.log(`Kết quả: ${tuSoTru} / ${mauSoTru}`);
  }
}
// tạo ra objest từ class PhanSo đã mô tả
let ps1 = new PhanSo(3, 5);
let ps2 = new PhanSo(4, 5);

ps1.add(ps2);
ps1.subtract(ps2);
ps1.multiply(ps2);
ps1.divide(ps2);
