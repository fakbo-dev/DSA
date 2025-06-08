class Node {

    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}


class DoublyLinkedList {

    constructor() {
        this.head = null;
    }

    push(data) {
        const newNode = new Node(data);
        let lastNode = this.head;
        if (this.head === null) {
            this.head = newNode;
            return newNode;
        }
        while (lastNode.next !== null) {
            lastNode = lastNode.next;
        }
        lastNode.next = newNode;
        newNode.prev = lastNode;
        return newNode;
    }
    traversal() {
        let current = this.head
        const arr = [];
        while (current !== null) {
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    }
    reverseTraversal() {
        let current = this.head;
        const arr = [];
        while (current.next !== null) {
            current = current.next;
        }
        while (current !== null) {
            arr.push(current.data);
            current = current.prev;
        }
        return arr;
    }
}


const myDoublyLinkedList = new DoublyLinkedList();
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
console.log(myDoublyLinkedList.traversal());
console.log(myDoublyLinkedList.reverseTraversal());
