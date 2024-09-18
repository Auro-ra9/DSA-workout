//it is a natural number greater than 1 and not a product of 2 smaller natural numbers

function primeNumber(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
console.log('normal prime:',primeNumber(4))//false
//Big-O= O(n)

//instead of checking until n we can check until the square root of n as well

function primeNumberWithSquareRoot(n) {
    if (n < 2) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}
function recursivePrime(n, i){
    if(n<2){
        return false
    }
    if(i*i>n){
        return true
    }
    if(n%2===0){
        return false
    }
    return recursivePrime(n, i+1)
}

console.log('recursive:',recursivePrime(4,2))
console.log('square:',primeNumberWithSquareRoot(4))//false

//Big-O= O(sqrt(n))