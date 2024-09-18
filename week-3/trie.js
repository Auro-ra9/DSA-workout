// Node class represents each node in the Trie
class Node {
  constructor() {
    // children: an object to store child nodes (keys are characters)
    this.children = {};
    // endOfWord: a boolean indicating if a word ends at this node
    this.endOfWord = false;
  }
}

// Trie: A data structure used to store and retrieve strings efficiently. Each node represents a character of the string.
class Trie {
  constructor() {
    // root: the root node of the Trie, an empty node to start
    this.root = new Node();
  }

  // Insert: Adds a word by creating a path through the nodes corresponding to each character.
  // insert method to add a word to the Trie
  insert(word) {
    let node = this.root;

    // Iterate over each character in the word
    for (const char of word) {
      // If the character doesn't exist in children, add a new node
      if (!node.children[char]) {
        node.children[char] = new Node();
      }
      // Move to the next node (child node corresponding to char)
      node = node.children[char];
    }
    // Mark the end of the word
    node.endOfWord = true;
  }

  // search method to check if a word exists in the Trie
  search(word) {
    let node = this.root;

    // Iterate over each character in the word
    for (const char of word) {
      // If a character is missing in the current node's children, word not found
      if (!node.children[char]) {
        return false;
      }
      // Move to the next node (child node corresponding to char)
      node = node.children[char];
    }
    // Return true if this node marks the end of a word
    return node.endOfWord;
  }

  // startsWith method to check if any word in the Trie starts with the given prefix
  startsWith(prefix) {
    let node = this.root;

    // Iterate over each character in the prefix
    for (const char of prefix) {
      // If a character is missing in the current node's children, prefix not found
      if (!node.children[char]) {
        return false;
      }
      // Move to the next node (child node corresponding to char)
      node = node.children[char];
    }
    // Return true if the prefix exists in the Trie
    return true;
  }

  // // Delete: Removes a word by unmarking the end of the word and possibly removing unnecessary nodes.
  // delete(word) {
  //   // Call a helper function to perform recursive deletion
  //   this.deleteHelper(this.root, word, 0);
  // }

  // // deleteHelper is a recursive function to delete a word from the Trie
  // deleteHelper(node, word, index) {
  //   // Base case: if we've reached the end of the word
  //   if (word.length === index) {
  //     // If the end of the word flag is not set, the word doesn't exist
  //     if (!node.endOfWord) {
  //       return false;
  //     }
  //     // Unmark the end of the word
  //     node.endOfWord = false;
  //     // If the node has no children, it's safe to delete
  //     return Object.keys(node.children).length === 0;
  //   }

  //   // Get the current character
  //   let char = word[index];
  //   // If the character is not in the children, the word doesn't exist
  //   if (!node.children[char]) {
  //     return false;
  //   }

  //   // Recursively call deleteHelper on the next node
  //   let shouldDeleteChild = this.deleteHelper(
  //     node.children[char],
  //     word,
  //     index + 1
  //   );

  //   // If the child should be deleted, remove the reference to it
  //   if (shouldDeleteChild) {
  //     delete node.children[char];
  //     // Return true if no other children exist and it's not the end of another word
  //     return Object.keys(node.children).length === 0 && !node.endOfWord;
  //   }

  //   return false;
  // }

  // Function to delete a word from the Trie
delete(word) {
  let node = this.root; // Start from the root of the Trie
  let stack = []; // This will help us keep track of nodes to possibly delete

  // Traverse through each character in the word
  for (let char of word) {
    // If the character is not in the current node's children, the word is not in the Trie
    if (!node.children[char]) {
      return false; // Return false because we cannot delete something that isn't there
    }
    // Keep track of the current node and character
    stack.push([node, char]);
    // Move to the next node in the Trie
    node = node.children[char];
  }

  // Check if the end of the word is marked in the Trie
  if (!node.endOfWord) {
    return false; // Return false because the word was not found
  }
  // Unmark the end of the word
  node.endOfWord = false;

  // Now, we need to clean up any unnecessary nodes in the Trie
  while (stack.length > 0) {
    let [parentNode, char] = stack.pop(); // Get the last node and character from the stack
    let currentNode = parentNode.children[char]; // Get the current node we are checking

    // Check if the current node has no children and is not the end of any other word
    if (Object.keys(currentNode.children).length === 0 && !currentNode.endOfWord) {
      // If yes, delete this node from its parent's children
      delete parentNode.children[char];
    } else {
      // If the node has children or is the end of another word, stop cleaning up
      break;
    }
  }

  return true; // Return true to indicate the word was successfully deleted
}


  // count method to count the number of words in the Trie
  count() {
    // Use a helper function to count words starting from the root
    return this.countHelper(this.root);
  }

  // countHelper is a recursive function to count words in the Trie
  countHelper(node) {
    let count = 0;

    // If the current node marks the end of a word, increment the count
    if (node.endOfWord) {
      count++;
    }

    // Recursively count words for each child node
    for (const char in node.children) {
      count += this.countHelper(node.children[char]);
    }

    return count;
  }

  // Replace: Deletes an old word and inserts a new one.
  replace(oldWord, newWord) {
    this.delete(oldWord); // Remove the old word
    this.insert(newWord); // Insert the new word
  }

  // FindAllWords: Retrieves all words that start with a specific prefix.
  // findAllWords method to find all words in the Trie that start with a given prefix
  findAllWords(prefix) {
    let node = this.root;

    // Traverse the Trie up to the end of the prefix
    for (const char of prefix) {
      // If the prefix doesn't exist, return an empty array
      if (!node.children[char]) {
        return [];
      }
      // Move to the next node (child node corresponding to char)
      node = node.children[char];
    }

    // Collect all words that start with the prefix
    let result = [];
    this.collectWords(node, prefix, result);
    return result;
  }

  // collectWords is a recursive function to collect all words starting from a given node
  collectWords(node, prefix, result) {
    // If this node marks the end of a word, add it to the result
    if (node.endOfWord) {
      result.push(prefix);
    }

    // Recursively collect words for each child node
    for (const char in node.children) {
      this.collectWords(node.children[char], prefix + char, result);
    }
  }
}

// Usage examples to demonstrate how the Trie works
const trie = new Trie();

trie.insert("MANGO");
trie.insert("ORANGE");
trie.insert("MAN");
trie.insert("MANAGER");

console.log(trie.search("MANGO")); // true
console.log(trie.search("MANG")); // false
console.log(trie.startsWith("MA")); // true
console.log(trie.startsWith("ORA")); // true

trie.delete("MANGO");
console.log(trie.search("MANGO")); // false

console.log(trie.count()); // 3
trie.replace("MAN", "SHE");
console.log(trie.search("SHE")); // true
console.log(trie.search("MAN")); // false

console.log(trie.findAllWords("MA")); // ["MANAGER"]
