class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        return this.stack.pop();
    }

    isEmpty() {
        return this.stack.length === 0;
    }
}

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function isPalindrome(input) {
    const stack = new Stack();
    const queue = new Queue();

    for (let char of input) {
        stack.push(char);
        queue.enqueue(char);
    }

    while (!stack.isEmpty() && !queue.isEmpty()) {
        if (stack.pop() !== queue.dequeue()) {
            return false;
        }
    }

    return true;
}


const word = "madam";
if (isPalindrome(word)) {
    console.log(`${word} is a palindrome.`);
} else {
    console.log(`${word} is not a palindrome.`);
}
