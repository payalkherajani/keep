import React from 'react';

const Modal = (props: { showModal: any; }) => {
    return (
        <div className="flex flex-col border-2 border-black absolute top-60 left-28 z-10">
            <input type="text" name="note_title" placeholder="Enter Title" />
            <input type="text" name="note_description" placeholder="Enter Description" />
            <select>
                <option>IMPORTANT</option>
                <option>CASUAL</option>
            </select>
            <button>
                Save
            </button>
            <button>
                Close
            </button>
        </div>
    );
};

export default Modal;