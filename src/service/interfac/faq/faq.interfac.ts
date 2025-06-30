import { Document } from "mongoose";
export interface IFAQInterfac extends Document {
    question: string;                // The question being asked
    answer: string;                  // The answer to the question
    category?: string;               // Optional category for organizing FAQs
    date: Date;
}