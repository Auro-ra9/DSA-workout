class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }
    getSize() {
        return this.size
    }
    print() {
        let arr = []
        let cur = this.head;
        while (cur) {
            arr.push(cur.value)
            cur = cur.next;
        }
        console.log(arr);

    }
    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.size++
    }

    append(value){
        const node= new Node(value);
        if(this.isEmpty()){
            this.head=node;
        }else{
            let cur=this.head;
            while(cur.next){
                cur=cur.next;
            }
            cur.next=node;
            node.prev=this.tail;

        }
        this.size++;
    }

     linkArray(arr){
        for(const ele of arr){
            this.append(ele)
            
        }
    }

    arrayToLinkedList(){
        let cur=this.head;
        let arr=[]
        //linkedlist to string
        let val=''
        while(cur){
            //push to array
            arr.push(cur.value)
            //add one by one to existing in each iterations
            val+=`'${cur.value}' `
            cur=cur.next
        }
        console.log('array :-',arr)
        console.log('String :-',val)
    }
}
let arr=[22,32,42,52]

const list = new LinkedList();
list.prepend(12)
list.linkArray(arr)
list.print()
list.arrayToLinkedList()
// for(const element of arr){
    //     list.append(element)
    // }