class Node {
    constructor(value) {
        this.value = value; // Initialize the value of the node
        this.next = null;   // Initialize the next node to null
    }
}

class LinkedList {
    constructor() {
        this.head = null;   // Initialize the head of the list to null
        this.size = 0;      // Initialize the size of the list to 0
    }

    isEmpty() {
        return this.size === 0; // Return true if size is 0, otherwise false
    }

    getSize() {
        return this.size;       // Return the size of the list
    }

    print() {
        let cur = this.head;    // Start from the head node
        let values = '';        // Initialize a string to store node values
        while (cur) {
            values += `${cur.value} `; // Append the current node's value to the string
            cur = cur.next;            // Move to the next node
        }
        console.log(values.trim());    // Print the string with list values
    }

    prepend(value) {
        const node = new Node(value);  // Create a new node with the given value
        if (this.isEmpty()) {
            this.head = node;          // Set the head to the new node if the list is empty
        } else {
            node.next = this.head;     // Set the new node's next to the current head
            this.head = node;          // Set the head to the new node
        }
        this.size++;                   // Increase the size by 1
    }
    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
        }
        this.size++;
    }

    removeFromFront() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }
    removeFromLast() {
        if (this.isEmpty()) {
            return 'LinkedList is empty'
        }
        if (this.size === 1) {
            this.head = null;
            
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next
            }
            prev.next = null;
            
        }
        this.size--;
    }
    reverse() {
        let prev = null;
        let cur = this.head;
        while (cur) {
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        this.head = prev
    }
}

class Stack {
    constructor() {
        this.list = new LinkedList();
    }
    push(value) {
        this.list.append(value);
    }
    pop() {
        return this.list.removeFromLast();
    }//peek will always returns a value present on top of the stack, that will always be the head node
    peek() {
        return this.list.head.value;
    }
    getSize() {
        return this.list.print();
    }
    isEmpty() {
        return this.list.isEmpty();
    }
    print() {
        return this.list.print();
    }
}


const stack = new Stack();

stack.push(20);
stack.push(10);
stack.push(50);
stack.push(40);
stack.print(); // Output: 40 50 10 20

stack.pop(); // Output: 40
stack.print(); // Output: 50 10 20


