import Transaction from "../../../../model/transaction/transaction.model";
import { TransactionType } from "../../../interfac/transaction/transaction.interfac";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const createTransaction = async (req: Request, res: Response): Promise<Response> => {
    const {
        amount,
        description,
    } = req.body;
    try {
        const newFAQ = new Transaction({
            amount,
            date: Date.now(),
            description,
            type: TransactionType.INCOME,
        });
        await newFAQ.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Transaction has been created successfully!",
            newFAQ
        });
    } catch (error) {
        console.error('Error occurred!', error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : "Unknown Error",
        });
    }
}

export default createTransaction;