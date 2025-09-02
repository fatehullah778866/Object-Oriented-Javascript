// object literal example
const student = {
    name : "Ali",
    age : 21,
    course : "Computer Science",


// method
introduce: function(){
    document.write("Hi, I'm " + this.name + ". I'm " + this.age + " years old and I'm studying " + this.course + ".");
   }
};

document.write(student.name);
student.introduce();


// using new object()

const teacher = new Object();
teacher.name = "Mr. Khan";
teacher.subject = "Math";
teacher.teach = function(){
    document.write("Teaching " + this.subject);
};

teacher.teach();

// constructor function

function Car(model, year){
    this.model = model;
    this.year = year;
    this.drive = function(){
        document.write("Driving a " + this.year + " " + this.model);
    };
}

const car1 = new Car("Toyota", 2022);
const car2 = new Car("Honda", 2023);

car1.drive();
car2.drive();




// ES6 classes

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        document.write("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);
person1.greet();
person2.greet();

