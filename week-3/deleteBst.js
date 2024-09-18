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

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNewNode(this.root, newNode);
    }
  }
  insertNewNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNewNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.insertNewNode(root.right, newNode);
      }
    }
  }

  levelOrder(){
    let queue=[];
    queue.push(this.root);
    while(queue.length){
        let cur= queue.shift();
        console.log(cur.value);
        if(cur.left){
            queue.push(cur.left);
        }
        if(cur.right){
            queue.push(cur.right);
        }
    }
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
  deleteNode(value) {
    this.root = this.delete(this.root, value);
  }
  delete(root, value) {
    if (root === null) {
      return root;
    }

    if (value < root.value) {
      root.left = this.delete(root.left, value);
    } else if (value > root.value) {
      root.right = this.delete(root.right, value);
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
      root.right = this.delete(root.right, root.value);

    }
    return root;
  }
}

const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(12);
bst.insert(54);
bst.insert(7);
bst.insert(3);
bst.insert(9);
console.log('before deleting:-')
bst.levelOrder();

// console.log(bst.min(bst.root));
// console.log(bst.max(bst.root));
bst.deleteNode(10);
console.log('after deleting:-')
bst.levelOrder();
