// Workout 2: Handle Collisions

// Task: Implement a hash table with collision handling (e.g., chaining with linked lists or open addressing).
// Perform the following operations:
// Insert: Add key-value pairs that cause collisions, such as ("key1", 1), ("key2", 2), and ("key3", 3)
// where all keys hash to the same index.
// Search: Retrieve the values for the keys causing collisions.
// Display: Show how collisions are managed and the final state of the hash table.

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
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      let sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
    this.display();
  }
  get(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
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
table.set("abc", 1);  //Output: 4 [ [ 'abc', 1 ] ]
table.set("cab", 2);  //Output: 4 [ [ 'abc', 1 ], [ 'cab', 2 ] ]
table.set("bca", 3);  //Output: 4 [ [ 'abc', 1 ], [ 'cab', 2 ], [ 'bca', 3 ] ]
console.log(table.get("cab"));  // Output: 2
