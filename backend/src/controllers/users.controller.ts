import { Request, Response } from "express";
import User, { UserFieldsInterface } from "../models/users.model";
import bcrypt from 'bcrypt';
import gravatar from 'gravatar';
import { generateToken } from "../utils/token";
import mongoose from 'mongoose';


const signUp = async (req: Request, res: Response) => {

    try {
        const { name, email, password }: UserFieldsInterface = req.body!;

        const userAlreadyExistswithEmail = await User.findOne({ email });

        if (userAlreadyExistswithEmail === null) {
            const avatar = gravatar.url(email, { s: '200', r: 'pg', d: 'robohash' }, true);
            const hashedPassword = bcrypt.hashSync(password, 10);
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                name,
                email,
                password: hashedPassword,
                avatar
            });
            await user.save();
            return res.status(200).json({ success: true, user });
        }
        else {
            return res.status(400).json({ success: false, message: 'User Already Exists with this email' });
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: 'Server Error' });
    }
};

const signIn = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body!;
        const user = await User.findOne({ email });

        if (user) {
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if (isPasswordMatch) {
                const data = { id: user._id };
                const token = generateToken(data);
                return res.status(200).json({ success: true, token });
            }
            else {
                return res.status(400).json({ success: false, message: 'Invalid Credentials' });
            }
        }
        else if (user === null) {
            return res.status(400).json({ success: false, message: 'Invalid Credentials' });
        }
        else {
            return res.status(400).json({ success: false, message: 'Something went wrong' });
        }

    } catch (err) {
        return res.status(500).json({ success: false, message: 'Server Error' });
    }
};

const getLoggedInUserInfo = async (req: Request, res: Response) => {
    try {
        const userId = req.user!.id;
        const user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(400).json({ success: false, message: 'No User Found' });
        }
        return res.status(200).json({ success: true, user });
    } catch (err) {
        return res.status(500).json({ success: false, message: 'Server Error' });
    }
};

export { signUp, signIn, getLoggedInUserInfo };
