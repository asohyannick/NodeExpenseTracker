import Notification from "../../../../model/notification/notification.model";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
const showNotifications = async (_req: Request, res: Response): Promise<Response> => {
    try {
        const notifications = await Notification.find();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Notification has been added succesfully!",
            notifications,
        });
    } catch (error) {
        console.error("Error occured while creating expenses", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong",
            error: error instanceof Error ? error.message : 'Unknown Error',
        });
    }
}

export default showNotifications;