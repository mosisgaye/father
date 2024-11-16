import React from 'react';
import '@/app/globals.css'

export default function CallToAction() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-gradient-to-b from-[#e0dbd4] to-[#ffffff] py-40 px-6 md:px-16 space-y-6 md:space-y-0 md:space-x-10">
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6">
        <h2 className="text-[#0065de] text-3xl md:text-4xl font-bold leading-tight">
        Klaar om aan jezelf te werken of stappen te zetten in je vaderschap?
        </h2>
        <div className='items-center'>
        <button className="bg-[#0065de] Boeken text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-[#e43f5a] hover:shadow-2xl transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#e43f5a]">
        Maak een afspraak
        </button>
        </div>
      </div>
      <div className="rounded-full overflow-hidden w-40 h-40 md:w-60 md:h-60 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
        <img
          src="/images/baby.jpg"
          alt="Lachende persoon met een baby"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
