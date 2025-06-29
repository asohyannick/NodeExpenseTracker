import { Document } from 'mongoose';
export interface ICurrencyInterfac extends Document {
    code: string;                // Currency code (e.g., USD, EUR)
    name: string;                // Full name of the currency (e.g., US Dollar, Euro)
    symbol: string;              // Symbol used for the currency (e.g., $, €)
    exchangeRate: number;        // Exchange rate against a base currency
    isActive: boolean;           // Indicates if the currency is currently active
}