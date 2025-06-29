import { Document, Types } from "mongoose";
export enum TypeStatus {
    INFO = 'Info',
    WARNING = 'Warning',
    SUCCESS = 'Success',
    ERROR = 'Error',
}
export interface INotificationInterfac extends Document {
    userId: Types.ObjectId; // Reference to the user associated with the notification
    message: string;                  // The content of the notification
    type: TypeStatus;                     // Type of notification (e.g., info, warning, success)
    isRead: boolean;                  // Indicates if the notification has been read
}