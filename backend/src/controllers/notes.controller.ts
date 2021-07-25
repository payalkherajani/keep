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
            await notes.save();
            return res.status(200).json({ success: true, message: 'Added a New Note', notes });
        }

    } catch (err) {
        return res.status(500).json({ success: false, message: 'Server Error' });
    }
};

const getAllNotesOfLoggedInUser = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const loggedInUser = await Notes.findOne({ user: userId });
        const notes = loggedInUser?.notes;
        return res.status(200).json({ success: true, notes });

    } catch (err) {
        return res.status(500).json({ success: false, message: 'Server Error' });
    }
};


const updateNoteWithID = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const { noteID } = req.params;
        const { text, tag, pinned } = req.body;
        const loggedInUser = await Notes.findOne({ user: userId });
        const notes = loggedInUser?.notes;
        const isNotePresent = notes?.some((n) => n._id == noteID);
        if (isNotePresent) {

            if (notes !== undefined) {

                const updatedNotes = notes.map((n) => {
                    if (n._id == noteID) {
                        if (text) {
                            n.text = text;
                        }
                        if (tag) {
                            n.tag = tag;
                        }
                        if (pinned !== null) {
                            n.pinned = pinned;
                        }
                        return n;
                    }
                    else {
                        return n;
                    }
                });

                const note = {
                    _id: loggedInUser?._id,
                    user: userId,
                    notes: updatedNotes
                };

                const newUpdatedNotes = _.extend(loggedInUser, note)
                    ;
                await newUpdatedNotes.save();
                return res.status(200).json({ success: true, newUpdatedNotes });
            }
        }
        else {
            return res.status(400).json({ success: false, message: 'Invalid Note ID' });

        }
    } catch (err) {
        return res.status(500).json({ success: false, message: 'Server Error' });
    }
};
export { addANewNote, getAllNotesOfLoggedInUser, updateNoteWithID };