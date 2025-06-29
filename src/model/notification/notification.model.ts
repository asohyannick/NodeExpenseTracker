import mongoose, { Schema } from "mongoose";
import { INotificationInterfac, TypeStatus } from "../../service/interfac/notifications/notification.interfac";
const notificationSchema: Schema = new Schema<INotificationInterfac>({
  userId: {
        type: Schema.ObjectId,
        ref: 'Auth', // Reference to the Auth model
        required: true,
    },
    message: {
        type: String,
    },
    type: {
        type: String,
        num: Object.values(TypeStatus),
        default: TypeStatus.INFO,
    },
    isRead: {
        type: Boolean,
        default: false, // Default to false, indicating the notification is unread
    },
}, { timestamps: true});
const Notification = mongoose.model<INotificationInterfac>('Notification', notificationSchema);
export default Notification;