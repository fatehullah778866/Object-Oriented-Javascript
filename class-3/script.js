// base class parent

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        document.write(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person{
    constructor(name, age, grade){
        super(name, age);// alls person constructor
        this.grade = grade;
    }

    study(){
        document.write(`${this.name} is studying. (Grade: ${this.grade})`);
    }
}


// another child class (Teacher inherits Person)

class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age); // calls person constructor   
        this.subject = subject;
    }

    teach(){
        document.write(`${this.name} is teaching ${this.subject}.`);
    }
}

// usage

const student1 = new Student("Alice", 20, "A");
student1.introduce();
student1.study();

const teacher1 = new Teacher("Mr. Smith", 40, "Mathematics");
teacher1.introduce();
teacher1.teach();


// multi-inheritance example

class TeachingAssistant extends Student{
    constructor(name, age, grade, subject){
        super(name, age, grade);
        this.subject = subject;
    }

    assist(){
        document.write(`${this.name} is assisting in ${this.subject}.`);
    }
}

// usage

const ta1 = new TeachingAssistant("Bob", 22, "B", "Physics");
ta1.introduce();
ta1.study();
ta1.assist();
