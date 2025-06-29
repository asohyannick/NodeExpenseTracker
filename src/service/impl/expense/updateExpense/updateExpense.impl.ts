import { Request, Response } from "express";
import Expense from "../../../../model/expense/expense.model";
import { StatusCodes } from "http-status-codes";
import { FrequencyStatus, PaymentMethodStatus } from "../../../interfac/expense/expense.interfac";
const updateExpense = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            amount,
            description,
            receiptUrl,
            tags,
            recurring,
        } = req.body;
        const expense = await Expense.findByIdAndUpdate(id, {
            amount,
            description,
            paymentMethod: PaymentMethodStatus.CASH,
            receiptUrl,
            tags,
            recurring,
            frequency: FrequencyStatus.YEARLY,
            date: Date.now(),
        }, { new: true, runValidators: true });
        if (!expense) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Expense doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Expense has been updated successfully!",
            expense
        })
    } catch (error) {
        console.error("Error occured while updating expense", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong",
            error: error instanceof Error ? error.message : 'Unknown Error',
        });
    }
}

export default updateExpense;