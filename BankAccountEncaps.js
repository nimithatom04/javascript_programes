class BankAccountEncaps {
#currentabalance
    constructor(accountholder, currentabalance) {
        this.accountholder = accountholder
        this.#currentabalance = currentabalance

    }
    deposit(depositamount) {
        this.#currentabalance = this.#currentabalance + depositamount

    }
    withdraw(withdrawamount) {
        this.#currentabalance = this.#currentabalance - withdrawamount

    }
    showBalance() {
        console.log("Current Balance is " + this.#currentabalance)
    }
}

const depositobj = new BankAccountEncaps("Nimitha", 5000)
depositobj.showBalance()
depositobj.deposit(5000)
depositobj.showBalance()
depositobj.withdraw(200)
depositobj.showBalance()



