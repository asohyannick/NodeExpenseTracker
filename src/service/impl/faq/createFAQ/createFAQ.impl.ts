import FAQ from "../../../../model/faq/faq.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const createFAQ = async (req: Request, res: Response): Promise<Response> => {
    const { question, answer, category } = req.body;
    try {
        const newFAQ = new FAQ({
            question,
            answer,
            category,
            date: Date.now(),
        });
        await newFAQ.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Question has been submitted successfully!",
            newFAQ
        });
    } catch (error) {
        console.error('Error occurred!', error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : "Unknown Error",
        });
    }
}

export default createFAQ;