import { Request, Response } from "express";
import User, { UserFieldsInterface } from "../models/users.model";
import bcrypt from 'bcrypt';
import gravatar from 'gravatar';

const signUpWithoutGoogleAPI = async (req: Request, res: Response) => {
    try {
        const { name, email, password }: UserFieldsInterface = req.body!;

        const userAlreadyExistswithEmail = await User.findOne({ email });

        if (userAlreadyExistswithEmail === null) {
            const avatar = gravatar.url(email, { s: '200', r: 'pg', d: 'robohash' }, true);
            const hashedPassword = bcrypt.hashSync(password, 10);
            const user = new User({
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
        return res.status(500).json({ success: false, message: 'Server Error' });
    }
};
export default { signUpWithoutGoogleAPI };
