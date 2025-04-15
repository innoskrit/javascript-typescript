import { Account } from "./account";

var account = new Account("John Doe");
account.deposit(1000);
console.log(account.getTransactionHistory());
// console.log(account.getAccountNumber());

var account2 = new Account("John Doe");
account2.deposit(1000);
