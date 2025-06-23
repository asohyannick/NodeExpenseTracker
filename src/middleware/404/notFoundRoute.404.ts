import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const notFoundRoute = async (_req: Request, res: Response): Promise<Response> => {
    const message: string = "Route doesn't exist!";
    try {
        return res.status(StatusCodes.NOT_FOUND).json({
            success: false,
            message,
            status: StatusCodes.NOT_FOUND,
        });
    } catch (error) {
        console.error("Error in notFoundRoute:", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
};

export { notFoundRoute };