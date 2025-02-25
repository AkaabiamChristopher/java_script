
const MyArraysList = require('./TestMyArraysList.js');

describe("MyArraysList", () => {
    let array;

    beforeEach(() => {
        array = new MyArraysList(3);
    });

    test("should be empty initially", () => {
        expect(array.isEmpty()).toBe(true);
    });

    test("should add an element and increase size", () => {
        array.addElement(1);
        expect(array.getSize()).toBe(1);
    });

    test("should remove elements correctly", () => {
        array.addElement(10);
        array.addElement(20);
        expect(array.removeElement()).toBe(20);
        expect(array.getSize()).toBe(1);
        expect(array.removeElement()).toBe(10);
        expect(array.isEmpty()).toBe(true);
        expect(array.removeElement()).toBeNull();
    });

    test("should return correct size", () => {
        expect(array.getSize()).toBe(0);
        array.addElement(42);
        expect(array.getSize()).toBe(1);
    });

    test("should return correct capacity", () => {
        expect(array.getCapacity()).toBe(3);
        array.addElement(100);
        array.addElement(200);
        array.addElement(300);
        expect(array.getCapacity()).toBe(3);
    });
});