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
    let newNode = new Node(value);
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
  //traverse
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    const queue = [];
    queue.push(this.root);
    while (queue.length) {
      let cur = queue.shift();
      console.log(cur.value);
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
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

  max(root) {
    if (root.right !== null) {
      return this.max(root.right);
    } else {
      return root.value;
    }
  }
  min(root) {
    if (root.left === null) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }
  delete(value) {
    this.root = this.deleteHelper(this.root, value);
  }

  deleteHelper(root, value) {
    if (root === null) {
      return null;
    }

    if (value < root.value) {
      root.left = this.deleteHelper(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteHelper(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      }

      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      root.value = this.min(root.right);
      root.right = this.deleteHelper(root.right, root.value);
    }
    return root;
  }
  height(root) {
    if (root === null) {
      return 0;
    } else {
      return 1 + Math.max(this.height(root.left), this.height(root.right));
    }
  }
  depth(root, target, depth = 0) {
    if (root === null) {
      return -1;
    }
    if (root.value === target) {
      return depth;
    }

    if (target < root.value) {
      return depth(root.left, target, depth + 1);
    }

    return depth(root.right, target, depth + 1);
  }

  closestValue(root, target) {
    let closest = root.value;
    while (root !== null) {
      if (Math.abs(target - closest) > Math.abs(target - root.value)) {
        closest = root.value;
      }
      root = target < root.value ? root.left : root.right;
    }
    return closest;
  }

  findSecondLargest() {
    if (!this.root || (!this.root.left && !this.root.right)) {
      return null; // No second largest element
    }

    let current = this.root;
    let parent = null;

    // Find the largest element
    while (current.right) {
      parent = current;
      current = current.right;
    }

    // If the largest has a left subtree, find the largest in that subtree
    if (current.left) {
      current = current.left;
      while (current.right) {
        current = current.right;
      }
      return current.value;
    }

    // If no left subtree, the parent is the second largest
    return parent.value;
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
}

let bst = new BinarySearchTree();
console.log("is this bst empty?", bst.isEmpty());
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
console.log(bst.search(bst.root, 10));
console.log("Pre order traversal:");
bst.preOrder(bst.root);
console.log("In order traversal:");
bst.inOrder(bst.root);
console.log("Post order traversal:");
bst.postOrder(bst.root);
bst.levelOrder();
console.log(bst.findSecondLargest(bst.root));
console.log(bst.max(bst.root));
console.log(bst.min(bst.root));
console.log("height:", bst.height(bst.root));
console.log("Is valid BST:", bst.isValidBST(bst.root));
console.log("Closest value to 6:", bst.closestValue(bst.root, 6));
console.log("Second largest value:", bst.findSecondLargest());
bst.delete(5);
