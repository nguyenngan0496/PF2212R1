
// Bài 1
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

// Bài 2
let btnAction2 = document.getElementById("btn-action-2");
btnAction2.addEventListener ("click", () => {
    let aElement = parseInt(document.getElementById("number-a").value);
    let bElement = parseInt(document.getElementById("number-b").value);
    
    if (aElement >= bElement) {
        alert(`Số lớn nhất là ${aElement}`);
    } else {
        alert(`Số lớn nhất là ${bElement}`);
    };
});

// Bài 3
let btnAction3 = document.getElementById("btn-action-3");
btnAction3.addEventListener ("click", () => {
    let nElement = parseInt(document.getElementById("number-n").value);
    
    // if (nElement >=0) {
    //     alert(`Giá trị tuyệt đối của ${nElement} là ${nElement}`);
    // } else {
    //     alert(`Giá trị tuyệt đối của ${nElement} là ${-nElement}`);
    // };

    nElement >= 0 ? alert(`Giá trị tuyệt đối của ${nElement} là ${nElement}`):
    alert(`Giá trị tuyệt đối của ${nElement} là ${-nElement}`);
});

// Bài 4
let btnAction4 = document.getElementById("btn-action-4");
btnAction4.addEventListener ("click", () => {
    let dayElement = parseInt(document.getElementById("day").value);
    
    
    if (dayElement == 2) alert("Monday");
    else if (dayElement == 3) alert("Tuesday");
    else if (dayElement == 4) alert("Wednesday");
    else if (dayElement == 5) alert("Thursday");
    else if (dayElement == 6) alert("Friday");
    else if (dayElement == 7) alert("Saturday");
    else alert("Sunday");
});
