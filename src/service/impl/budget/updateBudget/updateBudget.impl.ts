import { Request, Response } from "express";
import Budget from "../../../../model/budget/budget.model";
import { StatusCodes } from "http-status-codes";
const updateBudget = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {
            amount,
            startDate,
            endDate,
            spentAmount,
            isActive,
        } = req.body;
        const { id } = req.params;
        const budget = await Budget.findByIdAndUpdate(id, {
            amount,
            startDate,
            endDate,
            spentAmount,
            isActive,
        }, { new: true, runValidators: true });
        if (!budget) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Budget doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Budget has been updated successfully!",
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

export default updateBudget;