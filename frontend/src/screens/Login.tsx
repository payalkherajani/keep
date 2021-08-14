import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../services/users';
import { toast } from 'react-toastify';

const Login = (): JSX.Element => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onLoginFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await userLogin(formData);
        if (response.status === 200) {
            const { data: { token } } = response;
            localStorage.setItem('token', token);
            navigate('/notes');
        }
        else {
            const errorMessage = response.data.message;
            toast.error(errorMessage);
        }
    };
    const onFormChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="container" style={{ maxWidth: '100%', margin: '0rem' }}>
            <div className="bg-login-background min-h-screen bg-no-repeat bg-center bg-cover">
                <div className="container shadow-inner mx-auto p-4 md:w-2/4">
                    <h1 className="mb-8 text-center"><strong className="text-purple-400">LOGIN</strong></h1>

                    <form className="flex flex-col" onSubmit={onLoginFormSubmit}>
                        <input
                            type="email"
                            placeholder="email"
                            className="px-4 py-3 text-purple-500  border-0 border-b-2 border-purple-200 focus:border-purple-600 hover:border-purple-300 focus:outline-none mb-4"
                            name="email"
                            value={email}
                            onChange={onFormChangeHandler}
                            required
                        />
                        <input
                            type="password"
                            placeholder="password"
                            className="px-4 py-3 text-purple-500  border-0 border-b-2 border-purple-200 hover:border-purple-300 focus:border-purple-600 focus:outline-none mb-4"
                            name="password"
                            value={password}
                            onChange={onFormChangeHandler}
                            required
                        />

                        <button
                            className="text-white py-2 px-4 font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 mb-4"
                        >
                            LOGIN
                        </button>

                        <p>Don't have an account?
                            <span className="text-purple-700 underline">
                                <Link to='/register'>
                                    REGISTER
                                </Link>
                            </span>
                        </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;
