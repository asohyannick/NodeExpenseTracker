import Transaction from "../../../../model/transaction/transaction.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const showTransactionReports = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const transactions = await Transaction.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Transaction reports have been fetched successfully!",
            transactions
        });
    } catch (error) {
        console.error('Error occurred!', error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : "Unknown Error",
        });
    }
}

export default showTransactionReports;