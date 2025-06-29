import { Request, Response } from 'express';
import { StatusCodes } from "http-status-codes";
import Currency from "../../../../model/currency/currency.model";
const showCurrencies = async(_req: Request, res: Response): Promise<Response> => {
    try {
        const currencies = await Currency.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Currencies have been fetched successfully!",
            currencies,
        });
    } catch (error) {
        console.error("Error occurred!", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong",
            error: error instanceof Error ? error.message : 'Unknown Error',
        });
    }
}

export default showCurrencies;