class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev=null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    print() {
        if (this.isEmpty()) {
            return 'nothing to print'
        }
        let cur = this.head;
        let arr = []
        while (cur) {
            arr.push(cur.value)
            cur = cur.next
        }
        console.log(arr)
    }

    prepend(value) {
        const node= new Node(value);
        if(this.isEmpty()){
            this.head=node;
        }else{
            node.next=this.head;
            node.prev=this.head;
            this.head=node
        }
    }
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let cur = this.head;
            while (cur.next) {
                cur = cur.next;
            }
            cur.next = node;
        }
        this.size++;
    }

    insert(value, index) {
        const node = new Node(value);
        if (index > this.size || index < 0) {
            return "cannot add this";
        }
        if (index === 0) {
            this.prepend(value);
        }

        let prev = this.head;
        for (let i = 0; i < index; i++) {
            prev = prev.next
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
    }
    removeFromFront() {
        if (this.isEmpty()) {
            return 'there is nothing to remove';
        }
        let cur = this.head;
        this.head = this.head.next;
        this.size--;
        return cur.value;
    }
    removeFromLast() {
        if (this.isEmpty()) {
            return 'there is nothing to remove in the end';
        }
        let prev = this.head;
        for(let i=0; i<this.size-1; i++){
            prev = prev.next;

        }
        let remove = prev.value;
        prev.next = null;
        this.size--;
        return remove;
    }
    search(value) {
        if (this.isEmpty()) {
            return 'there is nothing to show'
        } else {
            let cur = this.head;
            let i = 0;
            while (cur) {
                if (cur.value === value) {
                    return i
                }
                cur = cur.next;
                i++
            }
        }
        return 'could not find'
    }
    searchIndex(index) {
        if (this.isEmpty()) {
            return 'invalid search'
        }
        if (index > this.size || index < 0) {
            return 'nothing in this index to show'
        }
        let cur = this.head;
        for (let i = 0; i < index; i++) {

            cur = cur.next;
        }
        return cur.value

    }
    secondLargest(){
        let arr=[]
        let cur=this.head;
        while(cur.next){
            arr.push(cur.value)
            cur=cur.next;
        }
        const sorted= arr.sort((a,b)=>b-a)
        const setOfArray= [...new Set(sorted)]
        return setOfArray[1]

    }
    sort(){
        let arr=[]
        while(this.size>0){
            arr.push(this.removeFromLast())
        }
        arr.sort((a,b)=>a-b)
      
        
        while(arr.length){
            this.append(arr.shift())
        }
    }
}


const list = new LinkedList();

list.prepend(39)
list.prepend(9)
list.prepend(1)
list.append(23);
list.append(10);
list.append(30);
list.append(45);
list.print();
console.log(list.search(23));
console.log(list.searchIndex(5));

list.print()
console.log(list.secondLargest());

list.sort()
list.print()