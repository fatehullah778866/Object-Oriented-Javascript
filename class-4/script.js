// base class
class Animal{
    speak(){
        document.write(`${this.name} makes a noise.`);
    }
}

// Dog class inheriting from Animal
class Dog extends Animal{
    speak(){
        document.write(`${this.name} barks.`);
    }
}

// Cat class inheriting from Animal
class Cat extends Animal{
    speak(){
        document.write(`${this.name} meows.`);
    }
}
class Cow extends Animal{
    speak(){
        document.write(`${this.name} moos.`);
    }
}

// usage
const dog = new Dog("Buddy");
dog.speak();

const cat = new Cat("Whiskers");
cat.speak();
const cow = new Cow("Bessie");
cow.speak();


// Simulated Method Overloading in JS
class Calculator{
    add(a,b,c){
        if(c !== undefined){
            document.write(a + b + c);
        }
        document.write(a + b);
    }
}

const calc = new Calculator();
calc.add(5, 10);
calc.add(5, 10, 15);
