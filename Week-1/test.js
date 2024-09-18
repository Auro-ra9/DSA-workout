//input array and target, 
//output true or false

let arr = [1, 3, 5, 7, 9, 9]
let target = 7

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor(start + end / 2)
    while (start <= end) {
        if (arr[middle] === target) {
            return true
        }
        if (target < arr[middle]) {
            end = middle - 1
        } else {
            start = middle + 1
        }
        return true
    }
    return false
}

console.log(binarySearch(arr, target))

// print n numbers of fibonacci series

function fibonacci(n) {
    let arr = [2, 4];
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr
}

console.log()


function recursiveFibonacci(n) {
    let arr = [2, 3]
    if (n <= 1) {
        return n
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}

console.log(recursiveFibonacci(10))



// linkedlist, insert function, and delete middle element
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0
    }
    isEmpty() {
        return this.size === 0
    }

    insert(value, index) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
        }
    }

    delete() {
        if (this.isEmpty()) {
            return 'nothing in the middle'
        }
        let removeNode;
        if (this.size === 1) {
             removeNode= this.head;
            this.head = null;
        } else {
            let middle = Math.floor(this.size / 2)
            let prev = this.head;
            for (let i = 0; i < middle - 1; i++) {
                prev = prev.next;
            }
         removeNode = prev.next
            prev = removeNode.next;
        }
        this.size--;
        return removeNode.value
    }
}


function reverseString(s) {
    if (s.length <= 1) {
        return s
    }
    return s[s.length - 1] + reverseString(s.slice(0, (s.length - 1)))
}

console.log(reverseString('ashwin'))

//print fibonacci series using recursion

function recursiveFibonacci(n, sequence = [0, 1]) {
    // base case: when the sequence is complete
    if (sequence.length > n) {
        return sequence.slice(0, n + 1);
    }

    // recursive case: add the next Fibonacci number to the sequence
    const nextFibonacci = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextFibonacci);

    return recursiveFibonacci(n, sequence);
}

console.log(recursiveFibonacci(0)); // [0]
console.log(recursiveFibonacci(6)); // [0, 1, 1, 2, 3, 5, 8]
console.log(recursiveFibonacci(1)); // [0, 1]


function recu(n, seq = [2, 4]) {
    if (seq.length > n) {
        return seq.slice(0, n + 1)
    }

    let nex = seq[seq.length - 1] + seq[seq.length - 2]
    seq.push(nex)
    return recu(n, seq)
}

console.log('recursion', recu(10))


//print fibonacci series using recursion 

function recursiveFibonacci(n, seq=[33,43]){
    //base case
    
    if(seq.length>n){
        return seq.slice(0, n+1)
    }
    //can calculate with the last element as we are not sure about the number of elements present
    let nextFibonacci= seq[seq.length-1]+ seq[seq.length-2]
    seq.push(nextFibonacci)

    return recursiveFibonacci(n,seq)


}

function recursiveBinary(arr, target, start, end){
    //base case
    if(start>end){
        return -1
    }
    //formulae
    let middle= Math.floor((start+end)/2)
    if(arr[middle]===target){
        return middle
    }
    if(target<arr[middle]){
        return  recursiveBinary(arr, target, start, middle-1)
    }else{
        return recursiveBinary(arr,target, middle+1, end)
    }
}
let array=[12,23]
console.log(recursiveBinary(array,12, 0, array.length-1))


function fac(n){
    if(n<2){
        return n
    }
    return n* fac(n-1)
}