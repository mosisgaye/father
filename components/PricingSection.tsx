import React from 'react';
import '@/app/globals.css'

function PricingSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#5f3b2f] uppercase mb-10">Tarieven en Pakketten</h2>
        
        {/* Sectie van de prijskaarten */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Kaart 1 : Individuele Sessie */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-center text-[#5f3b2f] mb-4">Individuele Sessie</h3>
            <p className="text-center text-gray-700 mb-6">
              1 Sessie: <br /> 55 €
            </p>
            <div className="text-center mb-6">
              <span className="text-3xl font-bold text-[#b5885c]">55 €</span>
            </div>
            <ul className="text-gray-700 mb-6 space-y-3">
              <li className="flex justify-center items-center">
                ✔︎ Persoonlijke sessie
              </li>
              <li className="flex justify-center items-center">
                ✔︎ Aangepaste opvolging
              </li>
            </ul>
            <div className="text-center">
              <button className="bg-[#b5885c] text-white py-2 px-6 rounded-full hover:bg-[#5f3b2f] transition-colors duration-300">
                Boeken
              </button>
            </div>
          </div>
          
          {/* Kaart 2 : 5-Sessiepakket */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-center text-[#5f3b2f] mb-4">5-Sessiepakket</h3>
            <p className="text-center text-gray-700 mb-6">
              5% korting, <br /> 52 € per sessie
            </p>
            <div className="text-center mb-6">
              <span className="text-3xl font-bold text-[#b5885c]">260 €</span>
            </div>
            <ul className="text-gray-700 mb-6 space-y-3">
              <li className="flex justify-center items-center">
                ✔︎ 5 individuele sessies
              </li>
              <li className="flex justify-center items-center">
                ✔︎ Persoonlijke opvolging
              </li>
              <li className="flex justify-center items-center">
                ✔︎ Flexibel en aangepast
              </li>
            </ul>
            <div className="text-center">
              <button className="bg-[#b5885c] text-white py-2 px-6 rounded-full hover:bg-[#5f3b2f] transition-colors duration-300">
                Kies dit pakket
              </button>
            </div>
          </div>

          {/* Kaart 3 : 10-Sessiepakket */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-center text-[#5f3b2f] mb-4">10-Sessiepakket</h3>
            <p className="text-center text-gray-700 mb-6">
              Bijna 10% korting, <br /> 49,50 € per sessie
            </p>
            <div className="text-center mb-6">
              <span className="text-3xl font-bold text-[#b5885c]">495 €</span>
            </div>
            <ul className="text-gray-700 mb-6 space-y-3">
              <li className="flex justify-center items-center">
                ✔︎ 10 individuele sessies
              </li>
              <li className="flex justify-center items-center">
                ✔︎ Grondige opvolging
              </li>
              <li className="flex justify-center items-center">
                ✔︎ Langdurige betrokkenheid
              </li>
            </ul>
            <div className="text-center">
              <button className="bg-[#b5885c] text-white py-2 px-6 rounded-full hover:bg-[#5f3b2f] transition-colors duration-300">
                Kies dit pakket
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
