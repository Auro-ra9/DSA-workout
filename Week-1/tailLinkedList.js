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

    removeFromFront() {
        if (this.isEmpty()) {
            return "error"

        }
        if (this.size === 1) {
            this.head = null;
            this.tail = null
        } else {

            this.head = this.head.next
        }

        this.size--;
    }
    removeFromLast() {
        if (this.isEmpty()) {
            return 'LinkedList is empty'
        }
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = this.head;
            while (prev.next !== this.tail) {
                prev = prev.next
            }
            prev.next = null;
            this.tail = prev;
        }
        this.size--;
    }

    reverse() {
        let prev = null;
        let cur = this.head;
        while (cur) {
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next
        }
        this.head = prev;
        this.tail = this.head;
    }

}

const list = new LinkedList;

list.prepend(205);
list.prepend(230);
list.append(20);
list.append(60);
list.append(30);
list.append(59);
list.print()

list.removeFromFront()
list.print()
list.removeFromLast()
list.reverse()
list.print()
