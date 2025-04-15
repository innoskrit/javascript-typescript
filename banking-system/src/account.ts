import { Transaction } from "./transaction";
import { v4 as uuidv4 } from "uuid";

export class Account {
  protected balance: number = 0;
  protected transactions: Transaction[] = [];
  protected accountNumber: string;
  protected holderName: string;

  constructor(holderName: string) {
    this.accountNumber = uuidv4();
    this.holderName = holderName;
  }

  deposit(amount: number): void {
    if (amount < 0) throw new Error("Amount must be greater than 0");
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
