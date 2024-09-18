//here we need two  functions one is recursive function for splitting the array unntil the length becomes 1
//another one is for returning the temporary sorted array and merging it with left and right arrays

function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let leftArr=arr.slice(0,mid)
    let rightArr=arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    let sorted=[]
    while(leftArr.length&& rightArr.length){
        if(leftArr[0]<=rightArr[0]){
            sorted.push(leftArr.shift())
        }else{
            sorted.push(rightArr.shift())
        }
    }
    return [...sorted,...leftArr,...rightArr]
}

const arr=[-6,30,4,-2,8]
console.log(mergeSort(arr)) //output: [ -6, -2, 4, 8, 30 ]