import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Header from "./navigation/Header";
import Footer from "./navigation/Footer";

import axios from "axios";


const Landing = () => {
    const [emails, setEmails] = useState([])
    const [unReadEmails, setUnReadEmails] = useState([])

    const getEmailsData = async () => {
        const {data} = await axios.get("http://127.0.0.1:5000/api/useremails/getAllEmails");
        setEmails(data);
        console.log("here is all data data", data);
    }

    const getUnreadEmailsData = async () => {
        const {data} = await axios.get("http://127.0.0.1:5000/api/useremails/getAllUnReadEmails");
        setUnReadEmails(data);
        console.log("here is the unread data", data);
    }

   

    useEffect(() => {
        getUnreadEmailsData();
        getEmailsData();
        

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
                        <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                            Welcome, Jenna Stones
                        </h3>
                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                            Famagusta, Cyprus
                        </div>
                        
                        <div className="mb-2 text-blueGray-600 mt-10">
                            <i className="fas fa-envelope mr-2 text-lg text-blueGray-400" />Your have <b>{unReadEmails.length} </b> unread emails out of <b>{emails.length}</b>
                        </div>
                        
                        </div>
                        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-9/12 px-4">
                        
                                <Link to="/userEmailList" className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
                                    View All Emails
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

export default Landing
