import { Request, Response } from "express";
import Budget from "../../../../model/budget/budget.model";
import { StatusCodes } from "http-status-codes";
const deleteBudget = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const budget = await Budget.findByIdAndDelete(id);
        if (!budget) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Budget doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Budget has been deleted successfully!",
            budget
        });
    } catch (error) {
        console.error("Error occured while creating expenses", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong",
            error: error instanceof Error ? error.message : 'Unknown Error',
        });
    }
}

export default deleteBudget;