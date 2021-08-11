import React from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../assest/avatar1.jpg';

const Navbar = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/');
    };
    return (
        <div className="container items-center bg-purple-400 py-8 flex md:px-8 text-white flex justify-between" style={{ maxWidth: '100%' }}>
            <h1><strong>SMRITI</strong></h1>
            <div className="flex gap-2">
                <img src={avatar} alt="avatar" className="avatar avatar-md" />
                <button onClick={logout}><i className="fas fa-sign-out-alt text-2xl"></i></button>
            </div>

        </div>
    );
};

export default Navbar;