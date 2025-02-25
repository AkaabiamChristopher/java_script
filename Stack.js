class Stack {
    constructor() {
        this.elements = [];
    }

    push(element) {
        this.elements.push(element);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.elements.pop();
        } else {
            return null;
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.elements[this.elements.length - 1];
        } else {
            return null;
        }
    }

    isEmpty() {
        return this.elements.length === 0;
    }

    size() {
        return this.elements.length;
    }
}
