import {
    CLEAR_NOTE,
    DELETE_NOTE,
    FETCH_NOTE_DETAILS,
    GET_ALL_NOTES, GET_USER_DETAILS, UPDATE_NOTE
} from '../constants/Constants';

import {
    StateInterface,
    ActionsTypes
} from '../types/types';

export const reducer = (state: StateInterface, action: ActionsTypes): StateInterface => {

    switch (action.type) {
        case GET_ALL_NOTES:
            return { ...state, notes: action.payload.notes };

        case GET_USER_DETAILS:
            return { ...state, user: action.payload.user };

        case DELETE_NOTE:
            return { ...state, notes: action.payload.notes };

        case UPDATE_NOTE:
            return { ...state, notes: action.payload.notes };

        case FETCH_NOTE_DETAILS:
            return { ...state, note: action.payload.note };

        case CLEAR_NOTE:
            return {
                ...state, note: {
                    _id: '',
                    note_title: '',
                    note_description: '',
                    pinned: false,
                    tag: '',
                    background_active_color: '',
                }
            };
        default:
            return state;
    }
};