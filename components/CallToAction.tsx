import React from 'react';
import '@/app/globals.css'

export default function CallToAction() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-gradient-to-b from-[#e0dbd4] to-[#ffffff] py-10 px-6 md:px-16 space-y-6 md:space-y-0 md:space-x-10">
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6">
        <h2 className="text-[#0065de] text-3xl md:text-4xl font-bold leading-tight">
          KLAAR OM TE BEGINNEN?
        </h2>
        <p className="text-[#333] text-base md:text-lg max-w-md">
          Sluit je vandaag nog bij ons aan en ervaar groei als nooit tevoren. Laten we samen aan de slag gaan.
        </p>
        <button className="bg-[#0065de] text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-[#e43f5a] hover:shadow-2xl transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#e43f5a]">
          WERK MET MO
        </button>
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
