import { GooglePay } from "./GooglePay.js"
import { ParentPayment } from "./ParentPayment.js"

class Paytm extends GooglePay {
    constructor(amount) {
        super(amount)
    }
    payment() {
        console.log("Paytm amount is " + this.amount)
    }
}

const p1 = new ParentPayment(1000)
const p2 = new GooglePay(2000)
const p3 = new Paytm(3000)
p1.payment()
p2.payment()
p3.payment()