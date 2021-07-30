import React from 'react';

const Login = () => {
    return (
        <div className="container">
            <div className="bg-login-background min-h-screen">
                <div className="container shadow-inner mx-auto p-4 md:w-2/4">
                    <h1 className="mb-8 text-center"><strong className="text-pink-400">LOGIN</strong></h1>
                    <form className="flex flex-col">
                        <input
                            type="email"
                            placeholder="email"
                            className="px-4 py-3 mb-8 text-pink-500  border-0 border-b-2 border-pink-200 focus:border-pink-600 hover:border-pink-300 focus:outline-none"
                        />
                        <input
                            type="password"
                            placeholder="password"
                            className="px-4 py-3 mb-8 text-pink-500  border-0 border-b-2 border-pink-200 hover:border-pink-300 focus:border-pink-600 focus:outline-none"
                        />
                        <button className="text-white py-2 px-4 font-semibold rounded-lg bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-opacity-50">Login</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;
