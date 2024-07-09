const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        const newNode = new SinglyLinkedNode(val);

        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this.length;
        // time complexity: O(1) - adding a node to the tail is a constant time operation
    }

    dequeue() {
        if (this.length === 0) return null;

        const removedHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length--;
        return removedHead.value;
        // time complexity: O(1) - removing the head is a constant time operation
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
