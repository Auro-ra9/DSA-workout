function search(arr, target, startIndex, endIndex) {
    if (startIndex > endIndex) {
        return -1
    }

    let middleIndex = Math.floor((startIndex + endIndex) / 2)
    if (target === arr[middleIndex]) {
        return middleIndex
    }
    if (target > arr[middleIndex]) {
        return search(arr, target, middleIndex + 1, endIndex)
    } else {
        return search(arr, target, startIndex, middleIndex - 1)
    }
}
let arr=[12, 22, 33, 44, 55, 55, 66, 77, 88, 90]

console.log(search(arr, 90,0,arr.length-1))//9
console.log(recursiveBinarySearch([12, 22, 33, 44, 55, 55, 66, 77, 88, 90], 55))//4
console.log(recursiveBinarySearch([12, 14, 17, 19, 25, 35, 49, 60, 78, 80], 60))//7
console.log(recursiveBinarySearch([12, 22, 33, 44, 55, 55, 66, 77, 88, 100], 22))//1

//Big-O= O(log n)