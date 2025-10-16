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
    if (this.root === null) return [];

    const q = [];
    const response = [];
    let currentLevel = 0;
    q.push(this.root);

    while (q.length > 0)
    {
      response.push([]);
      let i = 0;
      const len = q.length - 1;
      while (i <= len)
      {
        let node = q.shift();
        response[currentLevel].push(node.value);
        if ( node.left !== null) q.push(node.left);
        if ( node.right !== null) q.push(node.right);
        i++;
      }
      currentLevel++;
    }

    return response;
  }

  getLevel()
  {
    const res = this.BFS();

    return res.length -1;
  }

  getNodeCount()
  {
    const res = this.BFS();
    let count = 0;
    let i = 0;

    while (i <= res.length - 1)
    {
      let j = 0;

      while (j <= res[i].length -1)
      {
        count++;
        j++;
      }
      i++
    }
    return count;
  }
  // root -> left -> right
  preOrder()
  {
    const response = [];
    if (this.root === null) return response;
    const stack = []
    stack.push(this.root);

    while (stack.length > 0)
    {
      const node = stack.pop();
      response.push(node.value);

      if (node.right !== null) stack.push(node.right);
      if (node.left !== null) stack.push(node.left);
    }
    return response;
  }
  // left -> root -> right
  // use stack
  inOrder()
  {
    const s = [];
    const response = [];
    let current = this.root;
    while (current !== null || s.length > 0)
    {

      if (current !== null)
      {
        s.unshift(current);
        current = current.left;
      } else {
      let removedNode = s.shift();
      response.push(removedNode.value);
      current = removedNode.right;
      }

    }

    return response.join(" -> ")
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
// console.log(tree.BFS())
// console.log(tree.getLevel());
// console.log(tree.getNodeCount());
// console.log(tree.preOrder());
// console.log(tree.inOrder());

const treeTwo = new Tree();

treeTwo.root = new Node(1);
treeTwo.root.left = new Node(2);
treeTwo.root.right = new Node(3);
treeTwo.root.left.left = new Node(4);
treeTwo.root.left.right = new Node(5);

console.log(treeTwo.inOrder());
