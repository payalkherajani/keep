import React from 'react';

const AddANoteModal = () => {
    return (
        <div>
            <form className="flex flex-col">
                <input
                    type="text"
                    placeholder="Title"
                    className="px-4 py-3 mb-8 text-purple-500  border-2 border-purple-200 focus:border-purple-600 hover:border-purple-300 focus:outline-none mb-4"
                />
                <textarea rows={2} placeholder="Description of Note" className="px-4 py-3 mb-8 text-purple-500  border-2 border-purple-200 focus:border-purple-600 hover:border-purple-300 focus:outline-none mb-4">
                </textarea>
                <select>
                    <option>Important</option>
                    <option>Casual</option>
                </select>
                <button className="text-white py-2 px-4 font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 mb-8">Save</button>
                <button className="text-white py-2 px-4 font-semibold rounded-lg bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 mb-8">Clear</button>
            </form>
        </div>
    );
};

export default AddANoteModal;