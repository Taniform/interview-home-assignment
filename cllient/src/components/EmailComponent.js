import React from 'react';
import { Link } from "react-router-dom";

const EmailComponent = ({email}) => {
    return (
        <div>
            <Link to={`/emailDetail/${email.id}`} >
                <div className="bg-white w-full flex items-center p-2 rounded-xl shadow border">
                    
                    <div className="flex-grow p-3">
                    <div className="font-semibold text-gray-700">
                        {email.subject}
                    </div>
                    <div className="text-sm text-gray-500">
                        {email.content} . 2hr
                    </div>
                    </div>
                    <div className="p-2">
                    <span className="block h-4 w-4 bg-blue-400 rounded-full bottom-0 right-0" />
                    </div>
                    
                </div>
            </Link>
        </div>
    )
}

export default EmailComponent
