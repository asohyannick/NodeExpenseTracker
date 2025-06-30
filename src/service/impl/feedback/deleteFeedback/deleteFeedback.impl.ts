import Feedback from "../../../../model/feedback/feedback.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const deleteFeedback = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const feedback = await Feedback.findByIdAndDelete(id);
        if (!feedback) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Feedback doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Feedback has been deleted successfully!",
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

export default deleteFeedback;