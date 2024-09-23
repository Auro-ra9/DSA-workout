class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      return this.insertnewNode(this.root, newNode);
    }
  }

  insertnewNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertnewNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertnewNode(root.right, newNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.left, value);
      } else {
        return this.search(root.right, value);
      }
    }
  }
  findSecondLargest(root) {
    let prev = null;
    let cur = root;
    while (cur.right !== null) {
      prev = cur;
      cur = cur.right;
    }
    if (cur.left !== null) {
      cur = cur.left;
      while (cur.right !== null) cur = cur.right;
      return cur.value;
    }
    return prev.value;
  }

  max(root){
    if(root.right!==null){
      return this.max(root.right)
    }else{
      return root.value
    }
  }
  min(root){
    if(root.left===null){
      return root.value;
    }else{
      return this.min(root.left);
    }
  }
  
}

const bst = new BinarySearchTree();
bst.insert(50);
bst.insert(43);
bst.insert(56);
bst.insert(39);
bst.insert(70);
bst.insert(19);
bst.insert(5);
console.log(bst.search(bst.root, 50));
console.log(bst.findSecondLargest(bst.root))
console.log(bst.max(bst.root))
console.log(bst.min(bst.root))
