//quick sort is same as it in the name, an easy way of sorting

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
let arr = [2, 1, 12, 42, 53, 53];
console.log(quickSort(arr)); // output: [ 1, 2, 12, 42, 53, 53 ]
