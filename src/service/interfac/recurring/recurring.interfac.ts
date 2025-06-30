import { Document, Types } from "mongoose";
export enum RecurringFrequencyStatus {
    DAILY = 'Daily',
    WEEKLY = 'Weekly',
    MONTHLY = 'Monthly',
    YEARLY = 'Yearly',
}
export interface IRecurringExpenseInterfac extends Document {
    userId: Types.ObjectId; // Reference to the user
    amount: number;                   // Amount of the recurring expense
    CategoryId: Types.ObjectId; // Reference to the category
    frequency: RecurringFrequencyStatus;  // Frequency of recurrence (e.g., Weekly, Monthly)
    nextDueDate: Date;                // Next due date for the expense
    description: string;              // Description of the recurring expense
    isActive: boolean;                // Indicates if the recurring expense is active
}
