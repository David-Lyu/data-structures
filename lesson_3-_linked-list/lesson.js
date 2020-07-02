const basket = ['apples', 'grapes', 'pears'];

//psuedocode
//linked list: apples --> grapes --> pears
// arrows are pointers to the next node

//apples
//8947 -->  grapes  (apples has a memory at 8947 which then points to grapes)
            //8742 -->  pears
                        //372 --> null

                        
                        
                        
//Example of what a linked list looks like
    //ex 10 --> 5 ---> 16
let myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}

//creating Link List
// class LinkedList {
//     constructor(value) {
//         this.head = {
//             value,
//             next: null
//         }
//         this.tail = this.head;
//         this.length = 1;
//     }
//     append(value) {
//         const newNode = {
//             value,
//             next: null
//         }

//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//         return this;
//     }
//     prepend(value) {
//         const newNode = {
//             value,
//             next: null
//         }
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return this;
//     }
// }


//dry version singly linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
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

const linkedList = new LinkedList(10);
// linkedList.append(5)
// linkedList.append(16)
// linkedList.prepend(2)
// linkedList.insert(12,2)
// linkedList.printList();
// linkedList.remove(2);
// linkedList.printList();