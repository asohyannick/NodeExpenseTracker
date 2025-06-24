import Auth from "../../../../model/auth/auth.model";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from 'jsonwebtoken';
const register = async (req: Request, res: Response): Promise<Response> => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const user = await Auth.findOne({ email });
        if (user) {
            user.refreshToken = '';
            await user.save();
            return res.status(StatusCodes.BAD_REQUEST).json({ message: "User already exist!" });
        }
        const newUser = new Auth({
            firstName,
            lastName,
            email,
            password,
            isAdmin: true,
        });
        await newUser.save();
        const accessToken = jwt.sign({ id: newUser._id, firstName: newUser.firstName, lastName: newUser.lastName, email: newUser.email, isAdmin: newUser.isAdmin }, process.env.JWT_SECRET_KEY as string, {
            expiresIn: '15m',
        });
        const refreshToken = jwt.sign({ id: newUser._id, firstName: newUser.firstName, lastName: newUser.lastName, email: newUser.email, isAdmin: newUser.isAdmin }, process.env.JWT_SECRET_KEY as string, {
            expiresIn: '15m',
        });
        newUser.refreshToken = refreshToken;
        await newUser.save();
        res.cookie('auth', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV as string === 'production',
            maxAge: 90000,
            sameSite: 'strict',
        });
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "User registration is successful!",
            accessToken,
            refreshToken,
            user: newUser._id,
        })
    } catch (error) {
        console.error(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong!",
            error: error instanceof Error ? error.message : 'Unknown Error',
        });
    }
}

export default register;