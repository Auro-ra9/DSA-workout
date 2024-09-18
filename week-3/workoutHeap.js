class Heap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }
  bubbleUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index] >= this.heap[parentIndex]) break;

      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }
  remove() {
    if (this.heap.length === 0) return;
    if (this.heap.length === 1) return this.heap.pop();

    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heap.bubbleDown(0);
    return min;
  }

  bubbleDown(index) {
    const length = this.heap.length;
    while (ture) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let smallerChildIndex = leftChildIndex;
      if (
        rightChildIndex < length &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
      ) {
        smallerChildIndex = rightChildIndex;
      }
      if (this.heap[index] <= this.heap[smallerChildIndex]) break;

      [this.heap[index], this.heap[smallerChildIndex]] = [
        this.heap[smallerChildIndex],
        this.heap[index],
      ];
    }
    index = smallerChildIndex;
  }
}

function heapSort(array) {
  let minHeap = new Heap();
  let sortedArray = [];
  for (let ele of array) {
    minHeap.insert(ele);
  }

  while (minHeap.heap.length > 0) {
    sortedArray.push(minHeap.remove);
  }
  return sortedArray;
}
