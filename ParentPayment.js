export class ParentPayment {
    constructor(amount) {
        this.amount = amount
    }
    payment() {
        console.log("Parent payment amount is " + this.amount)
    }
}