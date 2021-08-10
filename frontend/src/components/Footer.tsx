import React from 'react';

function Footer() {
    return (
        <div
            className="container bg-purple-400 py-10 px-2 md:px-8  text-white flex justify-between fixed bottom-0"
            style={{ maxWidth: '100%' }}
        >
            <h6> Copyright &copy; 2021 Smriti</h6>
            <div>
                <ul className="flex space-x-4  md:space-x-6">
                    <li className="hover:text-purple-800">
                        <a href="https://twitter.com/payal_kherajani" target="_blank">
                            <i className={`fab fa-twitter text-2xl`}></i>
                        </a>
                    </li>

                    <li className="hover:text-purple-800">
                        <a href="https://www.linkedin.com/in/payalkherajani/" target="_blank">
                            <i className={`fab fa-linkedin-in text-2xl`}></i>
                        </a>
                    </li>

                    <li className="hover:text-purple-800">
                        <a href="https://github.com/payalkherajani" target="_blank">
                            <i className={`fab fa-github text-2xl`}></i>
                        </a>
                    </li>

                    <li className="hover:text-purple-800">
                        <a href="https://www.instagram.com/" target="_blank">
                            <i className={`fab fa-instagram text-2xl`}></i>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Footer;