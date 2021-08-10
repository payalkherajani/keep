import React from 'react';
// top-40 left-10
const Modal = (props: { setShowModal: any; }) => {
    return (
        <>
            <form className="flex flex-col shadow-xl border-2 border-black absolute w-9/12 md:w-6/12  z-10 p-4" style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}>
                <input
                    type="text"
                    name="note_title"
                    placeholder="Enter Title"
                    className="px-4 py-3 mb-8 text-purple-500 border-2 border-purple-400 focus:border-purple-600 hover:border-purple-300 focus:outline-none mb-4"
                />

                <input
                    type="text"
                    name="note_description"
                    placeholder="Enter Description"
                    className="px-4 py-3 mb-8 text-purple-500 border-2 border-purple-400 focus:border-purple-600 hover:border-purple-300 focus:outline-none mb-4"
                />

                <select className="px-4 py-3 mb-8 border-2 border-purple-400 hover:border-purple-300 focus:border-purple-600 focus:outline-none">
                    <option>IMPORTANT</option>
                    <option>CASUAL</option>
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