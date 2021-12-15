import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Header from "./navigation/Header";
import Footer from "./navigation/Footer";
import {useParams} from "react-router";

import axios from "axios";


const EmailDetail = () => {

    const [email, setEmail] = useState([])

    const {id} = useParams()

    const getEmail = async () => {
        const {data} = await axios.get(`http://127.0.0.1:5000/api/useremails/${id}`);
        setEmail(data);
        console.log("here is all data data", data);
    }

    const deleteEmail = async () => {
        const {data} = await axios.delete(`http://127.0.0.1:5000/api/useremails/${id}`);
        console.log("email deleted", );
    }


    useEffect(() => {
        getEmail();
        

    }, [])

    return (
        <div>
        {/* component */}
        
        <main className="profile-page">
           {/* header */}

           <Header />

            <section className="relative py-16 bg-blueGray-200">
            <div className="container mx-auto px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div className="relative">
                        <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                        <div className="py-6 px-3 mt-32 sm:mt-0">
                        
                        </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                       
                    </div>
                    </div>
                    <div className="text-center mt-12">
                    
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                        Famagusta, Cyprus
                    </div>
                    
                    <div className="mb-2 text-blueGray-600 mt-10">
                         
                    <section className="flex items-center justify-center px-4 bg-white">
                        <div className="max-w-lg w-full rounded-lg shadow-lg p-4">
                            <h3 className="font-semibold text-lg text-gray-700 tracking-wide">{email.subject}</h3>
                            <p className="text-gray-500 my-1">
                                {email.content}
                            </p>

                            <br />
                            <div>
                            <button onClick={deleteEmail} className="uppercase font-semibold tracking-wide bg-red-100 text-blue-700 px-4 py-2 rounded-lg mt-5 focus:outline-none hover:bg-blue-200">Delete Message</button>
                            </div>
                        </div>
                    </section>

                    </div>
                    
                    </div>
                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-9/12 px-4">
                    
                            <Link to="/" className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
                                Go Back Home
                            </Link>

                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>


           {/* footer */}
           <Footer />
            
            </section>
        </main>
    </div>
    )
}

export default EmailDetail
