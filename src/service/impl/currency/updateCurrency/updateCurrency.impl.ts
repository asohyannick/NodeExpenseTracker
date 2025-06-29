import { Request, Response } from 'express';
import { StatusCodes } from "http-status-codes";
import Currency from "../../../../model/currency/currency.model";
const updateCurrency = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            code,
            name,
            symbol,
            exchangeRate,
            isActive,
        } = req.body;
        const currency = await Currency.findByIdAndUpdate(id, {
            code,
            name,
            symbol,
            exchangeRate,
            isActive,
        }, { new: true, runValidators: true });
        if (!currency) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Currency doesn't exist!" });
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Currency has been updated successfully!",
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

export default updateCurrency;