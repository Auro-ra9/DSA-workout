//same like swapping, but with a swapped while case (for writing code only)
//bubble sort is for checking the indices and swapping them until the end of swapped becomes true

//ascending order.
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

let arr = [123, 43, 34, 120, 13, 12, 10];
console.log(bubbleSort(arr)); //[10, 12, 13, 34, 43 ,120 ,123]

//discending order
function swapped(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

console.log(swapped(arr)); //[123, 120, 43, 34, 13,  12, 10]
//Big-O = O(n^2)= two  loops/ Quadratic time complexity
