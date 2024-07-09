// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // O(n): traverse the list and count the nodes
        // O(1): maintain a `length` property updated during insertions and deletions
        let current = this.head;
        let length = 0;

        while (current) {
            length++;
            current = current.next;
        }

        return length;
        // Time complexity: O(n)
    }

    sumOfNodes() {
        // traverse the list and accumulate the sum of node values
        // time complexity: O(n) - we have to visit each node to sum the values
        let current = this.head;
        let sum = 0;

        while (current) {
            sum += current.value;
            current = current.next;
        }

        return sum;
        // time complexity: O(n)
    }

    averageValue() {
        // traverse the list to get the sum and count of nodes, then compute the average
        // time complexity: O(n) - we have to visit each node to sum the values and count the nodes
        if (this.head === null) return 0;

        let current = this.head;
        let sum = 0;
        let count = 0;

        while (current) {
            sum += current.value;
            count++;
            current = current.next;
        }

        return sum / count;
        // time complexity: O(n)
    }

    findNthNode(n) {
        // traverse the list to the nth position and return the node
        // time complexity: O(n) - we may have to traverse up to the nth node
        let current = this.head;
        let count = 0;

        while (current && count < n) {
            current = current.next;
            count++;
        }

        return current ? current : null;
        // time complexity: O(n)
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
