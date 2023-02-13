

let btnAction1 = document.getElementById("btn-action-1");
btnAction1.addEventListener ("click", () => {
    let chieuDai = parseInt(document.getElementById("cd").value);
    let chieuRong = parseInt(document.getElementById("cr").value);
    
    if (chieuDai == chieuRong) {
        alert("Đây là hình vuông.");
    } else {
        alert("Đây không phải hình vuông.");
    };
});

