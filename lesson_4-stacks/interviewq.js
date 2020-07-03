//implement a queue using stacks

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