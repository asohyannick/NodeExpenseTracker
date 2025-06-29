import { Request, Response } from "express";
import Budget from "../../../../model/budget/budget.model";
import { StatusCodes } from "http-status-codes";
const showBudgets = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const budgets = await Budget.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Budgets have been fetched successfully!",
            budgets
        });
    } catch (error) {
        console.error("Error occured while creating expenses", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong",
            error: error instanceof Error ? error.message : 'Unknown Error',
        });
    }
}

export default showBudgets;