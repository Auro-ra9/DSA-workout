// Queue Operations: Enqueue, Dequeue, and Display
// Sample Workouts:

// Workout 1: Basic Queue Operations

// Task: Implement a queue using an array or a linked list and perform the following operations:
// Enqueue: Add elements 5, 10, 15, 20.
// Dequeue: Remove elements from the front of the queue.
// Display: Show the current queue after each operation.

class Queue {
  constructor() {
    this.queue = new Array();
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  getLength() {
    return this.queue.length;
  }
  display() {
    if (this.queue.length === 0) {
      console.log("queue is empty");
    } else {
      console.log(this.queue);
    }
  }
  enqueue(value) {
    this.queue.push(value);
    this.display();
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("queue is empty nothing to remove");
    } else {
      let remove = this.queue.shift();
      this.display();
      console.log("removed element:", remove);
    }
  }
}

const queue = new Queue();
queue.enqueue(10); //output : [ 10 ]
queue.enqueue(90); //output : [ 10, 90 ]
queue.enqueue(20); //output : [ 10, 90, 20 ]
queue.enqueue(30); //output : [ 10, 90, 20, 30 ]
queue.enqueue(60); //output : [ 10, 90, 20, 30, 60 ]
queue.dequeue(); //output :  [ 90, 20, 30, 60 ]  removed element: 10

// Workout 2: Priority Queue Implementation
// Task: Implement a priority queue where each element has a priority, and elements are dequeued based on their priority.
// Enqueue: Add elements with associated priorities (e.g., (5, "high"), (10, "medium"), (15, "low"), (20, "high")).
// Dequeue: Remove elements from the queue based on the highest priority.
// Display: Show the current queue after each operation, ordered by priority.

class Queue1 {
  constructor() {
    this.queue = new Array();
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  getLength() {
    return this.queue.length;
  }
  display() {
    if (this.queue.length === 0) {
      console.log("queue is empty");
    } else {
      console.log(this.queue);
    }
  }
  enqueue(value, priority) {
    if (priority === "high") {
      this.queue.unshift(value);
    } else if (priority === "medium") {
      let mid = Math.floor(this.queue.length / 2);
      this.queue.splice(mid, 0, value);
    } else if (priority === "low") {
      this.queue.push(value);
    }

    this.display();
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("queue is empty nothing to remove");
    } else {
      let remove = this.queue.shift();
      this.display();
      console.log("removed element:", remove);
    }
  }
}

const queue1 = new Queue1();
queue1.enqueue(10, "high"); // [10]
queue1.enqueue(90, "low"); // [10, 90]
queue1.enqueue(20, "low"); // [10, 90, 20]
queue1.enqueue(30, "medium"); // [10, 30, 90, 20]
queue1.enqueue(60, "high"); // [60, 10, 30, 90, 20]
queue1.dequeue(); //output :  [ 10, 30, 90, 20 ]  removed element: 60

// Workout 3: Check Palindrome using a Queue

// Task: Use a queue to check if a given word (e.g., "RADAR") is a palindrome.
// Enqueue: Enqueue each character of the string into the queue.
// Dequeue: Dequeue characters and compare to verify palindrome.
// Display: Show whether the word is a palindrome or not.

class Queue2 {
  constructor() {
    this.queue = new Array();
  }
  display() {
    if (this.queue.length === 0) {
      console.log("queue is empty");
    } else {
      console.log(this.queue);
    }
  }

  validPalindrome(value) {
    let v = value.trim().split("");

    for (let i = 0; i < v.length; i++) {
      this.queue.push(v[i]);
    }

    let left = 0;
    let right = this.queue.length - 1;

    while (left < right) {
      let leftChar = this.queue.shift();
      let rightChar = this.queue.pop();

      if (leftChar !== rightChar) {
        console.log("this is not  a valid palindrome");
        return;
      }
      left++;
      right--;
    }
    console.log("this is a valid palindrome");
  }
}

const queue2 = new Queue2();
queue2.display();
queue2.validPalindrome("RADAR");
