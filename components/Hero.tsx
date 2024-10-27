import React from 'react';
import { FaUsers, FaRegLightbulb } from 'react-icons/fa'; 
import '@/app/globals.css'

const Hero: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[60vh] bg-gradient-to-b from-[#e0dbd4] to-[#ffffff] pt-24 md:py-36">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center text-[#333] transition transform duration-500 hover:scale-105">
                In verbinding met jezelf, <br />
                <span className="text-animation">in verbinding met je gezin</span>

            </h1>
            <div className="flex flex-col md:flex-row justify-around w-full max-w-4xl px-4">
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 mb-6 md:mb-0">
                    <FaRegLightbulb className="w-24 h-24 mb-4 text-[#0065de]" />
                    <h2 className="text-xl font-semibold text-[#333] text-center">Vaderschapscoach</h2>
                </div>
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105">
                    <FaUsers className="w-24 h-24 mb-4 text-[#0065de]" />
                    <h2 className="text-xl font-semibold text-[#333] text-center">Life Coach voor Mannen</h2>
                </div>
            </div>
            <blockquote className="mt-10 text-lg italic text-center text-[#555] px-4">
                "Verbinding met jezelf, verbinding met je gezin."
            </blockquote>
            <a
                href="#contact"
                className="mt-6 px-6 py-3 text-white bg-[#0065de] rounded-lg shadow-lg hover:bg-[#0056b3] transition duration-300"
            >
                Contacten
            </a>
        </div>
    );
};

export default Hero;
