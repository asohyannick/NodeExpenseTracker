import { Request, Response } from 'express';
import { StatusCodes } from "http-status-codes";
import Currency from "../../../../model/currency/currency.model";
const deleteCurrency = async(req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const currency = await Currency.findByIdAndDelete(id);
        if (!currency) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Currency doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Currency has been deleted successfully!",
            currency,
        });
    } catch (error) {
        console.error("Error occurred!", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong",
            error: error instanceof Error ? error.message : 'Unknown Error',
        });
    }
}

export default deleteCurrency;