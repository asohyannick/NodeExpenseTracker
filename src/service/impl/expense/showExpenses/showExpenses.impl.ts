import { Request, Response } from "express";
import Expense from "../../../../model/expense/expense.model";
import { StatusCodes } from "http-status-codes";
const showExpenses = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const expenses = await Expense.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Expenses have been fetched successfully!",
            expenses
        })
    } catch (error) {
        console.error("Error occured while creating expenses", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong",
            error: error instanceof Error ? error.message : 'Unknown Error',
        });
    }
}

export default showExpenses;