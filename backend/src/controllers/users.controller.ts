import { Request, Response } from "express";
import User, { UserFieldsInterface } from "../models/users.model";

const signUpWithoutGoogleAPI = async (req: Request, res: Response) => {
    try {
        const { name, email, password }: UserFieldsInterface = req.body!;

    } catch (err) {


    }
};
export default { signUpWithoutGoogleAPI };
