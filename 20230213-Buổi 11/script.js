alert ("Text linking script");

let btnAction = document.getElementById("btn");
btnAction.addEventListener ("click", () => {
    let chieuDai = document.getElementById("cd");
    let chieuRong = document.getElementById("cr");
    if (parseFloat(chieuDai.value) == parseFloat(chieuRong.value)) {
        console.log("Đây là hình vuông.");
    } else {
        console.log("Đây không phải hình vuông.");
    };
});

