class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  // Restore heap property by "bubbling up" the value if it's smaller than its parent.
  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2); // Get parent index.

      // If the inserted value is greater or equal to the parent, stop bubbling.
      if (this.heap[index] >= this.heap[parentIndex]) break;

      // Swap the inserted value with its parent.
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];

      index = parentIndex; // Move up to the parent index.
    }
  }

  // Remove and return the root (smallest value) from the heap.
  remove() {
    if (this.heap.length === 0) return null; // If heap is empty, return null.
    if (this.heap.length === 1) return this.heap.pop(); // If there's only one element, return it.

    let min = this.heap[0]; // The root (smallest value).
    this.heap[0] = this.heap.pop(); // Replace the root with the last element in the heap.
    this.bubbleDown(0); // Restore heap property by "bubbling down" the new root.
    return min; // Return the removed smallest value.
  }

  bubbleDown(index) {
    const length = this.heap.length;
  
    while (true) {
      let leftChildIndex = 2 * index + 1;  
      let rightChildIndex = 2 * index + 2; 
      let smallerChildIndex = leftChildIndex; 

      
      if (leftChildIndex >= length) break;
  
      
      if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
        smallerChildIndex = rightChildIndex;
      }
  
      // If the current element is smaller than or equal to the smaller child, stop
      if (this.heap[index] <= this.heap[smallerChildIndex]) break;
  
      // Swap with the smaller child
      [this.heap[index], this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex], this.heap[index]];
  
      // Move down to the smaller child's index
      index = smallerChildIndex;
    }
  }
  
}


function heapSort(array) {
  let minHeap = new MinHeap(); 
  let sortedArray = [];
 
  for (let value of array) {
    minHeap.insert(value);
  }
  
  while (minHeap.heap.length > 0) {
    sortedArray.push(minHeap.remove());
  }
  return sortedArray; 
}

// Example usage:
let array = [10, 5, 3, 2, 7];
console.log("Original array:", array);
let sortedArray = heapSort(array);
console.log("Sorted array:", sortedArray);

// Another example:
let array2 = [3, 4, 2, 56, 3, 2];
console.log("Sorted array:", heapSort(array2));
