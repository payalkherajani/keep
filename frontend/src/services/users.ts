import axios from 'axios';
import { Dispatch } from 'react';
import { toast } from 'react-toastify';
import { getUserDetailsRes, User, ActionsTypes } from '../types/types';
import { GET_USER_DETAILS } from '../constants/Constants';

const registerNewUser = async (data: { name: string; email: string; password: string; }) => {
    try {
        const { name, email, password } = data;
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/register`, { name, email, password });
        return response;
    } catch (err: any) {
        return err.response;
    }
};

const userLogin = async (data: { email: string; password: string; }) => {
    try {
        const { email, password } = data;
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/login`, {
            email, password
        });
        return response;
    } catch (err: any) {
        return err.response;
    }
};

const getLoggedInUserInfo = async (dispatch: Dispatch<ActionsTypes>) => {
    try {
        const response = await axios.get<getUserDetailsRes>(`${process.env.REACT_APP_SERVER_URL}/users`, { headers: { 'x-auth-token': localStorage.getItem('token') } });
        const { user } = response.data;
        const userObject: User = {
            name: user.name,
            email: user.email,
            avatar: user.avatar
        };
        dispatch({ type: GET_USER_DETAILS, payload: { user: userObject } });
    } catch (err: any) {
        const errorMessage = err.response.data.message;
        toast.error(errorMessage);
    }
};

export { registerNewUser, userLogin, getLoggedInUserInfo };