import React, {useState, useEffect} from 'react';
import axios from "axios";



const AddEmail = () => {
    const [subject, setSubject] = useState("")
    const [content, setContent] = useState("")

    const submitEmail = async() =>{
        // alert("form submited")
        const data = {
            subject: subject,
            content: content,
        }
        await axios.post("http://127.0.0.1:5000/api/useremails/addUseremail", data)
    }

    console.log(subject)
    console.log(content)

    return (
        <div>
            {/* component */}
            <div className="flex h-screen bg-gray-100">
            <div className="m-auto">
                <div>
                    <br />
                <h1 className="text-6xl uppercase font-extrabold">Compose An Email</h1>

                <form onSubmit={submitEmail}>
                <div className="mt-5 bg-white rounded-lg shadow">
                    <div className="flex">
                    <div className="flex-1 py-5 pl-5 overflow-hidden">
                        <svg className="inline align-text-top" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <g>
                            <path d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z" fill="none" id="svg_1" stroke="null" />
                            <path d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z" id="svg_2" />
                            <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3" />
                        </g>
                        </svg>
                        <h1 className="inline text-2xl font-semibold leading-none">Sender</h1>
                    </div>
                    </div>
                    <div className="px-5 pb-5">
                    <input type="text" placeholder="Email Subject" value={subject} onChange={(e) => {setSubject(e.target.value)}}  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" />
                    <textarea placeholder="Email Content" value={content} onChange={(e) => {setContent(e.target.value)}}  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400" /> 
                    
                    
                    </div>
                   
                    <hr className="mt-4" />
                    <div className="flex flex-row-reverse p-3">
                    <div className="flex-initial pl-3">
                        <button type="submit" className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize   bg-black rounded-md hover:bg-gray-800  focus:outline-none focus:bg-gray-900  transition duration-300 transform active:scale-95 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z" opacity=".3" />
                            <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z" />
                        </svg>
                        <span  className="pl-2 mx-1">Send Now</span>
                        </button>
                    </div>
                    
                    </div>
                </div>

                </form>
                
              
                </div>
            </div>
            </div>

        </div>
    )
}

export default AddEmail
