
let n = parseInt(prompt("Please input n:"));
let i = 1;
while (i<=n) {
    if (i%3 == 0 && i%7 == 0) {
        document.write("javascript" + "<br>");
    }
    else if (i%3 == 0) {
        document.write("java" + "<br>");
    }
    else if (i%7 == 0) {
        document.write("script" + "<br>");
    };
    
    i++;
}