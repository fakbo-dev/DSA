class Queue {
  constructor() {
    this.items = []
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (!this.items) return 'the queue is empty'
  return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
     return !this.items ? true  :  false;
  }
  size() {
    return this.items.length
  }

  clear() {
    return this.items.splice(0,this.items.this.size());
  }
  print() {

    return this.items.forEach(element => console.log(element));
  }
}


const queue = new Queue
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
//console.log(queue.dequeue());
//console.log(queue.peek());
//console.log(queue.isEmpty());
//console.log(queue.size());
queue.print();
