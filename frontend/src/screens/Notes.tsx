import React, { useState, useEffect } from 'react';
import { Navbar, NotesCard, Modal, Footer } from '../components';
import { useAppContext } from '../context/Context';
import { getLoggedInUserInfo } from '../services/users';

const Notes = () => {
    const [showModal, setShowModal] = useState(false);
    const { dispatch } = useAppContext();
    useEffect(() => {
        getLoggedInUserInfo(dispatch);
    }, []);
    return (
        <div className="container" style={{ maxWidth: '100%', margin: '0rem' }}>
            <Navbar />
            <NotesCard showModal={showModal} />
            {
                showModal === false ? (<button
                    className="fixed right-5 h-20 w-20 bottom-32 z-10 rounded-full p-5 bg-purple-400"
                    onClick={() => setShowModal(true)}

                >
                    <i className="fas fa-plus text-2xl text-white"></i>
                </button>) : (null)
            }
            {
                showModal && <Modal setShowModal={setShowModal} />
            }
            <Footer />
        </div>
    );
};

export default Notes;
