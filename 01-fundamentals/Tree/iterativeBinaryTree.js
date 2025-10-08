class Node
{
  constructor(value)
  {
    this.value = value
    this.left = null
    this.right = null
  }
}

class Tree
{
  constructor()
  {
    this.root = null
  }

  BFS()
  {
    const q = [];
    const result = [];
    let current = this.root;
    q.push(current.value);
    while (q.length > 0)
    {
      result.push(q.shift());
      q.push(current.left.value);
      q.push(current.right.value);
    }
  }
}


const tree = new Tree();

tree.root = new Node(5);
tree.root.left = new Node(12);
tree.root.right = new Node(13);
tree.root.left.left = new Node(7);
tree.root.left.left.left = new Node(17);
tree.root.left.left.right = new Node(23);
tree.root.right.left = new Node(14);
tree.root.right.left.left = new Node(27);
tree.root.right.left.right = new Node(3);
tree.root.right.right = new Node(2);
tree.root.right.right.left = new Node(8);
tree.root.right.right.right = new Node(11);
console.log(tree.BFS());
