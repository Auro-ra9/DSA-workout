// Workout 3: Delete and Resize

// Task: Implement a hash table with support for resizing. Perform the following operations:
// Insert: Add key-value pairs such as ("dog", 1), ("cat", 2), ("fish", 3), and more to trigger resizing.
// Delete: Remove a key-value pair, for example, ("cat", 2).
// Resize: Demonstrate how the hash table is resized and rehashed.
// Display: Show the hash table before and after resizing and deletion.

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

  resize(newSize) {
    let oldTable = this.table;
    this.size = newSize;
    this.table = new Array(newSize);

    for (let bucket of oldTable) {
      if (bucket) {
        for (let [key, value] of bucket) {
          this.set(key, value);
        }
      }
    }
  }

  set(key, value) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      let sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        item[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
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
    for (let i = 0; i < this.size; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }

  delete(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }
}

// Initialize hash table
let hashTable = new HashTable(3);

hashTable.set("dog", 1);
hashTable.set("cat", 2);
hashTable.set("fish", 3);
hashTable.set("bird", 4);

//  before resizing
console.log("Before resizing:");
hashTable.display();

// Resize the hash table
hashTable.resize(6);

//  after resizing
console.log("After resizing:");
hashTable.display();

// Delete a key-value pair
hashTable.delete("cat");

// Display hash table after deletion
console.log("After deletion of 'cat':");
hashTable.display();
