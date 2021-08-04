import React, { useState } from 'react';
import { AddANoteModal } from '../components';

const Notes = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="container mx-auto">
            <div>
                {showModal && <AddANoteModal />}
            </div>
            <div>All Notes</div>
        </div>
    );
};

export default Notes;