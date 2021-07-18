import mongoose, { Schema } from 'mongoose';
import { UserFieldsInterface } from './users.model';


export interface Notes {
    _id: string;
    text: string;
    pinned: boolean;
    tag: string;
}

export interface NotesInterfaceSchema {
    _id: string;
    user: UserFieldsInterface;
    notes: Notes[];
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

const User = mongoose.model<NotesInterfaceSchema>('users', notesSchema);

export default User;
