class Node
{
  constructor(data)
  {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinaryTree
{
  constructor()
  {
    this.root = null
  }
  insert(value)
  {
    const newNode = new Node(value);
    if (!this.root) return this.root = newNode;
  }
}

const BFS = new BinaryTree();
BFS.insert(2);
BFS.insert(3);
BFS.insert(4);
console.log("[01-fundamentals/Tree/binaryTree.js:29] BFS = ", BFS)
BFS.insert(5);
