import { Request, Response } from "express";
import Notes from "../models/notes.model";
import mongoose from 'mongoose';
import _ from 'lodash';

const addANewNote = async (req: Request, res: Response) => {
    try {

        const userId = req.user?.id;
        const { text, tag } = req.body;
        let loggedInUserNotes = await Notes.findOne({ user: userId });
        if (loggedInUserNotes === null) {

            const createFirstNoteForUser = new Notes({
                _id: new mongoose.Types.ObjectId(),
                user: userId,
                notes: [
                    {
                        _id: new mongoose.Types.ObjectId(),
                        text,
                        tag
                    }
                ]
            });

            const notes = await createFirstNoteForUser.save();
            res.status(200).json({ success: true, notes });
        }
        else {
            const note = {
                _id: loggedInUserNotes._id,
                user: userId,
                notes: [...loggedInUserNotes.notes, {
                    _id: new mongoose.Types.ObjectId(),
                    text,
                    tag
                }]

            };

            const notes = _.extend(loggedInUserNotes, note);
            return res.status(200).json({ success: true, message: 'Added a New Note', notes });
        }

    } catch (err) {
        return res.status(500).json({ success: false, message: 'Server Error' });
    }
};

export { addANewNote };