import React from 'react';
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
                <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                        Email Inbox App
                    </div>
                    <Link to="/addEmail" className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
                        Compose An Email
                    </Link>

                    </div>
                </div>
                </div>
            </footer>
        </div>

    )
}

export default Footer
