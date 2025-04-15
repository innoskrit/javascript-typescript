export interface Transaction {
  type: "DEPOSIT" | "WITHDRAWAL" | "TRANSFER";
  amount: number;
  timestamp: Date;
  description: string;
}
