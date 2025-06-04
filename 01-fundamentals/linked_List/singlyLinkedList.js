//Definition of a node in a singly linked list
class Node {
    constructor(data) {
    //Data Part of the node
    this.data = data;
    this.next = null;
  }
}
class Linkedlist {
    constructor(node) {
        this.head = new Node(node);
        this.tail = this.head;
    }

    push(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        return newNode;
    }

    traversal() {
    let current = this.head;

        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }

    find(data) {
        let current = this.head;
        let response = false;
        while (current !== null) {
            if (current.data === data) response = true;

            current = current.next;
        }

        return response
    }

    length() {
        let length = 0;
        let current = this.head

        while (current !== null) {


            length++;
            current = current.next;
        }

        return length;
    }

    unshift(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;

        return newNode;
    }

    insertForIndex(position,data) {
        const newNode = new Node(data);
        let length = 1;
        let current = this.head;
        if (position === length || position < length) {
            newNode.next = this.head;
            this.head = newNode;
            return newNode;
        }
        while (current !== null) {
            if (current.next === null && position - 1 > length ) {
                return console.error('the position is not in range');
            }
            if (length === position - 1) {
                let temp = current.next;
                current.next = newNode;
                newNode.next = temp;
            }
            length++;
            current = current.next;
        }
    }
    shift() {
        if (this.head === null) return null;

        const temp = this.head;
        this.head = this.head.next;
        return temp;
    }
    pop() {
        if (!this.head || !this.head.next) return null;

        let current = this.head;

        while (current.next.next !== null) {
            current = current.next
        }
       current.next = null;
        this.tail = current;
        return this.head;
    }

    deleteForIndex(index) {
        if (!this.head) return null;
        if (index < 0) return "Index must be greater than 0";
        let length = 0;
        let result;
        let current = this.head;
        while (current !== null) {

            if (length + 1 === index) {
                const temp = current.next;
                current.next = temp.next;
                result = temp;
            }
            length++;
            current = current.next;
        }
        if (index > length) return 'Invalid index';
        return result;
    }

    changeData(index,data) {
        if (index < 0) return;
        let length = 1;
        let current = this.head;
        let result;
        while (current !== null) {
            if (length === index) {
                current.data = data;
                result = current;
            }
            length++;
            current = current.next;
        }
        if (index > length) return 'Invalid Value'
        return result;
    }
}

const myLinkedList = new Linkedlist(1);

myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);
myLinkedList.unshift(0);
myLinkedList.shift();
myLinkedList.pop();
//console.log(myLinkedList);
//console.log(myLinkedList.deleteForIndex(1));
//console.log(myLinkedList);
console.log(myLinkedList.changeData(1,'banana'));
console.log(myLinkedList);
