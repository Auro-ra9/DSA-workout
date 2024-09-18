const arr = [1, 2, 3, 45, 6, 6, 78, 95, 12, 23, 55, 64, 43]
//even numbers
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i])//2,6,6,78,12,64
    }
}
//odd numbers
const filter = arr.filter((e) => {
    if (e % 2 !== 0) {
        return e
    }
})
console.log(filter)//[1,3,45,95,23,55,43]