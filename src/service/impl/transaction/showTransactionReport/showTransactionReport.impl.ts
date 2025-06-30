import Transaction from "../../../../model/transaction/transaction.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const showTransactionReport = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const transaction = await Transaction.findById(id);
        if (!transaction) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Transaction doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Transaction report has been fetched successfully!",
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

export default showTransactionReport;