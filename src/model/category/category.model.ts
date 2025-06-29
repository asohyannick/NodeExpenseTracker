import mongoose, { Schema } from "mongoose";
import { ICategoryInterfac } from "../../service/interfac/category/category.interfac";
const categorySchema: Schema = new Schema<ICategoryInterfac>({
    userId: {
        type:Schema.ObjectId,
        ref: 'Auth', // Reference to the Auth model
        required: true,
    },
    name: {
        type: String,
        trim: true,
        unique: true, // Ensure category names are unique per user
    },
    description: {
        type: String,
        trim: true,
    },
    icon: {
        type: String,
        trim: true,
    },
    color: {
        type: String,
        trim: true,
    },
    isActive: {
        type: Boolean,
        default: false, // Categories are false by default
    },
}, { timestamps: true });
const Category = mongoose.model<ICategoryInterfac>('Category', categorySchema);
export default Category;