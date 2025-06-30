import UserProfile from "../../../../model/userProfile/userProfile.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const showUserProfiles = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const profiles = await UserProfile.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "User profiles have been retrieved successfully!",
            profiles
        });
    } catch (error) {
        console.error('Error occurred!', error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : "Unknown Error",
        });
    }
}

export default showUserProfiles;