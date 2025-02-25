class Shape {
    #name;
    constructor(name){
        this.#name = name;
    }
    getName(){
        return this.name;
    }
}

class Rectangle extends Shape {
    constructor(name,side1,side2){
        super(name);
        this.side1;
        this.side2;
    }
    getArea(){
        return this.side1 * this.side2;
    }
    isSquare(){
        return this.side1 === this.side2;
    }
}
const rect = new Rectangle("MyRectangle", 20, 20 );

console.log(`
Name: ${rect.getName()}
Side1: ${rect.side1}, Side2: ${rect.side2}
Area: ${rect.getArea()}
Is Square: ${rect.isSquare()}`);