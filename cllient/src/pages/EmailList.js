import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Header from "./navigation/Header";
import Footer from "./navigation/Footer";

import axios from "axios";
import EmailComponent from '../components/EmailComponent';


const EmailList = () => {
    const [emails, getEmails] = useState([])

    const getEmailsData = async () => {
        const {data} = await axios.get("http://127.0.0.1:5000/api/useremails/getAllEmails");
        getEmails(data);
        console.log("here is the data", data);
    }

    useEffect(() => {
        getEmailsData();

    }, [])

    console.log("here is the emails", emails);

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
                            Jenna Stones's Inbox
                        </h3>
                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                            <i className="fas fa-envelope mr-2 text-lg text-blueGray-400" />
                             Inbox
                        </div>
                        
                        <div className="mb-2 text-blueGray-600 mt-10">

                        {/* component */}
                        <div className="container mx-auto max-w-sm flex flex-col space-y-4 justify-center items-center">
                        
                        {
                            emails.map((email) => (
                                <div  key={email.id}>
                                <EmailComponent email={email}/>
                                </div>
                            ))
                        }

                        
                            
                        
                        </div>



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

export default EmailList
