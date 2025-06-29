import mongoose, { Schema } from "mongoose";
import { IBudgetInterfac } from "../../service/interfac/budget/budget.interfac";
const budgetSchema: Schema = new Schema<IBudgetInterfac>({
  userId: {
        type: Schema.ObjectId,
        ref: 'Auth', // Reference to the Auth model
        required: true,
    },
    Category: {
        type: Schema.ObjectId,
        ref: 'Category', // Reference to the Category model
        required: true,
    },
    amount: {
        type: Number,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    spentAmount: {
        type: Number,
    },
    isActive: {
        type: Boolean,
        default: false, // Budgets are false by default
    },
}, { timestamps: true});
const Budget = mongoose.model<IBudgetInterfac>('Budget', budgetSchema);
export default Budget;