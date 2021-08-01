import {
    GET_ALL_NOTES
} from '../constants/Constants';

import {
    StateInterface,
    ActionsTypes
} from '../types/types';

export const reducer = (state: StateInterface, action: ActionsTypes): StateInterface => {

    switch (action.type) {
        case GET_ALL_NOTES:
            return { ...state, notes: [] };

        default:
            return state;
    }
};