// Workout 1: Basic Stack Operations

// Task: Implement a stack using an array or a linked list and perform the following operations:
// PUSH: Add elements 10, 20, 30, 40.
// POP: Remove the top element and display the stack.
// Display: Show the current stack after each operation.

class Stack {
  constructor() {
    this.stack = new Array();
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  getLength() {
    return this.stack.length;
  }
  push(value) {
    this.stack.push(value);
  }
  pop() {
    if (this.isEmpty()) {
      return "stack is empty";
    } else {
      let remove = this.stack.pop();
      return remove;
    }
  }
  peek() {
    if (this.isEmpty()) {
      return "stack is empty";
    } else {
      return this.stack[this.stack.length - 1];
    }
  }
  display() {
    console.log(this.stack.toString());
  }
}
const stack = new Stack();
console.log("is empty?", stack.isEmpty()); //output : true
stack.push(10);
console.log("length:", stack.getLength()); //output : length: 1
stack.display(); //output : 10
stack.push(50);
console.log("length:", stack.getLength()); //output : length: 2
stack.display(); //output : 10, 50
stack.push(20);
console.log("length:", stack.getLength()); //output : length: 3
stack.display(); //output : 10, 50, 20
stack.push(30);
console.log("length:", stack.getLength()); //output : length: 4
stack.display(); //output :  10, 50, 20, 30
stack.push(60);
console.log("length:", stack.getLength()); //output : length: 5
stack.display(); //output :  10, 50, 20, 30, 60
console.log("top is:", stack.peek()); //output : top is: 60
console.log("removed element is:", stack.pop()); //output : removed element is: 60
stack.display(); //output : true

// Workout 2: Stack Underflow and Overflow

// Task: Implement stack operations with a maximum size limit (e.g., 5).
// PUSH: Add elements until the stack overflows.
// POP: Remove elements until the stack underflows.
// Display: Show the stack and error messages when overflow or underflow occurs.

class Stack1 {
  constructor(size) {
    this.stack = new Array();
    this.size = size;
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  getLength() {
    return this.stack.length;
  }
  push(value) {
    if (this.stack.length >= this.size) {
      console.log("stack is overflowing");
    } else {
      this.stack.push(value);
    }
  }
  pop() {
    if (this.isEmpty()) {
      return "stack is empty";
    } else {
      let remove = this.stack.pop();
      this.display();
      return remove;
    }
  }
  peek() {
    if (this.isEmpty()) {
      return "stack is empty";
    } else {
      return this.stack[this.stack.length - 1];
    }
  }
  display() {
    if (this.isEmpty()) {
      return "stack is empty";
    } else {
      console.log(this.stack.toString());
    }
  }
}
const stack1 = new Stack1(4);
console.log("is empty?", stack1.isEmpty()); //output : true
stack1.push(10);
console.log("length:", stack1.getLength()); //output : length: 1
stack1.display(); //output : 10
stack1.push(50);
console.log("length:", stack1.getLength()); //output : length: 2
stack1.display(); //output : 10, 50
stack1.push(20);
console.log("length:", stack1.getLength()); //output : length: 3
stack1.display(); //output : 10, 50, 20
stack1.push(30);
console.log("length:", stack1.getLength()); //output : length: 4
stack1.display(); //output :  10, 50, 20, 30
stack1.push(60);
console.log("length:", stack1.getLength()); //output : length: 5
console.log(stack1.pop()); //output : length: 5
stack1.display(); //output :  10, 50, 20, 30, 60
console.log("top is:", stack1.peek()); //output : top is: 60

// Workout 3: Reverse a String using a Stack

// Task: Use a stack to reverse a given string (e.g., "HELLO").
// PUSH: Push each character of the string onto the stack.
// POP: Pop characters to form the reversed string.
// Display: Show the reversed string.

class Stack2 {
  constructor() {
    this.stack = new Array();
  }
  display() {
    if (this.stack.length === 0) {
      console.log("stack is empty");
    } else {
      console.log(this.stack.join("").toString());
    }
  }
  push(value) {
    let arr = value.trim().split("");
    for (let i = 0; i < arr.length; i++) {
      this.stack.push(arr[i]);
    }
    this.display();
  }
  reverse(value) {
    let v = value.split("");
    for (let i = 0; i < v.length; i++) {
      this.stack.push(v[i]);
    }
    for (let i = 0; i < v.length; i++) {
      v[i] = this.stack.pop();
    }
    let reversedString = v.join("");
    return reversedString;
  }
}

const stack2 = new Stack2();
console.log(stack2.reverse("ghellow"));
stack2.push("shekol");

stack2.display(); //output: shekol
