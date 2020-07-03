//Stacks

    //google -> udemy -> youtube

    //in the stack
    // youtube --> udemy --> google

    //Array vs Link List?
    class Node {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }

    class StackLL {
        constructor() {
            this.top = null;
            this.bottom = null;
            this.length = 0;
        }

        peek() {
            console.log(this.top.value)
            return this.top.value;
        }

        push(value) {
            const newNode = new Node(value)
            if(!this.bottom) {
                this.top = this.bottom = newNode;
            } else {
                newNode.next = this.top;
                this.top = newNode;
            }
            this.length++
            return this;
        }

        pop() {
            if(!this.top) {
                return null;
            }

            if(this.top === this.bottom) this.bottom = null;

            const topValue = this.top.value;
            this.top = this.top.next;
            this.length--;
            return topValue;
        }

        isEmpty() {
            if (this.length === 0) {
                return true;
            }
        }
    }

    // const myLLStack = new StackLL();
    // myLLStack.push('google')
    // console.log(myLLStack.push('udemy'))
    // myLLStack.peek()
    // console.log(myLLStack.pop())
    // myLLStack.peek()
    // myLLStack.pop()

    class StackAA {
        constructor(){
            this.array = [];
            this.last = array[this.array.length - 1]
        }

        peek() {
            console.log(this.last);
            return this.last;
        }

        push(value) {
            this.array.push(value);
        }

        pop() {
            return this.array.pop();
        }
    }


//Queues

    // Matt -- Joy -- Samir -- Pavel
    // Arrays Linked Lists

    class Queue {
        constructor() {
            this.first = null;
            this.last = null;
            this.length = 0;
        }

        peek() {
            console.log(this.first)
            return this.first
        }

        enqueue(value) {
            const newNode = new Node(value)
            if(this.length === 0) {
                this.first = this.last = newNode;
            } else {
                this.last.next = newNode;
                this.last = newNode;
            }
            this.length++
            return this;
        }

        dequeue() {
            const currentTop = this.first;
            this.first = this.first.next;
            this.length--;
            return currentTop;
        }
    }