const Stack = require('./Stack');

describe('Stack', () => {
    test('push', () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.peek()).toBe(1);
        stack.push(2);
        expect(stack.peek()).toBe(2);
    });

    test('pop', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
        expect(stack.pop()).toBeNull();
    });

    test('peek', () => {
        const stack = new Stack();
        stack.push(1);
        expect(stack.peek()).toBe(1);
        stack.pop();
        expect(stack.peek()).toBeNull();
    });

    test('is_empty', () => {
        const stack = new Stack();
        expect(stack.isEmpty()).toBe(true);
        stack.push(1);
        expect(stack.isEmpty()).toBe(false);
        stack.pop();
        expect(stack.isEmpty()).toBe(true);
    });

    test('size', () => {
        const stack = new Stack();
        expect(stack.size()).toBe(0);
        stack.push(1);
        expect(stack.size()).toBe(1);
        stack.push(2);
        expect(stack.size()).toBe(2);
        stack.pop();
        expect(stack.size()).toBe(1);
        stack.pop();
        expect(stack.size()).toBe(0);
    });
});
