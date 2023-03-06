function isLeapYear(a) {
    if (a % 4 == 0 && a % 100 != 0) {
        console.log(`${a} là năm nhuận`)
    } else (
        console.log(`${a} không là năm nhuận`)
    )

};

isLeapYear(2100)