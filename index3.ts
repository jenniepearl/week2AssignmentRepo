import type {myBankAccount} from "./interface3"

// Parent Class
class BankAccount implements myBankAccount{
    customerId: number;
    customerName: string = "";
    accountNumber: string = "";
    balance: number;

    constructor(customerId: number, customerName: string, accountNumber:string, balance:number ){
        this.customerId = customerId;
        this.customerName = customerName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount:number):void{
        if (amount <= 0){
            console.log(`Deposit must be greater than 0`);
            return;
        }else{
            this.balance +=amount;
            console.log(`Deposited ${amount}. NewBalance: ${this.balance}`);
        }
    }

    withdraw(amount:number):void{
        if (amount <= 0){
            console.log(`Withdrawal must be greater than 0`);
            return;
        }
        if (amount > this.balance){
            console.log(`Insufficient funds! Balance: ${this.balance}`);
            return;
        }else{
            this.balance -=amount;
            console.log(`Withdrew ${amount}. NewBalance: ${this.balance}`)
        }
    }

    getBalance(): number {
        return this.balance;
    }

    displayAccount(): void {
        console.log(`---Account Info--- ID:${this.customerId} Name:${this.customerName} Account No:${this.accountNumber} Balance:${this.balance}`);
        
    }

}
// Savings Account
class SavingsAccount extends BankAccount{
    interestRate: number = 0.05;

    constructor(customerId:number, customerName:string, accountNumber:string, balance:number){
        super(customerId,customerName,accountNumber,balance);
    }

    // savings plus interest
    deposit(amount: number): void {
        let interest = amount*this.interestRate;
        let totalCredit = amount+interest;
        this.balance += totalCredit;
        console.log(`Credited:${totalCredit}.NewBalance:${this.balance}`);
        
    }
    // Calculate Interest
    calculateInterest(amount:number): number{
        return amount * this.interestRate;
    }
}
// Business Account 
class BusinessAccount extends BankAccount{
    transactionFee:number=500;

    constructor(customerId:number, customerName:string, accountNumber:string, balance:number){
        super(customerId,customerName,accountNumber,balance);
    }

    // withdraw plus transaction fee
    withdraw(amount: number): void {
        let totalDebit = amount + this.transactionFee;
        if (totalDebit > this.balance){
            console.log(`Insufficient funds`);
            return;
        }else{
            this.balance -= totalDebit;
            console.log(`Withdrawal Successful, Total Debited:${totalDebit}.NewBalance:${this.balance}`);
            
        }
    }

}
// Premium Account
class PremiumAccount extends BankAccount{
    constructor(customerId:number, customerName:string, accountNumber:string, balance:number){
        super(customerId,customerName,accountNumber,balance);
    }

    withdraw(amount:number): void{
        let fee = 0;
        if (amount > 500000){
            fee = amount * 0.02;
        }
        let totalDebit = amount+fee;
        if (totalDebit > this.balance){
            console.log(`Insufficient funds`);
            return;
        }
        this.balance -= totalDebit;
        if (fee > 0){
            console.log(`Premium Withdraw:${amount},Processing fee 2%:${fee}, TotalDebited: ${totalDebit}.NewBalance: ${this.balance}`);
            
        }else{
            console.log(`Premium Withdraw:${amount}, No Fee, NewBalance: ${this.balance}`);
        }
    }
}
let savings1 = new SavingsAccount(1,"Jenna","234567",10000);
let business1 = new BusinessAccount(1,"Jenna","23456",20000);
let premium1 = new PremiumAccount(1,"Jenna","2345",30000);

console.log(`\n=== Savings Account Demo ===`);
savings1.displayAccount();
savings1.deposit(20000);
savings1.withdraw(20000);
savings1.displayAccount();

console.log(`\n=== Business Account Demo ===`);
business1.displayAccount();
business1.deposit(40000);
business1.withdraw(10000);
business1.displayAccount();

console.log(`\n=== Premium Account Demo ===`);
premium1.displayAccount();
premium1.deposit(600000);
premium1.withdraw(20000);
premium1.displayAccount();
