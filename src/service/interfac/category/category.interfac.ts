import { Document, Types } from 'mongoose';
export interface ICategoryInterfac extends Document {
    userId: Types.ObjectId; // Reference to the user who owns the category
    name: string;                     // Name of the category
    description?: string;             // Optional description of the category
    icon?: string;                    // URL or name of an icon representing the category
    color?: string;                   // Color code for category representation (e.g., hex code)
    isActive: boolean;                // Indicates if the category is active or not
}