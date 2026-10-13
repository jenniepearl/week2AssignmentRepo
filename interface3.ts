export interface myBankAccount{
    customerId:number;
    customerName:string;
    accountNumber:string;
    balance:number;
    deposit(amount: number): void;
    withdraw(amount: number): void;
    getBalance(): number;
    displayAccount(): void;
}