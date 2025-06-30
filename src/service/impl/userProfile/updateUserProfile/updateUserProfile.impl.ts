import UserProfile from "../../../../model/userProfile/userProfile.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const updateUserProfile = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            fullName,
            email,
            phoneNumber,
            profilePictureUrl,
        } = req.body;
        const profile = await UserProfile.findByIdAndUpdate(id, {
            fullName,
            email,
            phoneNumber,
            profilePictureUrl,
        }, { new: true, runValidators: true });
        if (!profile) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "User profile doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "User profile has been updated successfully!",
            profile
        });
    } catch (error) {
        console.error('Error occurred!', error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : "Unknown Error",
        });
    }
}

export default updateUserProfile;