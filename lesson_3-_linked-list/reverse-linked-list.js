[1,10,16,88]
//want it reversed
[88,16,10,1]

class LinkedListReverse {
    constructor(value) {
        this.head = {
            value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(value, index) {
        if(index === 0) {
            this.prepend(value);
            this.length++;
            return this;
        }
        if(index >= this.length) {
            this.append(value);
            this.length++;
            return this;
        }

        const newNode = new Node(value)
        const leader = this.traverseToIndex(index - 1)
        const storage = leader.next
        leader.next = newNode;
        newNode.next = storage;
        this.length++;
        return this;
    }

    remove(index) {
        if(index >= this.length) index = this.length;

        const leader = this.traverseToIndex(index - 1);
        const trailer = leader.next.next;
        leader.next = trailer;
        this.length--;
        return this;
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    reverse() {
        if(!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        debugger;
    while(second) {
        const temp = second.next; //different that second.next below
        second.next = first;
        first = second;
        second = temp; // second is now the next value of the list
    }
    this.head.next = null;
    this.head = first;
    return this;
    }

    printList() {
        const arr = [];
        let currentNode = this.head;
        while(currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(arr, this.length);
    }
}
const linkedListReverse = new LinkedListReverse(10)
linkedListReverse.append(5)
linkedListReverse.append(16)
linkedListReverse.append(5)
linkedListReverse.append(8)
linkedListReverse.append(10)
linkedListReverse.reverse();
