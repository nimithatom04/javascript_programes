import { ParentPayment } from "./ParentPayment.js"

export class GooglePay extends ParentPayment {
    constructor(amount) {
        super(amount)
    }
    payment() {
        console.log("Google Pay amount is " + this.amount)
    }
}