// Workout 1: Insert and Search
// Task: Implement a hash table. Perform the following operations:
// Insert: Add key-value pairs such as ("apple", 10), ("banana", 5), and ("cherry", 7).
// Search: Retrieve the values for the keys "apple", "banana", and "cherry".
// Display: Show the contents of the hash table after each operation.

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    let index = this.hash(key);
      this.table[index] = [[key, value]];
    this.display();
  }
  get(key) {
    let index = this.hash(key);
   return  this.table[index];
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(10);
table.set("apple", 10); //output: 0 [ [ 'apple', 10 ] ]
table.set("banana", 5); //output: 0 [ [ 'apple', 10 ] ]  
                               // 9 [ [ 'banana', 5 ] ]
table.set("cherry", 7); //output: 0 [ [ 'apple', 10 ] ]
                              //  3 [ [ 'cherry', 7 ] ]
                              //  9 [ [ 'banana', 5 ] ]
console.log(table.get("apple")); //output: 10
