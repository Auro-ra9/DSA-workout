//bubble sort
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
let arr = [12, 2, 12, 4, 1, 4, -10];
console.log(bubbleSort(arr));

//insertion sort
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
let arr1 = [12, 22, 122, 24, 12, 42, 10];
console.log(insertionSort(arr1));

//quick sort
function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(let i=0; i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot, ...quickSort(right)]
}
let arr2 = [10, 20, 90, 40, 13, 4, 100];
console.log(quickSort(arr2));//[4,10,13,20,40,90,100];


// hash table defined size(static array so)
class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
  }
  hash(key) {
      let total = 0;
      for (let i = 0; i < key.length; i++) {
          total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    set(key, value) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[key, value]];
        } else {
            let sameKeyItem = bucket.find((items) => items[0] === key);
      if (sameKeyItem) {
          sameKeyItem[1] = value;
        } else {
            bucket.push([key, value]);
        }
    }
}
  get(key) {
      let index = this.hash(key);
      let bucket = this.table[index];
      if (bucket) {
          let sameKeyItem = bucket.find((item) => item[0] === key);
          if (sameKeyItem) {
              return sameKeyItem[1];
            }
        }
        return undefined;
    }
    remove(key) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if (bucket) {
            let sameKeyItem = bucket.find((item) => item[0] === key);
            if (sameKeyItem) {
                bucket.splice(bucket.indexOf(sameKeyItem), 1);
            }
        }
    }
    print() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(10);
table.set("name", "Bruce");
table.set("age", 25);
table.print();
console.log(table.get("name"));
table.set("mane", "Clark");
table.set("name", "Diana");
console.log(table.get("mane"));
table.remove("name");
table.print();