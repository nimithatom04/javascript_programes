import { EmpPolymorphism } from "./EmpPolymorphism.js"

class TrainerPolymorphism extends EmpPolymorphism {
    constructor(name) {
        super()
        this.name = name
    }
    getrole() {
        console.log(this.name + " is a software trainer")
    }
}

const trainerpoly = new TrainerPolymorphism("Nimitha")
trainerpoly.getrole()
const employee = new EmpPolymorphism("Nikhitha")
employee.getrole()
