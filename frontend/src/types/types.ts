import { GET_ALL_NOTES } from "../constants/Constants";
export interface StateInterface {
    notes: [];
}

export interface ContextValue {
    state: StateInterface;
    dispatch: (action: ActionsTypes) => void;
}

export type ActionsTypes =
    | {
        type: typeof GET_ALL_NOTES,
        payload: { categories: Notes[]; };
    };

export interface Notes {
    _id: string;
    note_title: string;
    note_description: string;
    pinned: boolean;
    tag: string;
    background_active_color: string;
}