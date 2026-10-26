const person = {
    name: "Nimitha",
    lastName: "Tom",
    age: 30,
    isEmployed: true,
    //fullName: function () { console.log(this.name + this.lastName) }
}
console.log(person)

//dot notation .
console.log(person.name)

//Bracket notation  [""]
console.log(person["isEmployed"])

//adding element to the object
person.city = "Ernakulam"
console.log(person)

//update 
person.name = "Nimitha P"
console.log(person)

//Delete
delete person.isEmployed
console.log(person)

//person.fullName()
console.log(person)

for (let key in person) {
    console.log(key + ":" + person[key])
}

let student = {
    name: "Nikhitha",
    class: 2,
    Greet: function () { console.log("Good Morning " + this.name) }
}
student.Greet()


for (let key in student) {
    if (student[key] == "function()") {
        console.log(key())

    }
    else {
        console.log(key + ":" + student[key])
    }
}

//employee salary calculation
const employee = {
    name: "Nimitha Tom",
    employeeId: "EMP100",
    baseSalary: 40000,
    pf: 12,

    totalSalary: function () {
        let pfAmount = this.baseSalary * this.pf / 100
        let salary = this.baseSalary - pfAmount
        console.log("Total Salary: " + salary)
    }
}
for (let key in employee) {
    if (typeof employee[key]=="function"){
       // console.log(key+ ":")
        employee[key]()
    }
    else
    {
        console.log(key + ":" + employee[key])
    }
}
//employee.totalSalary()