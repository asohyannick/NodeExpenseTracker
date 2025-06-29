import Notification from "../../../../model/notification/notification.model";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
const deleteNotification = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const notification = await Notification.findByIdAndDelete(id);
        if (!notification) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "Notification doesn't exist!"})
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Notification has been deleted successfully!",
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

export default deleteNotification;