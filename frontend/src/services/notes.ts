import axios from "axios";
import { Dispatch } from 'react';
import { toast } from 'react-toastify';
import { GET_ALL_NOTES } from "../constants/Constants";
import { ActionsTypes, Notes } from '../types/types';

const getNotesOfLoggedInUser = async (dispatch: Dispatch<ActionsTypes>) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/notes`, { headers: { 'x-auth-token': localStorage.getItem('token') } });
        const { notes } = response.data;
        console.log(response.data);
        dispatch({ type: GET_ALL_NOTES, payload: { notes: notes } });
    } catch (err) {
        const errorMessage = err.response.data.message;
        toast.error(errorMessage);
    }
};

export { getNotesOfLoggedInUser };