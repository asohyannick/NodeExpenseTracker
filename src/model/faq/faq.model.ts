import mongoose, { Schema } from "mongoose";
import { IFAQInterfac } from "../../service/interfac/faq/faq.interfac";
const faqSchema: Schema = new Schema<IFAQInterfac>({
    question: {
        type: String,
        trim: true,
    },
    answer: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        trim: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

const FAQ = mongoose.model<IFAQInterfac>('FAQ', faqSchema);

export default FAQ;