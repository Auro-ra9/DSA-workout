class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class treeNode {
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
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
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

  find(target) {
    let closest = this.root.value;
    let current = this.root;
    while (current !== null) {
      if (Math.abs(target - closest) > Math.abs(target - current.value)) {
        closest = current.value;
      }
      if (target < current.value) {
        current = current.left;
      } else if (target > current.value) {
        current = current.right;
      } else {
        break;
      }
    }
    return closest;
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && root.right) {
        return null;
      }
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
  isValidBST(root, min = null, max = null) {
    if (root === null) return true;
    if (min !== null && root.value <= min) return false;
    if (max !== null && root.value >= max) return false;
    return (
      this.isValidBST(root.left, min, root.value) &&
      this.isValidBST(root.right, root.value, max)
    );
  }

  //height of a tree
  height(root) {
    if (root === null) return null;
    return 1 + Math.max(this.height(root.left), this.height(root.right));
  }
  //depth of a node using given data
  depth(root, data, depth = 0) {
    if (root === null) return -1;
    if (root.value === data) return depth;
    if (data < root.value) {
      return this.depth(root.left, data, depth + 1);
    } else {
      return this.depth(root.right, data, depth + 1);
    }
  }
}

const t = new treeNode();
t.insert(8);
t.insert(15);
t.insert(2);
t.insert(22);
t.insert(5);
t.insert(6);
console.log(t.find(12));
console.log(t.search(t.root, 8));
console.log("Is the tree a valid BST?", t.isValidBST());
