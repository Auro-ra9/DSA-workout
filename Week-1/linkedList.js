class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedList {
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
    let cur = this.head;
    if (this.isEmpty()) {
      return " nothing to show";
    }
    let arr = [];
    while (cur) {
      arr.push(cur.value);
      cur = cur.next;
    }
    console.log(arr);
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
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
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return "invalid index";
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  remove(index) {
    if (index < 0 || index > this.size) {
      return "invalid element";
    }
    if (index === 0) {
      let cur = this.head;
      this.head.next = cur.next;
      this.size--;
    }
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    let removeNode = prev.next;
    prev.next = removeNode.next;
    this.size--;
    return removeNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return "Invalid";
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return 0;
    }
    let prev = this.head;
    let index = 0;
    while (prev.next && prev.next.value !== value) {
      prev = prev.next;
      index++;
    }
    if (prev.next) {
      let remove = prev.next;
      prev.next = remove.next;
      this.size--;
      return index;
    }
    return null;
  }
  search(value) {
    if (this.isEmpty()) {
      return "invalid search";
    }

    let i = 0;
    let cur = this.head;
    while (cur) {
      if (cur.value === value) {
        return i;
      }
      cur = cur.next;
      i++;
    }
    return "could not found";
  }

  searchIndex(index) {
    if (index < 0 || index > this.size) {
      return "invalid search";
    }
    let cur = this.head;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }

    return cur.value;
  }

  reverse() {
    let prev = null;
    let cur = this.head;
    while (cur) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    this.head = prev;
  }
}

const List = new linkedList();

List.prepend(30);
List.prepend(23);
List.prepend(20);

List.append(40);
List.append(10);
List.append(50);

List.insert(12, 1);
List.insert(90, 2);
List.insert(80, 3);
List.print();
List.reverse();
List.print();

// console.log(List.search(30))
// console.log(List.search(20))

// console.log(List.searchIndex(1))
// console.log(List.searchIndex(3))

// console.log(List.remove(1))
// console.log(List.removeValue(30))
