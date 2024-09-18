//1. Bubble Sort
//Workout 1:
//Sort the array [64, 25, 12, 22, 11] using Bubble Sort.

function bubbleSort(arr) {
  let swapped;
  do {
    for (let i = 0; i < arr.length - 1; i++) {
      swapped = false;
      if (arr[i] < arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

let array = [64, 25, 12, 22, 11];
console.log(bubbleSort(array)); //output: [ 64, 25, 22, 12, 11 ]

//Workout 2:
//Sort the array  in asceding order [5, 1, 4, 2, 8] using Bubble Sort.

function bubbleSort(arr) {
  let swapped;
  do {
    for (let i = 0; i < arr.length - 1; i++) {
      swapped = false;
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

let array2 = [5, 1, 4, 2, 8];
console.log(bubbleSort(array2)); //output:[ 1, 4, 2, 5, 8 ]

//Workout 3:
//Sort the array  in asceding order [3, 7, 2, 6, 8, 5, 1] using Bubble Sort.

function bubbleSort(arr) {
  let swapped;
  do {
    for (let i = 0; i < arr.length - 1; i++) {
      swapped = false;
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

let array3 = [3, 7, 2, 6, 8, 5, 1];
console.log(bubbleSort(array3)); //output:[ 2, 3, 6, 5, 1, 7, 8 ]

//2. Insertion Sort
//Workout 1:
// Sort the array [12, 11, 13, 5, 6] using Insertion Sort.

function InsertionSort(arr) {
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

let array4 = [12, 11, 13, 5, 6];
console.log(InsertionSort(array4)); //output:[ 5, 6, 11, 12, 13 ]

//Workout 2:
// Sort the array in descending order [8, 3, 5, 4, 6] using Insertion Sort.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let number = arr[i];
    let j = i - 1;
    while (j >= 0 && number > arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = number;
  }
  return arr;
}

let array5 = [8, 3, 5, 4, 6];
console.log(insertionSort(array5)); //output:[ 8, 6, 5, 4, 3 ]

// Workout 3:
// Sort the array [7, 2, 1, 6, 4, 5, 3] using Insertion Sort.

function insertionsort(arr) {
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

let array6 = [7, 2, 1, 6, 4, 5, 3];
console.log(insertionsort(array6)); //[1, 2, 3, 4, 5, 6, 7]

// 3. Selection Sort
// Workout 1:
// Sort the array [29, 10, 14, 37, 13] using Selection Sort.

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

let array7 = [29, 10, 14, 37, 13];
console.log(selectionSort(array7)); //  output : [ 10, 13, 14, 29, 37 ]

//Workout 2:
// Sort the array [64, 25, 12, 22, 11] using Selection Sort.

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
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

let array8 = [64, 25, 12, 22, 11];
console.log(selectionSort(array8)); // output :[ 64, 25, 22, 12, 11 ]

//Workout 3:
// Sort the array [34, 7, 23, 32, 5] using Selection Sort.

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
let array9 = [34, 7, 23, 32, 5];
console.log(selectionSort(array9)); // output: [ 5, 7, 23, 32, 34 ]

// 4. Quick Sort
// Workout 1:
// Sort the array [10, 7, 8, 9, 1, 5] using Quick Sort.

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
let array10 = [10, 7, 8, 9, 1, 5];
console.log(quickSort(array10)); //output: [ 1, 5, 7, 8, 9, 10 ]

// Workout 2:
// Sort the array [3, 6, 8, 10, 1, 2] using Quick Sort.

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

let array11 = [3, 6, 8, 10, 1, 2]; // output [ 10, 8, 6, 3, 2, 1 ]
console.log(quickSort(array11));

// Workout 3:
// Sort the array [43, 22, 56, 12, 45, 78] using Quick Sort.
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

let array12 = [43, 22, 56, 12, 45, 78];
console.log(quickSort(array12)); //output: [ 12, 22, 43, 45, 56, 78 ]


// 5. Merge Sort
// Workout 1:
// Sort the array [12, 11, 13, 5, 6] using Merge Sort.

function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    let mid= Math.floor(arr.length/2);
    let leftArr=arr.slice(0,mid);
    let rightArr=arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    let sorted=[];
    while(leftArr.length&& rightArr.length){
        if(leftArr[0]<=rightArr[0]){
            sorted.push(leftArr.shift());
        }else{
            sorted.push(rightArr.shift());
        }
    }
    return [...sorted,...leftArr,...rightArr];
}

let array13=[12, 11, 13, 5, 6];
console.log(mergeSort(array13)); //output: [ 5, 6, 11, 12, 13 ]

// Workout 2:
// Sort the array [38, 27, 43, 3, 9, 82, 10] using Merge Sort.

function mergeSort(arr){
    if(arr.length<2){
        return arr
    }

    let mid= arr.length/2;
    let leftArr= arr.slice(0,mid);
    let rightArr=arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr,rightArr){
    let sorted=[];
    while(leftArr.length&& rightArr.length){
        if(leftArr[0]>=rightArr[0]){
            sorted.push(leftArr.shift());
        }else{
            sorted.push(rightArr.shift());
        }
    }
    return [...sorted, ...leftArr,...rightArr]
}

let array14=[38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(array14)); //output: [82, 43, 38, 27, 10,  9,  3]


// Workout 3:
// Sort the array [15, 10, 5, 20, 25, 30, 35] using Merge Sort.

function mergeSort(arr){
    if(arr.length<2){
        return arr
    }

    let mid=arr.length/2;
    let leftArr=arr.slice(0,mid);
    let rightArr= arr.slice(mid);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr,rightArr){
    let sorted=[];
    while(leftArr.length && rightArr.length){
        if(leftArr[0]>= rightArr[0]){
            sorted.push(leftArr.shift());
        }else{
            sorted.push(rightArr.shift());
        }
    }
    return [...sorted,...leftArr,...rightArr]
}

let array15= [15, 10, 5, 20, 25, 30, 35]; 
console.log(mergeSort(array15)); //output: [35, 30, 25, 20, 15, 10,  5]