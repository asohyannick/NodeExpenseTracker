import { Request, Response } from "express";
import Budget from "../../../../model/budget/budget.model";
import { StatusCodes } from "http-status-codes";
const createBudget = async (req: Request, res: Response): Promise<Response> => {
    const {
        amount,
        startDate,
        endDate,
        spentAmount,
        isActive,
    } = req.body;
    try {
        const newBudget = new Budget({
            amount,
            startDate,
            endDate,
            spentAmount,
            isActive,
        });
        await newBudget.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A budget has been created successfully!",
            newBudget
        });
    } catch (error) {
        console.error("Error occured while creating expenses", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong",
            error: error instanceof Error ? error.message : 'Unknown Error',
        });
    }
}

export default createBudget;