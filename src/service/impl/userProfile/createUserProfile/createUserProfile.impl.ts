import UserProfile from "../../../../model/userProfile/userProfile.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const createUserProfile = async (req: Request, res: Response): Promise<Response> => {
    const {
        fullName,
        email,
        phoneNumber,
        profilePictureUrl,
    } = req.body;
    try {
        const newUserProfile = new UserProfile({
            fullName,
            email,
            phoneNumber,
            profilePictureUrl,
        });
        await newUserProfile.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "User profile has been created successfully!",
            newUserProfile
        });
    } catch (error) {
        console.error('Error occurred!', error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : "Unknown Error",
        });
    }
}

export default createUserProfile;