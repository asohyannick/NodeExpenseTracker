import { Document, Types } from "mongoose";
export interface IUserProfileInterfac extends Document {
    userId: Types.ObjectId; // Reference to the user
    fullName: string;                 // User's full name
    email: string;                    // User's email address
    phoneNumber?: string;             // Optional phone number
    profilePictureUrl?: string;       // URL of the user's profile picture
}