// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
        // time complexity: O(1) - inserting at the head is a constant time operation
    }

    addToTail(val) {
        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

        this.length++;
        return this;
        // Time complexity: O(n) - inserting at the tail requires traversing the list
    }

    removeFromHead() {
        if (!this.head) return undefined;

        const removedHead = this.head;
        this.head = this.head.next;
        this.length--;
        return removedHead;
        // time complexity: O(1) - removing from head is a constant time operation
    }

    removeFromTail() {
        if (!this.head) return undefined;

        if (this.length === 1) {
            const removedTail = this.head;
            this.head = null;
            this.length--;
            return removedTail;
        }

        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }

        const removedTail = current.next;
        current.next = null;
        this.length--;
        return removedTail;
        // time complexity: O(n) - removing the tail requires traversing the list
    }

    peekAtHead() {
        if (!this.head) return undefined;
        return this.head.value;
        // time complexity: O(1) - peeking at the head is a constant time operation
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
            // time complexity: O(n) - printing the list requires traversing it
        }
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
