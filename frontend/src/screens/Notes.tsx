import React, { useState } from 'react';
import { Navbar, NotesCard, Modal } from '../components';

const Notes = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="container" style={{ maxWidth: '100%', margin: '0rem' }}>
            <Navbar />
            <NotesCard />
            <button
                className="fixed right-5 h-20 w-20 bottom-10 z-10 rounded-full p-5 bg-purple-400"
                onClick={() => setShowModal(true)}

            >
                <i className="fas fa-plus text-2xl text-white"></i>
            </button>
            {
                showModal && <Modal showModal={setShowModal} />
            }
        </div>
    );
};

export default Notes;
