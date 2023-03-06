function isPrimeNumber(number) {
    for (let i = 2; i < number; i ++) {
        return (number % 1 == 0 && number % i != 0)
    }
}
console.log(isPrimeNumber(18))