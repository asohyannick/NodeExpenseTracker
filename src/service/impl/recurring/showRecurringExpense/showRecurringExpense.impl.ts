import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import RecurringExpense from "../../../../model/recurring/recurring.model";
const showRecurringExpense = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const recurringExpense = await RecurringExpense.findById(id);
        if (!recurringExpense) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Recurring expense doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Recurring expense has been fetched successfully!",
            recurringExpense
        });
    } catch (error) {
        console.error('Error occurred!', error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : "Unknown Error",
        });
    }
}

export default showRecurringExpense;