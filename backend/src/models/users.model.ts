import mongoose, { Schema } from 'mongoose';


export interface UserFieldsInterface {
    _id: string;
    name: string;
    email: string;
    password: string;
    avatar: string;
}

const userSchema = new Schema<UserFieldsInterface>(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId
        },
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
        }
    },

    {
        timestamps: true
    }

);

const User = mongoose.model<UserFieldsInterface>('users', userSchema);

export default User;
