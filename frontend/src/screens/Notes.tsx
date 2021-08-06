import React, { useState } from 'react';
import { Navbar, Footer, NotesCard } from '../components';

const Notes = () => {
    return (
        <div className="container" style={{ maxWidth: '100%', margin: '0rem' }}>
            <Navbar />
            <NotesCard />
        </div>
    );
};

export default Notes;