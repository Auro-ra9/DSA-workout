//binary search works only on a sorted array, if the array is not sorted you can either choose to sort first or do linear search

function binarySearch(arr, target) {
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        if (arr[middle] === target) {  
            return middle
        }
        if (target < arr[middle]) {//depends on the structure of the array ascending or descending
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return -1
}

console.log(binarySearch([1, 12, 21, 54, 55, 56], 54))//3
console.log(binarySearch([1, 12, 21, 54, 55, 56], 56))//5
console.log(binarySearch([1, 12, 21, 54, 55, 56], 1))//0
//Big-O= O(log n)- linear time complexity