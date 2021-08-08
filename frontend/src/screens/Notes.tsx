import React, { useState } from 'react';
import { Navbar, Footer, NotesCard } from '../components';

const Notes = () => {
    return (
        <div className="container" style={{ maxWidth: '100%', margin: '0rem' }}>
            <Navbar />
            <NotesCard />
            <button className="fixed right-5 h-24 w-24 bottom-10 z-10 rounded-full p-5 bg-purple-400"><i className="fas fa-plus text-2xl text-white"></i></button>
        </div>
    );
};

export default Notes;