class Node {

  constructor(data) {
    this.data = data
    this.next = null
  }
}
class Queue {

  constructor() {
    this.rear = null
    this.front = null
    this.size = 0
  }


  enqueue(data) {
    const newNode = new Node(data);
    if (!this.rear) {
      this.rear = newNode;
      this.front = newNode;
    }
    this.rear.next = newNode;
    this.rear = newNode;
    this.size++;
  }
  dequeue() {
    if (!this.front) return null;
    if (!this.front.next) {
      const deletedNode = this.front;
      this.front = null;
      this.rear = null;
      this.size = 0;
      return deletedNode;
    }
    const deletedNode = this.front;
    this.front = this.front.next;
    this.size--;
    return deletedNode;
  }
  peek() {
    if (!this.front) return null;
    return this.front.data;
  }
  isEmpty() {
    return this.size <= 0
  }
  size() {
    return this.size;
  }
  clear() {
    if (!this.front && !this.rear) return null

  }
}


const myQueue = new Queue();
myQueue.enqueue(0);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
//console.log(myQueue);
//myQueue.dequeue();
//console.log(myQueue);
console.log(myQueue.peek());
