class MyArraysList {
    constructor(capacity) {
        this.size = 0;
        this.capacity = capacity;
        this.myArray = [];
    }

    isEmpty() {
        return this.size === 0;
    }

    addElement(elements) {
        if (!Array.isArray(elements)) {
            elements = [elements];
        }
        if (this.size + elements.length > this.capacity) {
            throw new TypeError("Array is full");
        }
        elements.forEach(element => {
            this.myArray.push(element);
            this.size++;
        });
    }

    removeElement() {
        if (!this.isEmpty()) {
            this.size--;
            return this.myArray.pop();
        }
        return null;
    }

    getSize() {
        return this.size;
    }

    getCapacity() {
        return this.capacity;
    }
}


module.exports = MyArraysList;


if (require.main === module) {
    const arrList = new MyArraysList(3);
    console.log("Is empty:", arrList.isEmpty()); 
    arrList.addElement(10);
    arrList.addElement([20, 30]); 
    console.log("Size:", arrList.getSize());
    console.log("Removed:", arrList.removeElement());
    console.log("Is empty:", arrList.isEmpty()); 
}