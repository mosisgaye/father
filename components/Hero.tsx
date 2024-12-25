import React from 'react';
import { FaUsers, FaRegLightbulb } from 'react-icons/fa'; 
import '@/app/globals.css';

const Hero: React.FC = () => {
    return (
        <div
            className="flex flex-col items-center justify-center h-[100vh] md:h-[100vh] bg-cover bg-center pt-20 px-4 md:pt-24 md:px-8 bg-opacity-70"
            style={{ backgroundImage: "url('/images/banner.jpg')" }}
        >
            <h1 className="text-3xl md:text-5xl font-semibold mb-6 md:mb-8 text-center text-black transition-transform duration-500 hover:scale-105 leading-snug">
            In verbinding met jezelf, in verbinding met je gezin
            </h1>
            
            <div className="flex flex-col md:flex-row justify-around items-center w-full max-w-3xl space-y-6 md:space-y-0 md:space-x-8 mt-4">
            <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 cursor-pointer">
                    <img src="/images/Vadermetkind.svg" alt="Life Coach voor Mannen" className="w-40 h-40 md:w-28 md:h-28 mb-3"/>
                    <h2 className="text-lg md:text-xl font-semibold text-white text-center">Vaderschapschoach</h2>
                </div>
                <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 cursor-pointer">
                    <img src="/images/vader.svg" alt="Vaderschapscoach" className="w-40 h-40 md:w-28 md:h-28 mb-3"/>
                    <h2 className="text-lg md:text-xl font-semibold text-white  text-center">Mental health coach</h2>
                </div>
              
            </div>
            
       
            
            <a
                href="#contact"
                className="mt-8 px-6 py-3 md:px-8 md:py-3 text-sm md:text-base text-white bg-[#0065de] rounded-lg shadow-lg hover:bg-[#0056b3] transition-colors duration-300"
            >
                Maak een afspraak
            </a>

        </div>
    );
};

export default Hero;
