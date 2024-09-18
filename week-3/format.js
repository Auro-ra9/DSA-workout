//trie
class Node{
    constructor(){
        this.children={};
        this.endOfWord=false;
    }
}
class Trie{
    constuctor(){
        this.root= new Node();
    }
}
//BST
class Node{
    constructor(value){
        this.value= value;
        this.left= null;
        this.right=null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null;
    }
}
//heap
class heap{
    constructor(){
        this.heap= [];
    }
}
//graph
class Graph{
    constructor(){
        this.adjacentList= {};
    }
}

const trie = new Trie();
const bst = new BinarySearchTree();
const heap = new heap();
const graph = new Graph();
