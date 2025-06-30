import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import RecurringExpense from "../../../../model/recurring/recurring.model";
const showRecurringExpenses = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const recurringExpenses = await RecurringExpense.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Recurring expenses have been fetched successfully!",
            recurringExpenses
        });
    } catch (error) {
        console.error('Error occurred!', error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : "Unknown Error",
        });
    }
}

export default showRecurringExpenses;