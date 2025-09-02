// Base Abstract-like class
class Shape{
    constructor(name){
        this.name = name;
    }
    draw(){
        throw new Error("Method 'draw()' must be implemented.");
    }
}

// Derived class for Circle
class Circle extends Shape{
    draw(){
        document.write(`Drawing a circle named ${this.name}.`);
    }
}

// Derived class for Rectangle
class Rectangle extends Shape{
    draw(){
        document.write(`Drawing a rectangle named ${this.name}.`);
    }
}

// Usage
const circle = new Circle("MyCircle");
circle.draw();

const rectangle = new Rectangle("MyRectangle");
rectangle.draw();
