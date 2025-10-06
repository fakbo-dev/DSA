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

  preOrder(node = this.root)
  {
    if (node === null) return;
    console.log(node.data);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }

  inOrder(node = this.root)
  {
    if (node === null) return;
    this.inOrder(node.left);
    console.log(node.data);
    this.inOrder(node.right);
  }
  postOrder(node = this.root)
  {
    if (node === null) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.data);
  }
  getLevel()
  {

  }
}


const tree = new BinaryTree();
tree.root = new Node(89);
tree.root.left = new Node(52);
tree.root.right = new Node(98);
tree.root.left.left = new Node(87);
tree.root.left.right = new Node(51);
tree.root.right.left = new Node(15);
tree.root.right.right = new Node(60);
tree.root.left.left.left = new Node(88);
tree.root.left.left.right = new Node(90);
tree.root.left.right.left = new Node(59);
tree.root.left.right.right = new Node(97);
tree.root.right.left.left = new Node(69);
tree.root.right.left.right = new Node(52);
tree.root.right.right.left = new Node(19);
tree.root.right.right.right = new Node(59);
console.log(tree.preOrder());
// console.log(tree.inOrder());
// console.log(tree.postOrder());
