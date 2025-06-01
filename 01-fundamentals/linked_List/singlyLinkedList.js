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
}

const myLinkedList = new Linkedlist(1);

myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);
myLinkedList.unshift(0);
myLinkedList.insertForIndex(4,10);
console.log(myLinkedList);
