class Node {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}
class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let node = this.root;

    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new Node();
      }
      node = node.children[char];
    }
    node.endOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.endOfWord;
  }

  suffix(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    let result = [];
    this.collectWords(node, prefix, result);
    return result;
  }
  collectWords(node, prefix, result) {
    if (node.endOfWord) {
      result.push(prefix);
    }
    for (const char in node.children) {
      this.collectWords(node.children[char], prefix + char, result);
    }
  }

  delete(word){
    let node= this.root;
    let stack=[];

    for(const char of word){
        if(!node.children[char]){
            return false
        }
        stack.push([node,char])
        node= node.children[char];
    }
    if(!node.endOfWord){
      return false
    }
    node.endOfWord= false;

    while(stack.length>0){
        let [parentNode,char]= stack.pop();
        let currentNode= parentNode.children[char];
    }
  }
}

const trie = new Trie();
trie.insert("Ashna");
console.log(trie.search("Ashna"));
