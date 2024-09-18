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

    for (const char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.endOfWord;
  }

  startsWith(prefix) {
    let node = this.root;

    for (const char of prefix) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }

  // delete(word) {
  //   this.deleteHelper(this.root, word, 0);
  // }

  // deleteHelper(node, word, index) {
  //   if (word.length === index) {
  //     if (!node.endOfWord) {
  //       return false;
  //     }
  //     node.endOfWord = false;
  //     return Object.keys(node.children).length === 0;
  //   }

  //   let char = word[index];
  //   if (!node.children[char]) {
  //     return false;
  //   }

  //   let shouldDeleteChild = this.deleteHelper(
  //     node.children[char],
  //     word,
  //     index + 1
  //   );

  //   if (shouldDeleteChild) {
  //     delete node.children[char];

  //     return Object.keys(node.children).length === 0 && !node.endOfWord;
  //   }

  //   return false;
  // }

  // count() {
  //   return this.countHelper(this.root);
  // }

  // countHelper(node) {
  //   let count = 0;

  //   if (node.endOfWord) {
  //     count++;
  //   }

  //   for (const char in node.children) {
  //     count += this.countHelper(node.children[char]);
  //   }

  //   return count;
  // }

  count() {
    return counter(this.root);
  }
  counter(node) {
    let count = node.endOfWord ? 1 : 0;
    for (let child in node.children) {
      count += this.counter(node.children[child]);
    }
    return count;
  }

  replace(oldWord, newWord) {
    this.delete(oldWord);
    this.insert(newWord);
  }

  findAllWords(prefix) {
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

  delete(word) {
    let node = this.root;
    let stack = [];

    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      stack.push([node, char]);
      node = node.children[char];
    }

    if (!node.endOfWord) {
      return false;
    }
    node.endOfWord = false;

    while (stack.length > 0) {
      let [parentNode, char] = stack.pop();
      let currentNode = parentNode.children[char];

      if (
        Object.keys(currentNode.children).length === 0 &&
        !currentNode.endOfWord
      ) {
        delete parentNode.children[char];
      } else {
        break;
      }
    }

    return true;
  }
}

const trie = new Trie();

trie.insert("MANGO");
trie.insert("ORANGE");
trie.insert("MAN");
trie.insert("MANAGER");

console.log(trie.search("MANGO"));
console.log(trie.search("MANG"));
console.log(trie.startsWith("MA"));
console.log(trie.startsWith("ORA"));

trie.delete("MANGO");
console.log(trie.search("MANGO"));

console.log(trie.count());
trie.replace("MAN", "SHE");
console.log(trie.search("SHE"));
console.log(trie.search("MAN"));

console.log(trie.findAllWords("MA"));
