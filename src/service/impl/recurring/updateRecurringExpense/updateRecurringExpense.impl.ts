import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import RecurringExpense from "../../../../model/recurring/recurring.model";
import { RecurringFrequencyStatus } from "../../../interfac/recurring/recurring.interfac";
const updateRecurringExpense = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            amount,
            description,
        } = req.body;
        const recurringExpense = await RecurringExpense.findByIdAndUpdate(id, {
            amount,
            description,
            isActive: true,
            frequency: RecurringFrequencyStatus.YEARLY,
            nextDueDate: Date.now(),
        }, { new: true, runValidators: true });
        if (!recurringExpense) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Recurring expense doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Recurring expense has been updated successfully!",
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

export default updateRecurringExpense;