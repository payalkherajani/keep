import { Request, Response } from "express";
import Notes from "../models/notes.model";

const addANewNote = async (req: Request, res: Response) => {
    try {
        const userId = req.user;
        const { text, tag } = req.body;
        const loggedInUserNotes = await Notes.findOne({ user: userId });
        res.send(loggedInUserNotes);
    } catch (err) {
        return res.status(500).json({ success: false, message: 'Server Error' });
    }
};

export { addANewNote };