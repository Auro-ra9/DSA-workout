//function should call itselt and provide fibonacci

// function recursiveFibonacci(n) {
//     //base case or condition to end the recursion
//     if (n < 2) {
//         return n
//     }
//     return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
// }

//Big-O= O(2^n)


function recursiveFibonacci(n,seq){
    if(seq.length>n){
        return seq.slice(0,n)
    }
    let nextFIbonacci= seq[seq.length-1]+seq[seq.length-2]
    seq.push(nextFIbonacci)
    return recursiveFibonacci(n,seq)
}
let seq=[12,14]
console.log(recursiveFibonacci(4,seq))//0
console.log(recursiveFibonacci(6,seq))//8
console.log(recursiveFibonacci(3,seq))//1




