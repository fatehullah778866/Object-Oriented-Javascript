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