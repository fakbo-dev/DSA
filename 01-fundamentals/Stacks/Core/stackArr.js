class Stack {

  constructor() {
    this.items = []
  }

  push(data) {
    this.items.push(data);
  }

  pop() {
    if (this.items) return 'the Stacks in empty'

    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.size()  > 0
  }
  size() {
    return this.items.length
  }
}


const myStack = new Stack();
myStack.push(0);
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
//console.log(myStack);
//console.log(myStack.pop());
//myStack.pop()
//myStack.pop()
//myStack.pop()
//myStack.pop()
//myStack.pop()
console.log(myStack)
//console.log(myStack.peek());
