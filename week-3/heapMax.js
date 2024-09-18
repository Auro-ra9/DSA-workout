class MaxHeap {
  constructor() {
    this.heap = []; 
  }

  // Inserts a value into the heap and maintains the heap property
  insert(value) {
    this.heap.push(value); // Add the new value to the end of the heap
    this.bubbleUp(this.heap.length - 1); // Restore heap property by bubbling up
  }

  // Moves the newly inserted element up to its correct position
  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2); // Find parent index
      // If the element is less than or equal to its parent, the heap property is satisfied
      if (this.heap[index] <= this.heap[parentIndex]) break;

      // Swap the element with its parent to maintain the max-heap property
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex; // Continue bubbling up from the parent's position
    }
  }

  // Removes and returns the root (maximum element) from the heap
  remove() {
    if (this.heap.length === 0) return null; // If heap is empty, return null
    if (this.heap.length === 1) return this.heap.pop(); // If only one element, pop it

    let removedValue = this.heap[0]; // Store the root value (maximum element)
    this.heap[0] = this.heap.pop(); // Move the last element to the root position
    this.bubbleDown(0); // Restore heap property by bubbling down
    return removedValue; // Return the removed root value
  }

  // Moves the element at index 0 down to its correct position
  bubbleDown(index) {
    let length = this.heap.length;
    while (true) {
      let leftIndex = 2 * index + 1; // Calculate the left child index
      let rightIndex = 2 * index + 2; // Calculate the right child index
      let swapIndex = null;

      // If the left child exists and is greater than the current element, prepare to swap
      if (leftIndex < length && this.heap[leftIndex] > this.heap[index]) {
        swapIndex = leftIndex;
      }

      // If the right child exists and is greater than the larger of the current or left child, prepare to swap
      if (
        rightIndex < length &&
        this.heap[rightIndex] >
          (swapIndex === null ? this.heap[index] : this.heap[leftIndex])
      ) {
        swapIndex = rightIndex;
      }

      // If no swaps are needed, the heap property is restored
      if (swapIndex === null) break;

      // Swap the element with the larger of its children
      [this.heap[index], this.heap[swapIndex]] = [
        this.heap[swapIndex],
        this.heap[index],
      ];
      index = swapIndex; // Continue bubbling down from the new position
    }
  }
}

// Heap Sort using MaxHeap
function heapSortDescending(array) {
  let maxHeap = new MaxHeap(); // Create an instance of MaxHeap
  let sortedArray = [];

  // Insert all elements into the heap
  for (let value of array) {
    maxHeap.insert(value); // Insert each element into the max heap
  }

  // Remove all elements from the heap and add them to the sorted array in descending order
  while (maxHeap.heap.length > 0) {
    sortedArray.push(maxHeap.remove()); // Remove and store the maximum element
  }

  return sortedArray; // Return the sorted array in descending order
}

// Example usage
let array = [10, 5, 3, 2, 7];
console.log("Original array:", array);
let sortedArray = heapSortDescending(array);
console.log("Sorted array in descending order:", sortedArray);
