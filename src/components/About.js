import React from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import { FaChevronDown } from 'react-icons/fa'

const About = () => {
    return (
        <div className="max-w-4xl mt-20 mx-auto">
            <p className="text-2xl text-black md:marker:text-4xl font-bold text-center">
                Hey 👋
            </p>
            <p className="text-base sm:text-xl text-center text-grey-600 leading-relax mt-4">
                I am Abdul Qadir Abbasi, a Software Engineer based in Karachi, Pakistan.I am a self-taught developer with a passion for learning new technologies and solving problems.
                I would like to be a part of a team that can help me to grow as a developer.
            </p>
            <ScrollIntoView selector="#tech">
                <div className="mx-auto p-20">
                    <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500" />
                </div>
            </ScrollIntoView>
        </div>

    )
}

export default About 