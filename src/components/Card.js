import React from 'react';
import profile from '../images/logo-image.png';
import { FaGithub, FaLinkedin, FaTwitter, FaRegEnvelope } from 'react-icons/fa';

const Card = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
                <div className="">
                    <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" src={profile} alt="profile" />
                </div>
                <div className="text-center mt-5">
                    <p className="text-xl sm:2xl text-grey-900 font-bold">
                        Abdul Qadir Abbasi
                    </p>
                    <p className="text-xs sm:text-base text-grey-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
                        Softwae Engineer(Front-End)
                    </p>
                    <div className="flex align-center justify-center mt-4">
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
                </div>
            </div>
        </div>
    )
}

export default Card;
