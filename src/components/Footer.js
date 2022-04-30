import React from 'react'
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="py-5 border-t-3/2">
            <div className="flex justify-center mt-4">
                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/qadir1020">
                    <FaGithub />
                    <span class="sr-only">Github</span>
                </a>
                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-800 hover:bg-blue-800 rounded-full hover:text-white transition-colors duration-300" href="https://www.linkedin.com/in/abdul-qadir-abbasi-42b996121/">
                    <FaLinkedin />
                    <span class="sr-only">Github</span>
                </a>
                <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-black rounded-full hover:text-white transition-colors duration-300" href="https://mailto:qadirabbasi1020@gmail.com">
                    <FaRegEnvelope />
                    <span class="sr-only">Email</span>
                </a>
            </div>
            <div className="flex align-center justify-center mt-4">
                <p className="text-black mb-4">
                    Made by <span className="mr-2" role="img" aria-label="heart">👉</span><a className="text-blue-500 hover:underline" href="mailto:qadirabbasi1020@gmail.com">Abdul Qadir Abbasi</a>
                </p>
            </div>
        </div>
    )
}

export default Footer