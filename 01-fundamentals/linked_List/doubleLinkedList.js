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
        if (this.head === null)  return [];
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
    length() {
        let length = 0;
        if (this.head === null) return 0;
        let current = this.head;

        while (current !== null) {
        length++;
            current = current.next
        }
        return length;
    }

    unshift(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return newNode;
        }
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        return newNode;
    }
    insert(index,data) {
        if (index < 0 ) return 'the index is lower than the first node'
        if (index === 0) {this.unshift(data); return;}
        if (index === this.length()) {this.push(data); return;}
        if (index > this.length()) return 'the index is greater than the List'
        const newNode = new Node(data)
        let length = 0;;
        let current = this.head;

        while (current !== null) {

            if (length + 1 === index) {
                let temp = current.next;
                current.next = newNode;
                newNode.prev = current;
                if (temp !== null) {
                newNode.next = temp;
                temp.prev = newNode;
                }
                return newNode;
            }

            length++
            current = current.next;
        }
        return newNode;
    }
}


const myDoublyLinkedList = new DoublyLinkedList();
myDoublyLinkedList.push(1);
myDoublyLinkedList.push(2);
myDoublyLinkedList.push(3);
myDoublyLinkedList.push(4);
//console.log(myDoublyLinkedList.traversal());
//console.log(myDoublyLinkedList.reverseTraversal());
//console.log(myDoublyLinkedList.length());
myDoublyLinkedList.unshift(0);
//console.log(myDoublyLinkedList);
console.log(myDoublyLinkedList.insert(2,'minus'));
