const Student = {
    name : "Chaudhary Muhammad Irfan" , 
    cgpa : 3.38 ,
    department : "SE" ,
    displayFunction : function () {
        console.log(`Name is ${name} CGPA is ${cgpa} Department is ${this.department}`)
    }
}

// Creating a class that will have a function and we will use that function in the prototype of an other class.

const Employee = {
    taxOnSalary() {
        console.log("The tax on salry is 10%");
    }
};

// Now create an employee that has salary as variable and uses this class as prototype.
const Chaudhary ={
    salary:4000
};
Chaudhary.__proto__=Employee;

// Creating first class.
class Car {
    constructor(color)
    {
        this.color=color;
    }
    start(){
        console.log("Start Car");
    }

    stop() {
        console.log("Stop Car");
    }
}

let mehran=new Car("white");

// Inheritance

class Person{
    constructor()
    {
        
    }
    eat()
    {
        console.log("Eat food");
    }
    drink(){
        console.log("Drink Water");
    }
}

class Doctor extends Person
{
    treat()
    {
        console.log("Treat Patient");
    }
}

let doctor=new Doctor();