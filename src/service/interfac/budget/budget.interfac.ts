import { Document, Types } from "mongoose";
export interface IBudgetInterfac extends Document {
    userId: Types.ObjectId;          // Reference to the user who owns the budget
    Category: Types.ObjectId;        // Reference to the category associated with the budget
    amount: number;                   // Total amount allocated for the budget
    startDate: Date;                  // Start date of the budget period
    endDate: Date;                    // End date of the budget period
    spentAmount: number;              // Amount already spent from the budget
    isActive: boolean;                // Indicates if the budget is currently active
}