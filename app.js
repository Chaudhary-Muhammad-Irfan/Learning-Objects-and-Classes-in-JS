const Student = {
    name : "Chaudhary Muhammad Irfan" , 
    cgpa : 3.38 ,
    department : "SE" ,
    displayFunction : function () {
        console.log(`Name is ${name} CGPA is ${cgpa} Department is ${this.department}`)
    }
}