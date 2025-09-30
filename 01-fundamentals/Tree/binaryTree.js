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

  insert(data)
  {
    const newNode = new Node(data);
    if (this.root === null) return this.root = newNode;
    let temp = this.root

    while (true)
    {
      if (temp.left === null)
      {
        return temp.left = newNode;
      }
      else if (temp.right === null)
      {
        return temp.right = newNode;
      }
    }
  }
}

const tree = new BinaryTree();
tree.insert(89);
tree.insert(52);
tree.insert(98);
tree.insert(87);
console.log("tree = ", tree)
