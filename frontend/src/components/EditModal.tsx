import React, { useState } from 'react';
import { CLEAR_NOTE } from '../constants/Constants';
import { useAppContext } from '../context/Context';
import { toast } from 'react-toastify';
import { updateNote } from '../services/notes';

const EditModal = (props: { setEditModalOpen: any; }) => {

    const { state, dispatch } = useAppContext();
    const { note } = state;

    const [formData, setFormData] = useState({
        note_title: note.note_title,
        note_description: note.note_description,
        tag: note.tag
    });

    const { note_title, note_description, tag } = formData;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onChangeSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setFormData({ ...formData, tag: value });
    };


    const onSubmitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await updateNote(formData, note._id, dispatch);
        if (response?.status === 200) {
            toast.success("Note Updated Added");
            setFormData({ ...formData, note_title: '', note_description: '', tag: '' });
            props.setEditModalOpen(false);
            dispatch({ type: CLEAR_NOTE });
        }
    };

    const onChangeHandlerTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <form className="flex flex-col bg-white shadow-2xl border-2 border-purple-800 absolute w-9/12 md:w-6/12 xl:w-5/12  z-50 p-4"
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
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

                <textarea
                    name="note_description"
                    placeholder="Enter Description"
                    className="px-4 py-3 mb-8 text-purple-500 border-2 border-purple-400 focus:border-purple-600 hover:border-purple-300 focus:outline-none mb-4"
                    value={note_description}
                    onChange={onChangeHandlerTextArea}
                    rows={7}
                ></textarea>

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
                    onClick={() => {
                        props.setEditModalOpen(false);
                        dispatch({ type: CLEAR_NOTE });
                    }}
                >Close
                </button>
            </form>
        </div>
    );
};

export default EditModal;