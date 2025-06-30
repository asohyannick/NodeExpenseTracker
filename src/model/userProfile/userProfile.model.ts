import mongoose, { Schema } from "mongoose";
import { IUserProfileInterfac } from "../../service/interfac/userProfile/userProfile.interfac";
const userProfileSchema: Schema = new Schema<IUserProfileInterfac>({
    userId: {
        type: Schema.ObjectId,
        ref: 'Auth',
        required: true,
    },
    fullName: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        unique: true, // Ensure unique email addresses
        trim: true,
    },
    phoneNumber: {
        type: String,
        trim: true,
    },
    profilePictureUrl: {
        type: String,
        trim: true,
        default: "https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI.jpg",
    },
}, { timestamps: true });

const UserProfile = mongoose.model<IUserProfileInterfac>('UserProfile', userProfileSchema);

export default UserProfile;