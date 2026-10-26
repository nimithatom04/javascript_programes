class SalaryEncaps {
    #salary

    constructor(employeename, salary) {
        this.employeename = employeename
        this.#salary = salary
    }

    updateSalary(newsalary) {
        this.#salary = newsalary
    }

    deductSalary(deductamount) {
        this.#salary = this.#salary - deductamount
    }

    showSalary() {
        console.log("Employee Name is " + this.employeename)
        console.log("Current Salary is " + this.#salary)
    }
}

const salaryobj = new SalaryEncaps("Nimitha", 30000)

salaryobj.showSalary()

salaryobj.updateSalary(35000)
salaryobj.showSalary()

salaryobj.deductSalary(5000)
salaryobj.showSalary()
