import { Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import Auth from "../../../../model/auth/auth.model";
import { StatusCodes } from "http-status-codes";
const requestAccessToken = async (req: Request, res: Response): Promise<Response> => {
    const { refreshToken } = req.body;
    if (!refreshToken) {
        return res.status(StatusCodes.NOT_FOUND).json({ message: "Invalid Token!" });
    }
    try {
        // verify the authenticity and authenticated nature of the token
        // next, verify if the user is authenticated
        const PayLoadUser = jwt.verify(refreshToken, process.env.JWT_SECRET_KEY as string) as JwtPayload;
        const user = await Auth.findById(PayLoadUser.id);
        if (!user || refreshToken !== refreshToken) {
            return res.status(StatusCodes.BAD_REQUEST).json({ message: "Access Denied!" })
        }
        // Generate a new token
        const accessToken = jwt.sign({ id: user._id, firstName: user.firstName, lastName: user.lastName, isAdmin: user.isAdmin }, process.env.JWT_SECRET_KEY as string, {
            expiresIn: '7d'
        });
        return res.status(StatusCodes.OK).json({
            message: "Access Token has been created successfully",
            accessToken,
        });
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : 'Unknown Error',
        })
    }
}

export default requestAccessToken;