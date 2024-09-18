//when a function calls itself, it must have a condition to terminate the recursion or else this will iterate infinite
// function recursion() {
//     //code for the problem
//     recursion()//calling the function again and again
// }

let array=[12,34,42,11,42,34,12]


function palindrome(arr){
    if(arr.length<=1){
        return true
    }
    if(arr[0]!==arr[arr.length-1]){
        return false
    }
    return palindrome(arr.slice(1,-1))
}
let n=[3,5]
function fibonacci(n){
    let arr=[2,5]
    for(let i=2; i<n; i++){
        arr[i]= arr[i-1]+ arr[i-2]
    }
    return arr
    
}
//we are not putting reverse here, instead we are checking last and first then cutting them if it's true
function isPalindrome(st) {
    if (st.length <= 1) {
        return true;
    }
    if (st[0] !== st[st.length - 1]) {
        return false;
    }
    return isPalindrome(st.slice(1, -1));
}


console.log(palindrome(array));
console.log(fibonacci(10))
// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
