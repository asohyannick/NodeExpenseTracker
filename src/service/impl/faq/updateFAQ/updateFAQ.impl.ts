import FAQ from "../../../../model/faq/faq.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const updateFAQ = async(req: Request, res: Response): Promise<Response> => {
    try {
        const {
            question,
            answer,
            category,
        } = req.body;
        const { id } = req.params;
        const faq = await FAQ.findByIdAndUpdate(id, {
            question,
            answer,
            category,
            date: Date.now(),
        }, { new: true, runValidators: true });
        if (!faq) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Question doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Question has been fetched successfully!",
            faq
        });
    } catch (error) {
        console.error('Error occurred!', error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : "Unknown Error",
        });
    }
}

export default updateFAQ;