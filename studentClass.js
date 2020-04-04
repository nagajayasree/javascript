class student{
    constructor(firstname,lastname,standard,rollno,marks){
        this.firstname = firstname;
        this.lastname = lastname;
        this.standard = standard;
        this.rollno = rollno;
        this.marks = marks;
    }

    getStudentInfo(){
        return `${this.firstname} is studying ${this.standard} Standard,
        bearing Rollno.${this.rollno} and got ${this.marks} marks.`
    }

    getFullName(){
        return `Full name is ${this.firstname} ${this.lastname}.`;
    }

    getPercentage(){
        let percentage = (this.marks/600)*100;
        return `${this.firstname} has got ${percentage.toFixed(2)} percentage.`;
    }

    getAttendance(){
        let attendance = Math.floor(Math.random()*100)+1;
        return `${this.firstname}'s attendance percentage is ${attendance}`
    }
}

class marks extends student{
    constructor(firstname,lastname,marks,isActive){
        super(firstname,lastname,marks);
        this.marks = marks;
        this.isActive = isActive;
    }

    getGrade(){
        let percentage = (this.marks/600)*100;
        if(percentage >= 90) console.log('A');
        else if(percentage >= 80 && percentage < 90) console.log('B');
        else if(percentage >= 70 && percentage < 80) console.log('C');
        else if(percentage >= 60 && percentage < 70) console.log('D');
        else if(percentage >= 50 && percentage < 60) console.log('E');
        else if(percentage >= 40 && percentage < 50) console.log('F');
    }

    setStatus(){
        if(this.isActive != true){
            console.log('Absent in Class');
        }
        else console.log('Present in Class');
    }
}

let john = new student('John','David','3rd',1,550);
let sam = new student('Sammy','Nick','5th',21,536);
let mary = new marks('Mary','Flora',300,true);
let juliet = new marks('Juliet','Rose',450,false);

console.log(sam.getStudentInfo())
console.log(john.getFullName());
console.log(john.getPercentage());
console.log(sam.getAttendance());
console.log(juliet.getFullName());
mary.getGrade();
mary.setStatus();
juliet.setStatus();
