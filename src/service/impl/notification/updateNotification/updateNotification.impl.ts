import Notification from "../../../../model/notification/notification.model";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { TypeStatus } from "../../../interfac/notifications/notification.interfac";
const updateNotification = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const {
            message,
            isRead,
        } = req.body;
        const notification = await Notification.findByIdAndUpdate(id, {
            message,
            type: TypeStatus.SUCCESS,
            isRead,
        }, { new: true, runValidators: true });
        if (!notification) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: "Notification doesn't exist!" })
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Notification has been updated successfully!",
            notification,
        });
    } catch (error) {
        console.error("Error occurred!", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong",
            error: error instanceof Error ? error.message : 'Unknown Error',
        });
    }
}

export default updateNotification;