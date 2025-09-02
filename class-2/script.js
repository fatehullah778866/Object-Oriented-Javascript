// Encapsulation using public properties

class Student{
    constructor(name, grade){
        this.name = name; // public property
        this._grade = grade; // convention: "_" means don't touch directly
}
// getter (read-only access)

get grade(){
    return this._grade;
}

// setter (control how value is changed)

set grade(value){
    if(value > 0 && value <= 100){
        this._grade = value;
    } else {
        document.write("Invalid grade. Please enter a grade between 1 and 100.");
    }
}

introduce(){
    document.write(`Hello, my name is ${this.name} and I am in grade ${this._grade}.`);
}
}

const student1 = new Student("Ali", 85);
student1.introduce();
document.write(`Current grade: ${student1.grade}`);// using getter
student1.grade = 90;                                // using setter
document.write(`Updated grade: ${student1.grade}`);

student1.grade = 150; // invalid grade


class BankAccount {
    #balance; // private field

    constructor(owner, balance){
        this.owner = owner;
        this.#balance = balance;
    }

    // method to deposite money

    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
            document.write(`Deposited: $${amount}. New balance: $${this.#balance}`);
        } else {
            document.write("Invalid deposit amount.");
        }
    
    }


    // method to withdraw money
    withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance -= amount;
            document.write(`Withdrew: $${amount}. New balance: $${this.#balance}`);
        } else {
            document.write("Invalid withdrawal amount.");
        }
    }

    // getter for balance
    getBalance(){
        return this.#balance;
    }
}

const amount = new BankAccount("Ali", 1000);
BankAccount.deposit(500);
BankAccount.withdraw(200);
document.write("Final Balanace", BankAccount.getBalance());

// 