import { Request, Response } from "express";
import { FrequencyStatus, PaymentMethodStatus } from "../../../interfac/expense/expense.interfac";
import Expense from "../../../../model/expense/expense.model";
import { StatusCodes } from "http-status-codes";
const createExpenses = async (req: Request, res: Response): Promise<Response> => {
    const {
        amount,
        description,
        receiptUrl,
        tags,
        recurring,
    } = req.body;
    try {
        const newExpenses = new Expense({
            amount,
            description,
            paymentMethod: PaymentMethodStatus.CREDIT_CARD,
            receiptUrl,
            tags,
            recurring,
            frequency: FrequencyStatus.MONTHLY,
            date: Date.now(),
        });
        await newExpenses.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Expenses have been created successfully!",
            newExpenses
        })
    } catch (error) {
        console.error("Error occured while creating expenses", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong",
            error: error instanceof Error ? error.message : 'Unknown Error',
        });
    }
}

export default createExpenses;