function selectionSortAscending(arr) {
    for (let i = 0; i < arr.length-1 ; i++) {
      let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex],arr[i]]; // Swap the elements
    }
  }
  return arr;
}

let arr1 = [123, 43, 34, 120, 13, 12, 10];
console.log("ascending", selectionSortAscending(arr1)); // [10, 12, 13, 34, 43, 120, 123]

//Time Complexity: O(n^2) (Quadratic)

function selectionSortDiscending(arr) {
  for (let i = 0; i < arr.length-1; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    if (maxIndex !== i) {
      [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
    }
  }
  return arr;
}
let arr2 = [123, 43, 34, 120, 13, 12, 10];
console.log("disceding", selectionSortDiscending(arr2)); // [123, 120, 43, 34,13,  12, 10]

//Time Complexity: O(n^2) (Quadratic)
