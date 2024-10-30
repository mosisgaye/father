import React from 'react';
import { FaUsers, FaRegLightbulb } from 'react-icons/fa'; 
import '@/app/globals.css';

const Hero: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-[75vh] md:h-[60vh] bg-gradient-to-b from-[#e0dbd4] to-[#ffffff] pt-20 px-4 md:pt-24 md:px-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 text-center text-[#333] transition-transform duration-500 hover:scale-105 leading-snug">
                In verbinding met jezelf, <br />
                <span className="text-[#0065de]">in verbinding met je gezin</span>
            </h1>
            
            <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-3xl space-y-6 md:space-y-0 md:space-x-8 mt-4">
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105">
                    <img src="/images/vader.svg" alt="Vaderschapscoach" className="w-20 h-20 md:w-28 md:h-28 mb-3"/>
                    <h2 className="text-lg md:text-xl font-semibold text-[#333] text-center">Vaderschapscoach</h2>
                </div>
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105">
                    <img src="/images/Vadermetkind.svg" alt="Life Coach voor Mannen" className="w-20 h-20 md:w-28 md:h-28 mb-3"/>
                    <h2 className="text-lg md:text-xl font-semibold text-[#333] text-center">Life Coach voor Mannen</h2>
                </div>
            </div>
            
            <blockquote className="mt-8 md:mt-10 text-base md:text-lg italic text-center text-[#555] px-4 md:px-0 max-w-2xl">
                "Verbinding met jezelf, verbinding met je gezin."
            </blockquote>
            
            <a
                href="#contact"
                className="mt-8 px-6 py-3 md:px-8 md:py-3 text-sm md:text-base text-white bg-[#0065de] rounded-lg shadow-lg hover:bg-[#0056b3] transition-colors duration-300"
            >
                Contact
            </a>
        </div>
    );
};

export default Hero;
