import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const serverError = async (_req: Request, res: Response): Promise<Response> => {
    const message: string = "Internal Server Error!";
    try {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message,
            status: StatusCodes.INTERNAL_SERVER_ERROR,
        });
    } catch (error) {
        console.error("Error in serverError:", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
};

export { serverError };