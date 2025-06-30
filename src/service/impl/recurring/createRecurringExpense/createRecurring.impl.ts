import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { RecurringFrequencyStatus } from "../../../interfac/recurring/recurring.interfac";
import RecurringExpense from "../../../../model/recurring/recurring.model";
const createRecurringExpense = async (req: Request, res: Response): Promise<Response> => {
    const {
        amount,
        description,
    } = req.body;
    try {
        const newRecurringExpense = new RecurringExpense({
            amount,
            description,
            isActive: true,
            frequency: RecurringFrequencyStatus.MONTHLY,
            nextDueDate: Date.now(),
        });
        await newRecurringExpense.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Recurring expense has been created successfully!",
            newRecurringExpense
        });
    } catch (error) {
        console.error('Error occurred!', error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : "Unknown Error",
        });
    }
}

export default createRecurringExpense;