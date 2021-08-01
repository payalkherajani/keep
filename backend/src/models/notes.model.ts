import mongoose, { Schema } from 'mongoose';
import { UserFieldsInterface } from './users.model';


export interface NotesArr {
    _id: string;
    note_title: string;
    note_description: string;
    pinned: boolean;
    tag: string;
    background_active_color: string;
}

export interface NotesInterfaceSchema {
    _id: string;
    user: UserFieldsInterface;
    notes: NotesArr[];
}

const notesSchema = new Schema<NotesInterfaceSchema>(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        },
        notes: [
            {
                _id: {
                    type: mongoose.Schema.Types.ObjectId
                },
                note_title: {
                    type: String,
                    required: ["Note Title is Required"]
                },
                note_description: {
                    type: String,
                    required: ["Note Description is Required"]
                },
                pinned: {
                    type: Boolean,
                    default: false
                },
                tag: {
                    type: String,
                    enum: ['IMPORTANT', 'CASUAL'],
                    required: true
                },
                background_active_color: {
                    type: String,
                }
            }
        ]
    },

    {
        timestamps: true
    }

);

const Notes = mongoose.model<NotesInterfaceSchema>('notes', notesSchema);

export default Notes;
