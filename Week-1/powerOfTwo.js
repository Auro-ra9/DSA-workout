//it should not return any remainder in any step then we can call it power of two

function powerOfTwo(n) {
    if (n < 1) {
        return false
    }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false
        }
        n = n / 2
    }
    return true
}

console.log(powerOfTwo(1))//true
console.log(powerOfTwo(2))//true
console.log(powerOfTwo(5))//false
//Big-O= O(logn)
//because the n is reduced by half in the iterations


function bitWise(n) {
    if (n < 1) {
        return false
    }
    return (n & (n - 1)) === 0
}
console.log(bitWise(1))//true
console.log(bitWise(2))//true
console.log(bitWise(5))//false
//Big-O= O(1)=constant

