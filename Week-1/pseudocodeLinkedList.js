/*Class Node:
    Function constructor(value):
        Set the value of the node
        Set the next node to null

Class LinkedList:
    Function constructor():
        Initialize the head of the list to null
        Initialize the size of the list to 0

    Function isEmpty():
        Return true if size is 0, otherwise false

    Function getSize():
        Return the size of the list

    Function print():
        If the list is empty:
            Print "Linked list is empty"
        Else:
            Set current node to the head
            Initialize an empty string to store list values
            While the current node is not null:
                Add the current node's value to the string
                Move to the next node
            Print the string with list values

    Function prepend(value):
        Create a new node with the given value
        If the list is empty:
            Set the head to the new node
        Else:
            Set the new node's next to the current head
            Set the head to the new node
        Increase the size by 1

    Function append(value):
        Create a new node with the given value
        If the list is empty:
            Set the head to the new node
        Else:
            Set previous node to the head
            While previous node's next is not null:
                Move to the next node
            Set previous node's next to the new node
        Increase the size by 1

    Function insert(value, index):
        If the index is out of bounds (less than 0 or greater than size):
            Print "Invalid index"
            Return
        If the index is 0:
            Call prepend(value)
        Else:
            Create a new node with the given value
            Set previous node to the head
            Move to the node just before the given index
            Set the new node's next to previous node's next
            Set previous node's next to the new node
            Increase the size by 1

    Function remove(index):
        If the index is out of bounds (less than 0 or greater than size):
            Print "Invalid index"
            Return
        If the index is 0:
            Store the current head in a temporary variable
            Set the head to the next node
            Decrease the size by 1
            Return the value of the removed node
        Set current node to the head
        Move to the node just before the given index
        Store the node to be removed in a temporary variable
        Set current node's next to the next node's next
        Decrease the size by 1
        Return the value of the removed node

    Function removeValue(value):
        If the list is empty:
            Print "Linked list is empty"
            Return
        If the head's value is equal to the given value:
            Set the head to the next node
            Decrease the size by 1
            Return the value
        Set previous node to the head
        While the next node is not null and its value is not equal to the given value:
            Move to the next node
        If the next node is found:
            Store the next node in a temporary variable
            Set previous node's next to the next node's next
            Return the value
        Return null

    Function search(value):
        If the list is empty:
            Return -1
        Initialize index to 0
        Set current node to the head
        While the current node is not null:
            If the current node's value is equal to the given value:
                Return the index
            Move to the next node
            Increase the index by 1
        Return -1

Function Main():
    Create a new linked list

    Add 1000 to the beginning of the list
    Add 1 to the beginning of the list
    Add 10 to the beginning of the list
    Add 800 to the beginning of the list

    Add 400 to the end of the list
    Add 6 to the end of the list
    Add 45 to the end of the list

    Print the list

    Print the index of value 6
    Print the list again

Call Main()
*/

class Node {
    constructor(value) {
        this.value = value;  // Set the value of the node
        this.next = null;    // Set the next node to null
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Initialize the head of the list to null
        this.size = 0;    // Initialize the size of the list to 0
    }

    isEmpty() {
        return this.size === 0; // Return true if size is 0, otherwise false
    }

    getSize() {
        return this.size; // Return the size of the list
    }

    print() {
        if (this.isEmpty()) {
            console.log("Linked list is empty"); // Print "Linked list is empty" if the list is empty
        } else {
            let curr = this.head;              // Set current node to the head
            let listValue = '';                // Initialize an empty string to store list values
            while (curr) {
                listValue += `${curr.value} `; // Add the current node's value to the string
                curr = curr.next;              // Move to the next node
            }
            console.log(listValue);            // Print the string with list values
        }
    }

    prepend(value) {
        const node = new Node(value);      // Create a new node with the given value
        if (this.isEmpty()) {
            this.head = node;              // Set the head to the new node if the list is empty
        } else {
            node.next = this.head;         // Set the new node's next to the current head
            this.head = node;              // Set the head to the new node
        }
        this.size++;                       // Increase the size by 1
    }

    append(value) {
        const node = new Node(value);      // Create a new node with the given value
        if (this.isEmpty()) {
            this.head = node;              // Set the head to the new node if the list is empty
        } else {
            let prev = this.head;          // Set previous node to the head
            while (prev.next) {
                prev = prev.next;          // Move to the next node
            }
            prev.next = node;              // Set previous node's next to the new node
        }
        this.size++;                       // Increase the size by 1
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log("Invalid index"); // Print "Invalid index" if the index is out of bounds
            return;
        }
        if (index === 0) {
            this.prepend(value);          // Call prepend(value) if the index is 0
        } else {
            const node = new Node(value); // Create a new node with the given value
            let prev = this.head;         // Set previous node to the head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;         // Move to the node just before the given index
            }
            node.next = prev.next;        // Set the new node's next to previous node's next
            prev.next = node;             // Set previous node's next to the new node
            this.size++;                  // Increase the size by 1
        }
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            console.log("Invalid index"); // Print "Invalid index" if the index is out of bounds
            return;
        }
        if (index === 0) {
            let curr = this.head;         // Store the current head in a temporary variable
            this.head = curr.next;        // Set the head to the next node
            this.size--;                  // Decrease the size by 1
            return curr.value;            // Return the value of the removed node
        }
        let prev = this.head;             // Set current node to the head
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;             // Move to the node just before the given index
        }
        let removeNode = prev.next;         // Store the node to be removed in a temporary variable
        prev.next = removeNode.next;        // Set current node's next to the next node's next
        this.size--;                      // Decrease the size by 1
        return removeNode.value;            // Return the value of the removed node
    }

    removeValue(value) {
        if (this.isEmpty()) {
            console.log("Linked list is empty"); // Print "Linked list is empty" if the list is empty
            return;
        }
        if (this.head.value === value) {
            this.head = this.head.next;   // Set the head to the next node if the head's value is equal to the given value
            this.size--;                  // Decrease the size by 1
            return value;                 // Return the value
        }
        let prev = this.head;             // Set previous node to the head
        while (prev.next && prev.next.value !== value) {
            prev = prev.next;             // Move to the next node if the next node's value is not equal to the given value
        }
        if (prev.next) {
            let nextNode = prev.next;     // Store the next node in a temporary variable
            prev.next = nextNode.next;    // Set previous node's next to the next node's next
            this.size--;                  // Decrease the size by 1
            return value;                 // Return the value
        }
        return null;                      // Return null if the value is not found
    }

    search(value) {
        if (this.isEmpty()) {
            return -1;                    // Return -1 if the list is empty
        }
        let i = 0;                        // Initialize index to 0
        let curr = this.head;             // Set current node to the head
        while (curr) {
            if (curr.value === value) {
                return i;                 // Return the index if the current node's value is equal to the given value
            }
            curr = curr.next;             // Move to the next node
            i++;                          // Increase the index by 1
        }
        return -1;                        // Return -1 if the value is not found
    }
}

// Main function to demonstrate the LinkedList
const list = new LinkedList();

list.prepend(1000);  // Add 1000 to the beginning of the list
list.prepend(1);     // Add 1 to the beginning of the list
list.prepend(10);    // Add 10 to the beginning of the list
list.prepend(800);   // Add 800 to the beginning of the list

list.append(400);    // Add 400 to the end of the list
list.append(6);      // Add 6 to the end of the list
list.append(45);     // Add 45 to the end of the list

list.print();        // Print the list

console.log(list.search(6)); // Print the index of value 6

list.print();        // Print the list again
