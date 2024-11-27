// Average time complexity is constant
// worst time complexity is linear
//Hash tables are a fine solution when solving problems
class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  resize(newSize) {
    let oldTable = this.table;
    this.size = newSize;
    this.table = new Array(newSize);

    for (let bucket of oldTable) {
      if (bucket) {
        for (const [key, value] of bucket) {
          this.set(key, value);
        }
      }
    }
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];
    //if the field is empty then make this value and key as the new entries
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      //item of 0 here means key. item of 1 means the value, if we found the same key them replace the value
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        //if the key is different then push this new key and value to the existing bucket
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }
    return undefined;
  }

  remove(key) {
    let index = this.hash(key);
    const bucket = this.table[index];
    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        //here we are deleting or splicing out the index based key.
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
  findDuplicate(arr) {
    let duplicates = {};
    for (const ele of arr) {
      if (duplicates[ele]) {
        duplicates[ele]++;
      } else {
        duplicates[ele] = 1;
      }
    }
    let keys = Object.keys(duplicates);
    let final = [];
    for (const ele of keys) {
      if (duplicates[ele] > 1) {
        final.push([ele, duplicates[ele]]);
      }
    }
    final.sort((a, b) => b[1] - a[1]);
    console.log(final);
    console.log(final[0]);
  }
}

const table = new HashTable(10);
table.set("name", "Bruce");
table.set("age", 25);
// table.display();
// console.log(table.get("name"));
table.set("mane", "Clark");
table.set("name", "Diana");
table.set("place", "Diana");
table.set("dance", "Diana");
// console.log(table.get("mane"));
// table.remove("name");
// table.display();
table.findDuplicate([12, 23, 21, 12, 12, 42, 42, 4, 33, 44, 4]);

table.resize(20);
table.display();
