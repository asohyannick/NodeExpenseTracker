import mongoose, { Schema } from "mongoose";
import { FrequencyStatus, IExpenseInterfac, PaymentMethodStatus } from '../../service/interfac/expense/expense.interfac';
const expenseSchema: Schema = new Schema<IExpenseInterfac>({
    userId: {
        type: Schema.ObjectId,
        ref: 'Auth', // Reference to the Auth model
        required: true,
    },
    amount: {
        type: Number,
    },
    Category: {
        type: Schema.ObjectId,
        ref: 'Category', // Reference to the Category model
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
        trim: true,
    },
    paymentMethod: {
        type: String,
        enum: Object.values(PaymentMethodStatus),
        default: PaymentMethodStatus.BANK_TRANSFER,
    },
    receiptUrl: {
        type: String,
        trim: true,
    },
    tags: {
        type: [String], // Array of tags for categorization
        default: [],
    },
    recurring: {
        type: Boolean,
        default: false, // Default to false for non-recurring expenses
    },
    frequency: {
        type: String,
        enum: Object.values(FrequencyStatus), // Defined frequencies for recurring expenses
        default: FrequencyStatus.DAILY,
    },
}, { timestamps: true });
const Expense = mongoose.model<IExpenseInterfac>('Expense', expenseSchema);
export default Expense;