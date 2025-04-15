"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const uuid_1 = require("uuid");
class Account {
    constructor(holderName) {
        this.balance = 0;
        this.transactions = [];
        this.accountNumber = (0, uuid_1.v4)();
        this.holderName = holderName;
    }
    deposit(amount) {
        if (amount < 0)
            throw new Error("Amount must be greater than 0");
        this.balance += amount;
        this.transactions.push({
            type: "DEPOSIT",
            amount,
            timestamp: new Date(),
            description: "Deposit Done",
        });
    }
    getTransactionHistory() {
        return { name: this.holderName, transactions: this.transactions };
    }
}
exports.Account = Account;
