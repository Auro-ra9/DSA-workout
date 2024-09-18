//reverse a string in stack
function reverseArray(arr) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = stack.pop();
  }
}

reverseArray((arr = [1, 2, 3, 4, 5]));
console.log("reversedArray:", arr);

function queue(arr) {
  let queue = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    queue.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = queue.shift();
  }
}
queue((arr = [1, 2, 3, 4, 5]));
console.log("queue:", arr);
