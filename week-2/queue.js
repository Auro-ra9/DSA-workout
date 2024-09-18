//for adding use in-built method push and removing shift
//peek return 0th index element
//getting size return length as this is items array
//checking empty or not also use length

class Queue{
    constructor(){
        this.items=[];
    }

    enqueue(element){
        this.items.push(element);
    }

    dequeue(){
       return this.items.shift();
    }

    peek(){
        return this.items[0];
    }
    isEmpty(){
        return this.items.length===0;
    }
    getLength(){
        console.log( 'size:',this.items.length);
    }
    print(){
        console.log('items:',this.items.toString());
    }
}

const queue= new Queue;
console.log('is this empty? ',queue.isEmpty());
queue.enqueue(10);
queue.enqueue(50);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.print()
queue.getLength()
console.log('peek element is:',queue.peek());
console.log('removed element is:',queue.dequeue());
queue.print()
