
let bankAccount = {
    owner: "Alice",
    balance: 500,
    deposit: function(amount) {
        this.balance += amount;
    },
    withdraw: function(amount) {
        if (this.balance - amount >= 0) {
            this.balance -= amount;
           return true;
        } else {
            return false;
        }
    }
};

bankAccount.deposit(200);

let withdrawalSuccessful = bankAccount.withdraw(1000);

console.log("Withdrawal successful:", withdrawalSuccessful);
console.log("Final balance:", bankAccount.balance);
