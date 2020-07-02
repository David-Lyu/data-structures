// doubly linked list

class Node2 {
    constructor(value) {
            this.value = value;
            this.prev = null;
            this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value,
            prev: null,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node2(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node2(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(value, index) {
        const newNode = new Node2(value)
        const leader = this.traverseToIndex(index - 1)
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        const leader = this.traverseToIndex(index - 1)
        const follower = leader.next.next;
        leader.next = follower;
        follower.prev = leader;
        this.length--;
        return this;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index) {
            currentNode= currentNode.next;
            counter++;
        }
        return currentNode
    }

    printList() {
        const arr = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            arr.push(currentNode)
            currentNode = currentNode.next;
        }
        console.log(arr);
    }
}

const doublyLL = new DoublyLinkedList(10)
// doublyLL.append(5)
// doublyLL.append(2)
// doublyLL.prepend(1)
// doublyLL.insert(2,2)
// doublyLL.printList()
// doublyLL.remove(2,2)
// doublyLL.printList()
