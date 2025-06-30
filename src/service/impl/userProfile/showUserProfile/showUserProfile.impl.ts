import UserProfile from "../../../../model/userProfile/userProfile.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const showUserProfile = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const profile = await UserProfile.findById(id);
        if (!profile) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "User profile doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "User profile has been retrieved successfully!",
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

export default showUserProfile;