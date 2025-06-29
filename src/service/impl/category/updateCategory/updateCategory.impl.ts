import { Request, Response } from "express";
import Category from "../../../../model/category/category.model";
import { StatusCodes } from "http-status-codes";
const updateCategory = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            name,
            description,
            icon,
            color,
            isActive,
        } = req.body;
        const category = await Category.findByIdAndUpdate(id, {
            name,
            description,
            icon,
            color,
            isActive,
        }, { new: true, runValidators: true });
        if (!category) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Category doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Category has been updated successfully!",
            category
        });
    } catch (error) {
        console.error("Error occured", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong",
            error: error instanceof Error ? error.message : 'Unknown Error',
        });
    }
}
export default updateCategory;