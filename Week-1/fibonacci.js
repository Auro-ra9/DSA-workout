//fibonacci is the sequence where the each number is the sum of the two preceeding ones
//example 

function fibonacci(n) {
    const fib = [0, 1]
    for (let i = 2;/*next element's index*/i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
        //i-1 means if i is two'th index then 2-1 is the just previous element. same like i-2
    }
    return fib
}

console.log(fibonacci(5))
console.log(fibonacci(4))
console.log(fibonacci(10))


