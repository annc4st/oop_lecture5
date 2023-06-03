/* Create class Worker, constructor of it obtain parameters: fullName:string, dayRate:number, workingDays:number, experience save them in private fields. In class define next public methods:

getSalary - return worker salary which calculate as dayRate*workingDays
getSalaryWithExperience - return worker salary which calculate as dayRate*workingDays*experience
getter and setter on fields fullName, dayRate and experience
getter on field workingDays and method addWorkingDays(n:number), whick add n to workingDays
In class Worker implement method sortBySalary which obtain as parameter array of workers and return new array with workers sorted from lowest to highest salary.*/

/*
const worker = new Worker("John Johnson", 20, 23, 1);
console.log(worker.fullName)
console.log(worker.getSalary())
console.log(worker.getSalaryWithExperience())
John Johnson
460
460
const worker = new Worker("Adam Oliver", 100, 1, 2);
worker.dayRate = 200;
worker.experience = 3;
worker.addWorkingDays(29);
console.log(worker.getSalary());
console.log(worker.getSalaryWithExperience());
6000
18000
const worker1 = new Worker("David Brown", 450, 20, 1);
const worker2 = new Worker("Adam Oliver", 780, 15, 2);
const worker3 = new Worker("John Johnson", 325, 30, 1);
const arrayOfWorkers = [worker1, worker2, worker3];
const sortedArrayOfWorkers = Worker.sortBySalary(arrayOfWorkers);
console.log("Before Sorting")
arrayOfWorkers.forEach((worker)=>console.log(worker.fullName));
console.log("After Sorting")
sortedArrayOfWorkers.forEach((worker)=>console.log(worker.fullName));
Before Sorting
David Brown
Adam Oliver
John Johnson
After Sorting
David Brown
John Johnson
Adam Oliver
*/

class Worker {
    //Your code here
    #fullName;
    #dayRate;
    #workingDays;
    #experience;
    
    constructor(fullName, dayRate, workingDays, experience) {
        this.#fullName = fullName;
        this.#dayRate = dayRate;
        this.#workingDays = workingDays;
        this.#experience = experience;
    }
 
    //getter and setter on fields fullName, dayRate and experience
    get fullName() {
        return this.#fullName;
    }
    
    set fullName(value) {
        this.#fullName = value;
    }
    
    get dayRate() {
        return this.#dayRate;
    }
    
    set dayRate(value) {
        this.#dayRate = value;
    }

    get experience() {
        return this.#experience;
    }
    
    set experience(value) {
        this.#experience = value;
    }
    
    get workingDays(){
        return this.#workingDays;
    }
    
    addWorkingDays(n){
        this.#workingDays += n;
    }
    
    getSalary(){
        return this.#workingDays * this.#dayRate;
    }
    
    getSalaryWithExperience() {
        return this.#dayRate * this.#workingDays * this.#experience;
    }
    
    static sortBySalary(arrWorkers){
        return [...arrWorkers].sort((x, y) => x.getSalary() - y.getSalary());
    }
}