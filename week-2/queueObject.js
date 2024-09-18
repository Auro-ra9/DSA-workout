//here we will be using object

class Queue{
    constructor(){
        this.items={}
        this.rear=0;
        this.front=0;
    }
    enqueue(element){
        this.items[this.rear]=element;
        this.rear++
    }
    dequeue(){
        let removeItem= this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return removeItem
    }
    peek(){
        return this.items[this.front]
    }
    isEmpty(){
        return this.rear-this.front===0;
    }
    getLength(){
        return this.rear-this.front;
    }
    print(){
        console.log(this.items);
    }
}

const queue= new Queue();
console.log(queue.isEmpty());

queue.enqueue(60);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(50);
queue.enqueue(10);
queue.print();
console.log(queue.getLength());
queue.dequeue();
queue.print();
console.log(queue.getLength());
console.log(queue.peek());