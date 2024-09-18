//return the index of target element if it is not there then return -1

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }
}

console.log(linearSearch([23, 42, 545, 31, 234, 24, 54], 31))//3
console.log(linearSearch([23, 42, 545, 31, 24, 20, 54], 20))//5
console.log(linearSearch([23, 42, 45, 31, 234, 24, 54], 45))//2

//Big-O= O(n) linear time complexity