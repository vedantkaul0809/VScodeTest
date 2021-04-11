export interface ITransactions {
    //TId: number;
    FromAccountNumber: number;
    ToAccountNumber: number;
    TransactionType: string;
    Amount: number;
    MaturityInstruction: string;
    Remark: string;
    TransactionDate: Date;
}