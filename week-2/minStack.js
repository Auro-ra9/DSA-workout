class MinStack {
    constructor() {
        this.stack = new Array();
        this.minStack = new Array();
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    push(value) {
        this.stack.push(value);

        // Push the current value to the minStack if it's empty or less than the top of minStack
        if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(value);
        }
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }

        let removedElement = this.stack.pop();

        // If the popped element is the same as the top of the minStack, pop it from minStack as well
        if (removedElement === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }

        return removedElement;
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }

        return this.stack[this.stack.length - 1];
    }

    getMin() {
        if (this.minStack.length === 0) {
            return "Stack is empty";
        }

        return this.minStack[this.minStack.length - 1];
    }

    display() {
        console.log(this.stack);
    }
}

// Example usage:

const minStack = new MinStack();

minStack.push(5);
minStack.push(2);
minStack.push(10);
minStack.push(1);

console.log("Stack: ");
minStack.display();

console.log("Minimum Element: " , minStack.getMin()); // Output: 1

minStack.pop();
console.log("After popping: ");
minStack.display();
console.log("Now the last element is gone so, if the last element was also the top of the minstack then it will also be removed from there and another lowest one from the stack will become the lowest: ");

console.log("Minimum Element: ", minStack.getMin()); // Output: 2



