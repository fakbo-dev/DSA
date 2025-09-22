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
      else
      {

      }
    }
  }
}

const tree = new BinaryTree();
tree.insert(89);
console.log("tree = ", tree)
