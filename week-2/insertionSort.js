//check the sorted side with one element from the unsorted at a time

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let selectedNumber = arr[i];
    let leftToBeSorted = i - 1;
    while (leftToBeSorted >= 0 && selectedNumber > arr[leftToBeSorted]) {
      arr[leftToBeSorted + 1] = arr[leftToBeSorted];
      leftToBeSorted = leftToBeSorted - 1;
    }
    arr[leftToBeSorted + 1] = selectedNumber;
  }
  return arr;
}
let arr1 = [123, 43, 123, 343, 121, 34, 3];
console.log(insertionSort(arr1));

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let number = arr[i];
    let j = i - 1;
    while (j >= 0 && number < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = number;
  }
  return arr;
}
let arr = [123, 32, 45, 23, 54, 35];
console.log(insertionSort(arr)); //[ 23, 32, 35, 45, 54, 123 ]
