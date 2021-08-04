import React from 'react';
import { AddANoteModal } from '../components';

const Notes = () => {
    return (
        <div className="container mx-auto">
            <div>
                <AddANoteModal />
            </div>
            <div>All Notes</div>
        </div>
    );
};

export default Notes;