import Transaction from "../../../../model/transaction/transaction.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { TransactionType } from "../../../interfac/transaction/transaction.interfac";
const updateTransactionReport = async(req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            amount,
            description,
        } = req.body;
        const transaction = await Transaction.findByIdAndUpdate(id, {
            amount,
            date: Date.now(),
            description,
            type: TransactionType.EXPENSE,
        }, { new: true, runValidators: true });
        if (!transaction) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Transaction report doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Transaction report has been updated successfully!",
            transaction
        });
    } catch (error) {
        console.error('Error occurred!', error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : "Unknown Error",
        });
    }
}

export default updateTransactionReport;