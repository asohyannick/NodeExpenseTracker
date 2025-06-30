import { Document, Types } from "mongoose";
export interface  ITagInterfac extends Document {
    userId:Types.ObjectId; // Reference to the user who created the tag
    name: string;                    // Name of the tag
    description?: string;            // Optional description of the tag
    color?: string;                  // Color code for tag representation (e.g., hex code)
}