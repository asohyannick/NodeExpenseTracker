import Feedback from "../../../../model/feedback/feedback.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const showFeedbacks = async (_req: Request, res: Response): Promise<Response> => {
    try {
       const feedbacks = await Feedback.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Feedbacks have been fetched successfully!",
            feedbacks
        });
    } catch (error) {
        console.error('Error occurred!', error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : "Unknown Error",
        });
    }
}

export default showFeedbacks;