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
  getNodeCount()
  {
    const response = this.BFS();
    let i = 0;
    let count = 0;
    while (i <= response.length - 1)
    {
      let j = 0;
      while (j <= response[i].length - 1)
      {
        count++;
        j++;
      }
      i++;
    }
    return count;
  }
  preOrder(node = this.root)
  {
    if (node === null) return;
    console.log(node.value);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
  inOrder(node = this.root)
  {
    if (node === null) return;
    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }
  postOrder(node = this.root)
  {
    if (node === null) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.value);
  }
}

const tree = new BinaryTree();

const firstNode = new Node(19);
const secondNode  = new Node(9);
const thirdNode = new Node(16);
const fourthNode = new Node(24);
const fifthNode = new Node(75);
const sixthNode = new Node(17);

tree.root = firstNode;
tree.root.left = secondNode;
tree.root.right = thirdNode;
tree.root.left.left = fourthNode;
tree.root.left.right = fifthNode;
tree.root.right.left = sixthNode;
// console.log(tree.BFS());
// console.log(tree.getLevel());
// console.log(tree.getNodeCount());
// console.log(tree.preOrder());
// console.log(tree.inOrder());
console.log(tree.postOrder());
