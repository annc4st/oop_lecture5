/* Write class Person with constructor which obtain name and surname as parameters and create object with this public fields, also in Person sefine public method getFullName which returns the string with surname and name are written with a spaces

Write class Student which is inherited from Person but its constructor obtain also year as parameter. year is year of entry to the university. In class Student owerride method getFullName(middleName) so that this method return string surname, name and middleName are written with a spaces. Write method getCourse() which return the student's current course (from 1 to 6). The value of the course will be determined as the difference between the current year (to be determined independently) and the year of entry to the university.*/

// const stud1 = new Student("Petro", "Petrenko", 2019);
// console.log(stud1.getFullName("Petrovych"));
// console.log("Current course: " + stud1.getCourse());
// Petrenko Petro Petrovych
// Current course: 5
// const person = new Person('John', 'Doe');
// const result = person.getFullName();
// console.log(result)
// Doe John


class Person {
    //Your code
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
        
    }
    getFullName(){
        return this.surname + " " + this.name;
    }
}

// Your code for creating class Student
class Student extends Person {
    constructor(name, surname, year){
        super(name, surname);
        // this.middleName = middleName;
        // this.course = course;
        this.year = year;
    }
    getFullName(middleName){
        return this.surname + " " + this.name +" " + middleName;
    }
    
    getCourse(){
        //let currentYear =  new Date().getFullYear();
        return new Date().getFullYear() - this.year + 1;
       
    }
    
}