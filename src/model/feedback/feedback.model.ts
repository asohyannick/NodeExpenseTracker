import mongoose, { Schema } from "mongoose";
import { IFeedbackInterfac } from '../../service/interfac/feedback/feedback.interfac';
const feedbackSchema: Schema = new Schema<IFeedbackInterfac>({
    userId: {
        type: Schema.ObjectId,
        ref: 'Auth',
        required: true,
    },
    message: {
        type: String,
        trim: true,
    },
    rating: {
        type: Number,
    },
}, { timestamps: true });

const Feedback = mongoose.model<IFeedbackInterfac>('Feedback', feedbackSchema);

export default Feedback;