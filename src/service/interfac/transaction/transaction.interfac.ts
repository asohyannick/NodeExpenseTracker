import { Document, Types } from "mongoose";
export enum TransactionType {
    INCOME = 'Income',
    EXPENSE = 'Expense',
};
export interface ITransactionInterfac extends Document {
    userId: Types.ObjectId; // Reference to the user making the transaction
    amount: number;                   // Transaction amount
    date: Date;                       // Date of the transaction
    description: string;              // Description of the transaction
    CategoryId: Types.ObjectId; // Reference to the category
    type:TransactionType;       // Type of transaction
}