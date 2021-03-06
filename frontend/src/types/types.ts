import { CLEAR_NOTE, DELETE_NOTE, FETCH_NOTE_DETAILS, GET_ALL_NOTES, GET_USER_DETAILS, UPDATE_NOTE } from "../constants/Constants";
export interface StateInterface {
    notes: Notes[];
    user: User;
    note: Notes;
}

export interface ContextValue {
    state: StateInterface;
    dispatch: (action: ActionsTypes) => void;
}

export type ActionsTypes =
    | {
        type: typeof GET_ALL_NOTES,
        payload: { notes: Notes[]; };
    }
    | {
        type: typeof GET_USER_DETAILS,
        payload: { user: User; };
    } |
    {
        type: typeof DELETE_NOTE,
        payload: { notes: Notes[]; };
    } |
    {
        type: typeof UPDATE_NOTE,
        payload: { notes: Notes[]; };
    } |
    {
        type: typeof FETCH_NOTE_DETAILS,
        payload: { note: Notes; };
    } |
    {
        type: typeof CLEAR_NOTE;
    };

export interface Notes {
    _id: string;
    note_title: string;
    note_description: string;
    pinned: boolean;
    tag: string;
    background_active_color: string;
}

export interface getUserDetailsRes {
    success: boolean;
    user: User;
}

export interface User {
    name: string;
    email: string;
    avatar: string;
}