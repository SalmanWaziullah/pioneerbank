// check prime number
function prime(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return 'not a prime number'
        }
    }
    return "Its a prime number"

}
var result = prime(9);
console.log(result);