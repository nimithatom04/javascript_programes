class CoffeMachineAbstraction {
    #boilWater() {
        console.log("Heating Water")
    }
    #addMilk() {
        console.log("Add Milk")
    }
    #addSugar() {
        console.log("Add Sugar")
    }
    #addCoffepowder() {
        console.log('Add Coffee Powder')
    }
    makeYourCoffee() {
        console.log("Coffee Making Started")
        this.#boilWater()
        this.#addMilk()
        this.#addCoffepowder()
        this.#addSugar()

    }
    makeBlackCoffee() {
        console.log("Black coffee making started")
        this.#boilWater()
        this.#addCoffepowder()
        this.#addSugar()

    }
}
const myCoffee = new CoffeMachineAbstraction()
myCoffee.makeYourCoffee()
myCoffee.makeBlackCoffee()