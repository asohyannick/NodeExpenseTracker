import { Request, Response } from 'express';
import { StatusCodes } from "http-status-codes";
import Currency from "../../../../model/currency/currency.model";
const createCurrency = async(req: Request, res: Response): Promise<Response> => {
    const {
        code,
        name,
        symbol,
        exchangeRate,
        isActive,
    } = req.body;
    try {
        const newCurrency = new Currency({
            code,
            name,
            symbol,
            exchangeRate,
            isActive,
        });
        await newCurrency.save();
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "A new currency has been added successfully!",
            newCurrency
        });
    } catch (error) {
        console.error("Error occurred!", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong",
            error: error instanceof Error ? error.message : 'Unknown Error',
        });
    }
}

export default createCurrency;