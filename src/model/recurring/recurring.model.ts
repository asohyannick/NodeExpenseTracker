import mongoose, { Schema } from "mongoose";
import { IRecurringExpenseInterfac, RecurringFrequencyStatus } from "../../service/interfac/recurring/recurring.interfac";
const recurringExpenseSchema: Schema = new Schema<IRecurringExpenseInterfac>({
    userId: {
        type: Schema.ObjectId,
        ref: 'Auth',
        required: true,
    },
    amount: {
        type: Number,
    },
    CategoryId: {
        type: Schema.ObjectId,
        ref: 'Category',
    },
    frequency: {
        type: String,
        enum: Object.values(RecurringFrequencyStatus),
        default: RecurringFrequencyStatus.DAILY,
    },
    nextDueDate: {
        type: Date,
    },
    description: {
        type: String,
        trim: true,
    },
    isActive: {
        type: Boolean,
        default: false, // Recurring expenses are false by default
    },
}, { timestamps: true });

const RecurringExpense = mongoose.model<IRecurringExpenseInterfac>('RecurringExpense', recurringExpenseSchema);

export default RecurringExpense;