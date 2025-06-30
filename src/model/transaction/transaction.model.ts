import mongoose, { Schema } from "mongoose";
import { ITransactionInterfac, TransactionType } from "../../service/interfac/transaction/transaction.interfac";
const transactionSchema: Schema = new Schema<ITransactionInterfac>({
    userId: {
        type: Schema.ObjectId,
        ref: 'Auth',
        required: true,
    },
    amount: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
        trim: true,
    },
    CategoryId: {
        type: Schema.ObjectId,
        ref: 'Category',
        required: true,
    },
    type: {
        type: String,
        enum: Object.values(TransactionType),
        default: TransactionType.EXPENSE,
    },
}, { timestamps: true });

const Transaction = mongoose.model<ITransactionInterfac>('Transaction', transactionSchema);

export default Transaction;