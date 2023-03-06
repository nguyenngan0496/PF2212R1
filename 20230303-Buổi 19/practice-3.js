// Viết hàm solveEquation() để giải phương trình 
//bậc nhất ax + b = 0 với a và b là 2 tham số đầu vào.

function solveEquation(a, b) {
    if (a != 0) {
        console.log(` Phương trình có nghiệm duy nhất x = -${b}/${a}`)
    } else { //a=0
        if (b == 0) {
            console.log(` Phương trình có vô số nghiệm`);
        } else {
            console.log(` Phương trình vô nghiệm`)
        }
    }
}

solveEquation(2, -4);
solveEquation(0, 0);
solveEquation(0, -4);