import { Document, Types } from "mongoose";
export enum FrequencyStatus {
    DAILY = 'Daily',
    WEEKLY = 'Weekly',
    MONTHLY = 'Monthly',
    YEARLY = 'Yearly',
}
export enum PaymentMethodStatus {
    CREDIT_CARD = 'Credit card',
    DEBIT_CARD = 'Debit card',
    CASH = 'Cash',
    BANK_TRANSFER = 'Bank transfer',
    OTHERS = 'Others',
}
export interface IExpenseInterfac extends Document {
    userId: Types.ObjectId; // Reference to the user who created the expense
    amount: number;                  // The amount of the expense
    Category: Types.ObjectId; // Reference to the category of the expense
    description: string;             // Detailed description of the expense
    paymentMethod: PaymentMethodStatus;           // Payment method (e.g., Credit Card, Cash)
    receiptUrl?: string;             // URL of the uploaded receipt image
    tags: string[];                  // Array of tags for better categorization
    recurring: boolean;              // Indicates if the expense is recurring
    frequency?: FrequencyStatus;              // Frequency of recurrence (e.g., Weekly, Monthly)
    date: Date;                      // Date of the expense
}