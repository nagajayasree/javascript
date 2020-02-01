//using static keyword in objects
class StaticExample{
    static display(){
        console.log("static method is called");
    }
}

StaticExample.display();


//class inheritance (using extends keyword)
class Student{
    constructor(name,rollno,section,marks){
        this.name = name;
        this.rollno = rollno;
        this.section = section;
        this.marks = marks;
    }
    studentInfo(){
        console.log(this.name + "," + this.rollno);
    }
}

class StdReport extends Student{
    getMarks(){
        console.log(this.marks);
    }
}

let student1 = new Student("js",34,"A",567);
student1.studentInfo();
let student2 = new StdReport("vimmy",17,"B",578);
student2.getMarks();

//method overriding
class Fan{
    checkFan(){
        console.log("fan is working");
    }
}

class Condition extends Fan{
    checkFan(){
        console.log("fan is not working");
    }
}

let f1 = new Fan();
f1.checkFan();
let f2 = new Condition();
f2.checkFan();


//super keyword
class Greet{
    printMsg(){
        console.log("Helloo");
    }
}

class Greeting extends Greet{
    printMsg(){
        super.printMsg();
        console.log("Good Morning");
    }
}

let message = new Greet();
message.printMsg();
let message2 = new Greeting();
message2.printMsg();
