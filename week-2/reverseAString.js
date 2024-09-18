//reverse a string using stack
function reverseAStringStack(str) {
    let stack = []
    let stri = str.split('')
    for (let i = 0; i < stri.length; i++) {
        stack.push(stri[i])
    }
    for (let i = 0; i < stri.length; i++) {
        stri[i] = stack.pop()
    }
    let reversedString = stri.join('')
    return reversedString
}
console.log('reversed string', reverseAStringStack('Ashna ahammed'))