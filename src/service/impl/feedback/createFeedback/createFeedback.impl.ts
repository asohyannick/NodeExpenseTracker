import Feedback from "../../../../model/feedback/feedback.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const createFeedback = async (req: Request, res: Response): Promise<Response> => {
    const { message, rating } = req.body;
    try {
        const newFeedback = new Feedback({
            message,
            rating,
        });
        await newFeedback.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Your feedback has been submitted successfully!",
            newFeedback
        });
    } catch (error) {
        console.error('Error occurred!', error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : "Unknown Error",
        });
    }
}

export default createFeedback;