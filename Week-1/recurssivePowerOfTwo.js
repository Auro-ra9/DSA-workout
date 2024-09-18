function recursivePowerOfTwo(n){
    if(n<1){
        return false
    }
    if(n===1){
        return true
    }
    if(n%2!==0){
        return false
    }
    return recursivePowerOfTwo(n/2)
}

console.log(recursivePowerOfTwo(2));


function power(n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2!==0){
            return false
        }
        n=n/2
    }
    return true
}

console.log(power(12))