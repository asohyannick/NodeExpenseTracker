import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Tag from "../../../../model/tag/tag.model";
const createTag = async(req: Request, res: Response): Promise<Response> => {
    const { name, description, color } = req.body;
    try {
        const newTag = new Tag({
            name,
            description,
            color
        });
        await newTag.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new tag has been created successfully!",
            newTag
        });
    } catch (error) {
        console.error("Error occurred!", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : "Unknown Error",
        });
    }
}
export default createTag;