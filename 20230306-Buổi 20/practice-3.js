let n = parseInt();
function findPrimes(nStart, nEnd) {
    for (let i = nStart;  i <= nEnd; i++) {
        if (isPrimeNumber(i)) {
            document.write(i + " ");
        }
    }
} 
console.log(findPrimes(5, 30));