import {
    GET_ALL_NOTES, GET_USER_DETAILS
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

        default:
            return state;
    }
};