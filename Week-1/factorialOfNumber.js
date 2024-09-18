//it is the product of all positive integers less than or equal to n

function factorialOfNumber(n) {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result = result * i
    }
    return result
}

console.log(factorialOfNumber(0))//1
console.log(factorialOfNumber(1))//1
console.log(factorialOfNumber(5))//120= 0*1*2*3*4*5

//Big-O= O(n)