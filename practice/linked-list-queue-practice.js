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
        if (!this.head) return null;

        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
        // time complexity: O(n)
    }

    reverse() {

    }

    reverseInPlace() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
        // time complexity: O(n)
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
        if (!this.head) return null;

        let slow = this.head;
        let fast = this.head;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
        // time complexity: O(n)
    }

    reverse() {

    }

    reverseInPlace() {
        let current = this.head;
        let temp = null;

        while (current) {
            temp = current.next;
            current.next = current.prev;
            current.prev = temp;
            if (!temp) {
                this.tail = this.head;
                this.head = current;
            }
            current = temp;
        }
        // time complexity: O(n)
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
