// //write a program to find factorial using recursion

// function recursiveFactorial(n){
//     if(n<2){
//         return n
//     }
//     return n* recursiveFactorial(n-1)
// }

// console.log(recursiveFactorial(5));


// let List1 = [2, 5, 7, 9, 13, 15, 19, 23, 24, 29]
// let target = 15

// function binarySearch(list, target) {
//     return search(list, target, 0, list.length - 1)
//     function search(list, target, start, end) {
//         let middle = Math.floor((start + end) / 2)
//         if (target === list[middle]) {
//             return middle
//         }
//         if (target < list[middle]) {
//             return search(list, target, start, middle - 1)
//         } else {
//             return search(list, target, middle + 1, end)
//         }
//     }
// }
// console.log(binarySearch(List1, target))

//create ll, insert, traverse

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    insert(value,index){
        const node=new Node(value);
        if(index===0){
            node.next=this.head ;
            this.head=node;
        }else{
            let prev=this.head;
            for(let i=0; i<index-1; i++){
                prev=prev.next
            }
            node.next=prev.next;
            prev.next=node
            
        }
        this.size++
    }
    print(){
        let cur=this.head;
        let arr=[];
        while(cur){
            arr.push(cur.value);
            cur=cur.next
        }
        console.log(arr);
        
    }
    search(value){
        if(this.size===0){
            return 'nothing'
        }else{
            let cur=this.head;
            let count=0
            while(cur){
                if(cur.value===value){
                    return count
                }
                cur=cur.next
                count++
            }
            return 'not found'
        }
    }
}

const list= new LinkedList();
list.insert(20,0)
list.insert(30,1)
list.insert(60,2)
list.insert(50,3)
list.print()
console.log(list.search(20));
console.log(list.search(10));
console.log(list.search(50));
