function isPrimeNumber(number) {
    for (let i = 2; i < number; i ++) {
        return ( number % i != 0) 
    }
}
console.log(isPrimeNumber(754))