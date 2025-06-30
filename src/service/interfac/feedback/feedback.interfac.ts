import { Document, Types } from "mongoose";
export interface IFeedbackInterfac extends Document {
    userId: Types.ObjectId; // Reference to the user providing feedback
    message: string;                  // The feedback message
    rating?: number;                  // Optional rating (e.g., 1 to 5)
}