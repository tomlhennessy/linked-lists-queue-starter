// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        const newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
        // time complexity: O(1) - adding a node to the head is a constant time operation
    }

    addToTail(val) {
        const newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
        // time complexity: O(1) - adding a node to the tail is a constant time operation
    }

    removeFromHead() {
        if (this.length === 0) return undefined;

        const removedHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.length--;
        return removedHead.value;
        // time complexity: O(1) - removing the head is a constant time operation
    }

    removeFromTail() {
        if (this.length === 0) return undefined;

        const removedTail = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length--;
        return removedTail.value;
        // time complexity: O(1) - removing the tail is a constant time operation
    }

    peekAtHead() {
        if (this.length === 0) return undefined;
        return this.head.value;
        // time complexity: O(1) - peeking at the head is a constant time operation
    }

    peekAtTail() {
        if (this.length === 0) return undefined;
        return this.tail.value;
        // time complexity: O(1) - peeking at the tail is a constant time operation
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
