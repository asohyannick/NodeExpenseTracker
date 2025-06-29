import Notification from "../../../../model/notification/notification.model";
import { TypeStatus } from "../../../interfac/notifications/notification.interfac";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
const createNotification = async (req: Request, res: Response): Promise<Response> => {
    const {
        message,
        isRead,
    } = req.body;
    try {
        const newNotification = new Notification({
            message,
            type: TypeStatus.SUCCESS,
            isRead,
        });
        await newNotification.save();
        return res.status(StatusCodes.CREATED).json({
           success: true,
           message: "Notification has been added successfully!",
           newNotification
        });
    } catch (error) {
        console.error("Error occurred!", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong",
            error: error instanceof Error ? error.message : 'Unknown Error',
        });
    }
}

export default createNotification;