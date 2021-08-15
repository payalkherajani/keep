import axios from "axios";
import React, { Dispatch } from 'react';
import { toast } from 'react-toastify';
import { DELETE_NOTE, GET_ALL_NOTES, UPDATE_NOTE } from "../constants/Constants";
import { ActionsTypes, Notes } from '../types/types';

const getNotesOfLoggedInUser = async (dispatch: Dispatch<ActionsTypes>) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/notes`, { headers: { 'x-auth-token': localStorage.getItem('token') } });
        const { notes } = response.data;
        dispatch({ type: GET_ALL_NOTES, payload: { notes: notes } });
    } catch (err) {
        const errorMessage = err.response.data.message;
        toast.error(errorMessage);
    }
};

const addANewNote = async (data: { note_title: string, note_description: string, tag: string; }) => {
    try {
        const { note_description, note_title, tag } = data;
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/notes`, { note_title, note_description, tag }, { headers: { 'x-auth-token': localStorage.getItem('token') } });
        return response;
    } catch (err) {
        const errorMessage = err.response.data.message;
        toast.error(errorMessage);
    }
};

const deleteNote = async (dispatch: Dispatch<ActionsTypes>, id: string) => {
    try {
        const response = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/notes/${id}`, { headers: { 'x-auth-token': localStorage.getItem('token') } });
        dispatch({ type: DELETE_NOTE, payload: { notes: response.data.newUpdatedNotes.notes } });
        toast.success("Note is deleted");
    } catch (err) {
        const errorMessage = err.response.data.message;
        toast.error(errorMessage);
    }
};

const updatePinFeature = async (data: { id: string, pin: boolean; }, dispatch: Dispatch<ActionsTypes>) => {
    try {
        const { id, pin } = data;
        const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/notes/${id}`, { 'pinned': !pin }, { headers: { 'x-auth-token': localStorage.getItem('token') } });
        dispatch({ type: UPDATE_NOTE, payload: { notes: response.data.newUpdatedNotes.notes } });
    } catch (err) {
        const errorMessage = err.response.data.message;
        toast.error(errorMessage);
    }
};

const updateBGColor = async (data: { id: string, value: string; }, dispatch: Dispatch<ActionsTypes>) => {
    try {
        const { id, value } = data;
        const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/notes/${id}`, { 'background_active_color': value }, { headers: { 'x-auth-token': localStorage.getItem('token') } });
        dispatch({ type: UPDATE_NOTE, payload: { notes: response.data.newUpdatedNotes.notes } });
    } catch (err) {
        const errorMessage = err.response.data.message;
        toast.error(errorMessage);
    }
};


const updateNote = async (data: { note_title: string, note_description: string, tag: string; }, id: string, dispatch: Dispatch<ActionsTypes>) => {
    try {
        const { note_title, note_description, tag } = data;
        const response = await axios.put(`${process.env.REACT_APP_SERVER_URL}/notes/${id}`, {
            note_title,
            note_description,
            tag
        }, { headers: { 'x-auth-token': localStorage.getItem('token') } });
        dispatch({ type: GET_ALL_NOTES, payload: { notes: response.data.newUpdatedNotes.notes } });
        return response;
    } catch (err) {
        const errorMessage = err.response.data.message;
        toast.error(errorMessage);
    }
};

export { getNotesOfLoggedInUser, addANewNote, deleteNote, updatePinFeature, updateBGColor, updateNote };