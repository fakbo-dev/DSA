class Node {

  constructor(data) {
    this.data = data
    this.next = null
  }
}


class Stack {

  constructor() {
    this.head = null
    this.size = 0
  }

  push(data) {
    const newNode = new Node(data);
    this.size++;
    if (!this.head) {
      this.head = newNode;
      return
    }
    newNode.next = this.head
    this.head = newNode;
    return
  }
  pop() {
    if (!this.head) return null;

    const deleteNode = this.head;

    if (this.head.next === null) {
      this.head = null;
      this.size--;
      return deleteNode.data;
    }
    this.head = this.head.next
    deleteNode.next = null;
    this.size--;
    return deleteNode.data;
  }
  isEmpty() {
    return this.size === 0
  }
}


const myStack = new Stack();
myStack.push(0);
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
console.log(myStack.size);
