class BankAccount {
    static accountsCount = 0;
    #balance;
    constructor(owner, balance) {
        this.owner = owner;
        this.#balance = balance;
        BankAccount.accountsCount++;
    }
    #logTransaction(type, amount) {
        console.log(`operation: ${type}, money: ${amount}`);
    }
    deposit(amount) {
        this.#balance += amount;
        this.#logTransaction("Deposit", amount);
    }
    withdraw(amount) {
        if (amount > this.#balance) {
            console.log("not enough balance");
        }
        this.#balance -= amount;
        this.#logTransaction("Withdraw", amount);
    }
    getBalance() {
        return this.#balance;
    }
    static getAccountsCount() {
        return BankAccount.accountsCount;
    }
}
