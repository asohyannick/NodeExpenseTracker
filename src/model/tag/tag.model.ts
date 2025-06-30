import mongoose, { Schema } from "mongoose";
import { ITagInterfac } from "../../service/interfac/tag/tag.interfac";
const tagSchema: Schema = new Schema<ITagInterfac>({
    userId: {
        type:Schema.ObjectId,
        ref: 'Auth', // Reference to the Auth model
        required: true,
    },
    name: {
        type: String,
        unique: true,  // Ensure tag names are unique per user
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    color: {
        type: String,
        trim: true, // Optional color code for better identification
    },
}, { timestamps: true });

const Tag = mongoose.model<ITagInterfac>('Tag', tagSchema);

export default Tag;