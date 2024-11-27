//  Asked by Vipin Varghese this is how I solved in that time, but there are better solutions available
function partition(a) {
  let mid = Math.floor(a.length / 2);
  let first = a.slice(0, mid);
  let end = a.slice(mid);
  let joined = mergeSort(end);
  return [...first, ...joined];
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
}
console.log(partition([123, 43, 21, 53, 642, 14]));
