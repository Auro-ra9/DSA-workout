//factorial of n is the product of all positive integers less than or equal to n

function recursiveFactorial(n) {
    if (n < 2) {
        return n
    }

    return n * recursiveFactorial(n - 1)
}

console.log(recursiveFactorial(5))//output 120
//Big-O= O(n)


