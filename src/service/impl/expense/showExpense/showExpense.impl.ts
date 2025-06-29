import { Request, Response } from "express";
import Expense from "../../../../model/expense/expense.model";
import { StatusCodes } from "http-status-codes";
const showExpense = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const expense = await Expense.findById(id);
        if (!expense) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Expense doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Expense has been fetched successfully!",
            expense
        })
    } catch (error) {
        console.error("Error occured while creating expenses", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong",
            error: error instanceof Error ? error.message : 'Unknown Error',
        });
    }
}

export default showExpense;