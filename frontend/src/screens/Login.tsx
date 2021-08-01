import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="container" style={{ maxWidth: '100%', margin: '0rem' }}>
            <div className="bg-login-background min-h-screen">
                <div className="container shadow-inner mx-auto p-4 md:w-2/4">
                    <h1 className="mb-8 text-center"><strong className="text-purple-400">LOGIN</strong></h1>
                    <form className="flex flex-col">
                        <input
                            type="email"
                            placeholder="email"
                            className="px-4 py-3 mb-8 text-purple-500  border-0 border-b-2 border-purple-200 focus:border-purple-600 hover:border-purple-300 focus:outline-none mb-4"
                        />
                        <input
                            type="password"
                            placeholder="password"
                            className="px-4 py-3 mb-8 text-purple-500  border-0 border-b-2 border-purple-200 hover:border-purple-300 focus:border-purple-600 focus:outline-none mb-4"
                        />
                        <button className="text-white py-2 px-4 font-semibold rounded-lg bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 mb-8">LOGIN</button>
                        <p>Don't have an account?<span className="text-purple-700 underline">
                            <Link to='/register'>
                                REGISTER
                            </Link>
                        </span></p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;
