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
    if (key !== "totalSalary") {
        console.log(key + ":" + employee[key])
    }
}
employee.totalSalary()