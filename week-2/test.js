//find some of the array using recursion

function sum(arr){
    if(arr.length===0)return 0
    return arr[0]+sum(arr.slice(1));
}
let array= [1,3,4,5,2,1,5]
console.log(sum(array))

function alt(arr){
    if(arr.length===0)return 0
    let ele= arr.pop()
    return ele+ alt(arr)
}
console.log(alt(array))


//sorting algorithms
function mergeSort(arr){
    if(arr.length<2)return arr;
    let mid= Math.floor(arr.length/2); 
    let left= arr.slice(0,mid);
    let right= arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}
function merge(l,r){
    let sorted=[];
    while(l.length&& r.length){
        if(l[0]<r[0]){
            sorted.push(l.shift())
        }else{
            sorted.push(r.shift())
            
        }
    }
    return [...sorted, ...l,...r];
}

function quickSort(arr){
    if(arr.length<2)return arr;
    let left=[]
    let right=[]
    let pivot=arr[arr.length-1];
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i]);
        }
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)]
}

function bubbleSort(arr){
    let swapped;
    do{
        swapped= false;
        for(let i=0; i<arr.length-1; i++){
            if(arr[i+1]<arr[i]){
                [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
                swapped=true;
            }
        }
    }while(swapped);
    return arr
}

function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let cur= arr[i];
        let j= i-1;
        while(j>=0 && arr[j]>cur){
            arr[j+1]=arr[j];
            j--
        }
        arr[j+1]= cur;
        return arr;
    }
}
function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        let min= i;
        for(let j= i+1; j<arr.length; j++){
            if(arr[j]<arr[min]){
                min= j
            }
        }
        if(i!==min){
            [arr[min],arr[i]]=[arr[i],arr[min]];
        }
    }
    return arr;
}

let arr= [1,234,421,232,14,242,53,12];
console.log(mergeSort(arr))
console.log(quickSort(arr))
console.log(bubbleSort(arr))
console.log(insertionSort(arr))
console.log(selectionSort(arr))
