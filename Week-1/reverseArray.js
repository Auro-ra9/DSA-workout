//reverse a string in stack
function reverseArray(arr) {
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = stack.pop()
    }
}

reverseArray(arr = [1, 2, 3, 4, 5])
console.log('reversedArray:', arr)