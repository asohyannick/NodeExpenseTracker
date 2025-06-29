import mongoose, { Schema } from "mongoose";
import { ICurrencyInterfac } from '../../service/interfac/currency/currency.interfac';
const currencySchema: Schema = new Schema<ICurrencyInterfac>({
    code: {
        type: String,
        unique: true, // Ensure currency codes are unique
        trim: true,
    },
    name: {
        type: String,
        trim: true,
    },
    symbol: {
        type: String,
        trim: true,
    },
    exchangeRate: {
        type: Number,
    },
    isActive: {
        type: Boolean,
        default: false, // Currencies are not active by default
    },
}, { timestamps: true });

const Currency = mongoose.model<ICurrencyInterfac>('Currency', currencySchema);

export default Currency;