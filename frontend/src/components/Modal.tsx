import React, { useState } from 'react';
import { addANewNote } from '../services/notes';
import { toast } from 'react-toastify';
import { GET_ALL_NOTES } from '../constants/Constants';
import { useAppContext } from '../context/Context';

const Modal = (props: { setShowModal: any; }) => {

    const { dispatch } = useAppContext();

    const [formData, setFormData] = useState({
        note_title: '',
        note_description: '',
        tag: 'IMPORTANT'
    });

    const { note_title, note_description, tag } = formData;

    const onSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await addANewNote(formData);
        if (response?.status === 200) {
            toast.success("Note Added");
            setFormData({ ...formData, note_title: '', note_description: '', tag: '' });
            props.setShowModal(false);
            dispatch({ type: GET_ALL_NOTES, payload: response.data.notes });
        } else {
            const errorMessage = response?.data.message;
            toast.error(errorMessage);
        }
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onChangeSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setFormData({ ...formData, tag: value });
    };


    return (
        <>
            <form className="flex flex-col bg-white shadow-2xl border-2 border-purple-800 absolute w-9/12 md:w-6/12 xl:w-5/12  z-50 p-4"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', }}
                onSubmit={onSubmitHandler}
            >
                <input
                    type="text"
                    name="note_title"
                    placeholder="Enter Title"
                    className="px-4 py-3 mb-8 text-purple-500 border-2 border-purple-400 focus:border-purple-600 hover:border-purple-300 focus:outline-none mb-4"
                    value={note_title}
                    onChange={onChangeHandler}
                />

                <input
                    type="text"
                    name="note_description"
                    placeholder="Enter Description"
                    className="px-4 py-3 mb-8 text-purple-500 border-2 border-purple-400 focus:border-purple-600 hover:border-purple-300 focus:outline-none mb-4"
                    value={note_description}
                    onChange={onChangeHandler}
                />

                <select className="px-4 py-3 mb-8 border-2 border-purple-400 hover:border-purple-300 focus:border-purple-600 focus:outline-none" value={tag} onChange={onChangeSelectHandler} name="tag">
                    <option value="IMPORTANT" >IMPORTANT</option>
                    <option value="CASUAL">CASUAL</option>
                </select>

                <button
                    className="text-white py-2 px-4 font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 mb-8"
                >
                    Save
                </button>

                <button
                    className="text-white py-2 px-4 font-semibold rounded-lg bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 mb-8"
                    onClick={() => props.setShowModal(false)}
                >
                    Close
                </button>
            </form>
        </>
    );
};

export default Modal;