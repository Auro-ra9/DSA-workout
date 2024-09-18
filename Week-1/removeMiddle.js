class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
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
        let cur = this.head;
        let arr = []
        let values = ''
        while (cur) {
            arr.push(cur.value)
            values += `${cur.value}, `
            cur = cur.next;
        }
        console.log(arr)
        console.log(values)
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node
        }
        this.size++;
    }

    removeFromMiddle() {
        if (this.isEmpty()) {
            return 'linkedlist is empty'
        }
        if (this.size === 1) {
            this.head = null;
            this.tai = null;
        } else {
            let prev = this.head;
            let middle = Math.floor(this.size / 2)
            for (let i = 0; i < middle - 1; i++) {
                prev = prev.next
            }
            let removeNode = prev.next;
            prev.next = removeNode.next
        }
        this.size--;
    }


    //remove middle using while loop

    removeWhile() {
        if (this.isEmpty()) {
            return 'linkedlist is empty'
        }
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = this.head;
            let middle = Math.floor(this.size / 2)
            let count = 0;
            while (count < middle - 1) {
                prev = prev.next;
                count++;
            }
            let remove = prev.next;
            prev.next = remove.next;
        }
        this.size--;
    }
}

const list = new LinkedList;

list.prepend(205);
list.prepend(230);
list.append(20);
list.append(60);
list.append(30);
list.append(59);
list.print();
list.removeFromMiddle();
list.removeWhile();
list.print();
