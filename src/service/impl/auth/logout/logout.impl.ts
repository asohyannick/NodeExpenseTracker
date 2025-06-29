import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const logoutUser = async (_req: Request, res: Response): Promise<Response> => {
    try {
        res.cookie('auth', '', {
          httpOnly: true,
          maxAge: 900000,
          secure: process.env.NODE_ENV as string === 'production',
          sameSite: 'strict',
        });
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Authenticated user has logout successfully from the database!",
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : 'Unknown Error',
        });
    }
}

export default logoutUser;