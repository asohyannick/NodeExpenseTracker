import Auth from "../../../../model/auth/auth.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const user = await Auth.findByIdAndDelete(id);
        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({message: "User doesn't exist!"});
        }
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Authenticated user has been deleted successfully from the database!",
            user
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : 'Unknown Error',
        });
    }
}

export default deleteUser;