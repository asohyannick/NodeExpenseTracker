import { Request, Response } from "express";
import Category from "../../../../model/category/category.model";
import { StatusCodes } from "http-status-codes";
const showCategories = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const categories = await Category.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Categories have been fetched successfully!",
            categories
        });
    } catch (error) {
        console.error("Error occured", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong",
            error: error instanceof Error ? error.message : 'Unknown Error',
        });
    }
}
export default showCategories;