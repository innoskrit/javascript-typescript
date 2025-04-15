"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("./account");
var account = new account_1.Account("John Doe");
account.deposit(1000);
console.log(account.getTransactionHistory());
// console.log(account.getAccountNumber());
var account2 = new account_1.Account("John Doe");
account2.deposit(1000);
