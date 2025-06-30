import Feedback from "../../../../model/feedback/feedback.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const updateFeedback = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const { message, rating } = req.body;
        const feedback = await Feedback.findByIdAndUpdate(id, { message, rating }, { new: true, runValidators: true });
        if (!feedback) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Feedback doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Feedback has been updated successfully!",
            feedback
        });
    } catch (error) {
        console.error('Error occurred!', error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : "Unknown Error",
        });
    }
}

export default updateFeedback;