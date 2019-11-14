export class Account
{
  id: number;
  accountType: string;
  accountNumber: number;
  accountBalance: number;
  previousBalance: number;
  
  constructor(id: number, accountType: string, accountNumber: number, accountBalance: number, previousBalance: number) {
    this.id = id;
    this.accountType = accountType;
    this.accountNumber = accountNumber;
    this.accountBalance = accountBalance;
    this.previousBalance = previousBalance;
  }
}
