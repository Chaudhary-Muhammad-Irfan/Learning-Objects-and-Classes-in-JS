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
    constructor()
    {
        // To first call the constructor of parent class before the child class constructor we use super key word.
        super();
        console.log("Doctor Constructor");
    }
    treat()
    {
        console.log("Treat Patient");
    }
}

let doctor=new Doctor();




// Error handling in JS

let a=5;
let b=3;
try{
    console.log(a+c);
    // agr JS m error a jaye kissi line m to us k baad wali lines execute ni hoti . 
    // agr hummy doubt ho k is line  m error a skta ha to ussy try catch block m likhty ha .
}
catch(err)
{
    console.log(err);
}