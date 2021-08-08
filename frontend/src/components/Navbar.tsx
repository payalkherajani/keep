import React from 'react';

const Navbar = () => {
    return (
        <div className="container bg-purple-400 py-8 flex md:px-8 text-white flex justify-between px-4" style={{ maxWidth: '100%' }}>
            <h1><strong>SMRITI</strong></h1>
            <div><button><i className="fas fa-sign-out-alt text-2xl"></i></button></div>
        </div>
    );
};

export default Navbar;