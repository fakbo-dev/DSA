class Node
{
  constructor(value)
  {
    this.value = value
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

  BFSHANDLER(node,level,queue)
  {
    if (node === null) return;

    if (queue.length <= level) queue.push([]);

    queue[level].push(node.value);
    this.BFSHANDLER(node.left,level + 1, queue);
    this.BFSHANDLER(node.right,level + 1, queue);
  }
  BFS()
  {
    const res = [];

    this.BFSHANDLER(this.root,0,res);
    return res;
  }
  getLevel()
  {
    const response = this.BFS();
    return response.length - 1;
  }
}

const tree = new BinaryTree();

//Create the Nodes
const firstNode = new Node(19);
const secondNode  = new Node(9);
const thirdNode = new Node(16);
const fourthNode = new Node(24);
const fifthNode = new Node(75);
const sixthNode = new Node(17);

// link the binary Tree

tree.root = firstNode;
tree.root.left = secondNode;
tree.root.right = thirdNode;
tree.root.left.left = fourthNode;
tree.root.left.right = fifthNode;
tree.root.right.left = sixthNode;
console.log(tree.BFS());
console.log(tree.getLevel());
