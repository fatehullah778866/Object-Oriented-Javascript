# Object-Oriented-Javascript
This repository demonstrates key Object-Oriented Programming (OOP) concepts in JavaScript through practical examples. Each folder covers a major OOP principle with sample code and HTML files for easy experimentation.

## Folder Structure

- **class-1:** Object Literals, Constructor Functions, ES6 Classes
- **class-2:** Encapsulation (Getters/Setters, Private Fields)
- **class-3:** Inheritance (Single and Multi-level)
- **class-4:** Polymorphism (Method Overriding, Simulated Overloading)
- **class-5:** Abstraction (Abstract-like Classes)

---

## Details

### [class-1](class-1/index.html)

**Topics:**  
- Object literal syntax  
- Constructor functions  
- ES6 classes

**Classes & Examples:**  
- `student` (object literal with method)  
- `teacher` (created via `new Object()`)  
- `Car` (constructor function)  
- `Person` (ES6 class with `greet` method)

### [class-2](class-2/index.html)

**Topics:**  
- Encapsulation using public, protected (convention), and private fields  
- Getters and setters

**Classes & Examples:**  
- `Student`  
  - Public property: `name`
  - Protected-like property: `_grade`
  - Getter/setter for `grade`
  - `introduce()` method
- `BankAccount`  
  - Private field: `#balance`
  - Methods: `deposit`, `withdraw`, `getBalance`

### [class-3](class-3/index.html)

**Topics:**  
- Inheritance (extends, super)
- Multi-level inheritance

**Classes & Examples:**  
- `Person` (base class)
- `Student` (extends `Person`)
- `Teacher` (extends `Person`)
- `TeachingAssistant` (extends `Student`)

### [class-4](class-4/index.html)

**Topics:**  
- Polymorphism (method overriding)
- Simulated method overloading

**Classes & Examples:**  
- `Animal` (base class with `speak`)
- `Dog`, `Cat`, `Cow` (override `speak`)
- `Calculator` (simulated overloading in `add` method)

### [class-5](class-5/index.html)

**Topics:**  
- Abstraction (abstract-like base class)

**Classes & Examples:**  
- `Shape` (base class with abstract `draw` method)
- `Circle`, `Rectangle` (implement `draw`)

---

## How to Run

Open any `index.html` file in your browser to see the corresponding OOP concept in action.

---

## License

This project is for