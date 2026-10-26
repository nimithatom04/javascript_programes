"use strict";
class Employee {
    name;
    id;
    salary;
    constructor(name, Id, salary) {
        this.name = name;
        this.id = Id;
        this.salary = salary;
    }
    getDetails() {
        return this.name;
    }
}
const obj1 = new Employee("Nimitha", "ABC", 5000);
console.log(obj1.getDetails());
