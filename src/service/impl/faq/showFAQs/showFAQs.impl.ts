import FAQ from "../../../../model/faq/faq.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const showFAQs = async (_req: Request, res: Response): Promise<Response> => {
    try {
       const questions = await FAQ.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Questions have been fetched successfully!",
            questions
        });
    } catch (error) {
        console.error('Error occurred!', error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : "Unknown Error",
        });
    }
}

export default showFAQs;