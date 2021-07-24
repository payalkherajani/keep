import mongoose, { Schema } from 'mongoose';
import { UserFieldsInterface } from './users.model';


export interface NotesArr {
    _id: string;
    text: string;
    pinned: boolean;
    tag: string;
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
                text: {
                    type: String,
                    required: ["Text is Required"]
                },
                pinned: {
                    type: Boolean,
                    default: false
                },
                tag: {
                    type: String,
                    enum: ['IMPORTANT', 'CASUAL'],
                    required: true
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
