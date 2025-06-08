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
    print() {
        let current = this.head

        while (current !== null) {
        console.log(current.data);
            current = current.next;
        }
    }
}


const myDoublyLinkedList = new DoublyLinkedList();
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
myDoublyLinkedList.print();
