import * as React from "react";
import { StateInterface, ContextValue } from '../types/types';
import { reducer } from '../reducer/Reducer';

export const CustomContext = React.createContext({} as ContextValue);


const initialState: StateInterface = {
    notes: [],
    user: {
        email: '',
        name: '',
        avatar: ''
    },
    note: {
        _id: '',
        note_title: '',
        note_description: '',
        pinned: false,
        tag: '',
        background_active_color: '',
    }
};

export const Provider: React.FC = ({ children }): JSX.Element => {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <CustomContext.Provider value={{ state, dispatch }}>
            {children}
        </CustomContext.Provider>

    );
};


export const useAppContext = () => React.useContext(CustomContext);
