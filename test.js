class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  validateBST(root, min = null, max = null) {
    if (root === null) {
      return true;
    }
    if (min !== null && min > root.value) {
      return false;
    }
    if (max !== null && max < root.value) {
      return false;
    }
    return (
      this.validateBST(root.left, min, root.value) &&
      this.validateBST(root.right, root.value, max)
    );
  }

  height(root) {
    if (root===null) {
     return 0  
    }
    return 1 + Math.max(this.height(root.left), this.height(root.right));
  }
}

const b = new BST();
b.insert(12);
b.insert(22);
b.insert(62);
b.insert(42);
b.insert(22);
console.log(b.validateBST(b.root));
console.log(b.height(b.root));

