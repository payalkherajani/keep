import React from 'react';

const Login = () => {
    return (
        <div className="container">
            <div className="bg-login-background min-h-screen">
                <div className="container mx-auto px-4">

                    <input type="email"
                        placeholder="email"
                        className="form-input px-4 py-3 rounded-full"
                    />

                    <input
                        type="password"
                        placeholder="password"
                        className="form-input px-4 py-3 rounded-full"
                    />

                    <button>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
