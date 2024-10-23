import React from 'react';

function PricingSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#5f3b2f] uppercase mb-10">Tarifs et Forfaits</h2>
        
        {/* Section des cartes de tarifs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Carte 1 : Forfait 5 sessions */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-center text-[#5f3b2f] mb-4">Forfait 5 sessions</h3>
            <p className="text-center text-gray-700 mb-6">
              5 % de réduction, <br /> 52 € par session
            </p>
            <div className="text-center mb-6">
              <span className="text-3xl font-bold text-[#b5885c]">260 €</span>
            </div>
            <ul className="text-gray-700 mb-6 space-y-3">
              <li className="flex justify-center items-center">
                ✔︎ 5 sessions individuelles
              </li>
              <li className="flex justify-center items-center">
                ✔︎ Suivi personnalisé
              </li>
              <li className="flex justify-center items-center">
                ✔︎ Flexible et adapté
              </li>
            </ul>
            <div className="text-center">
              <button className="bg-[#b5885c] text-white py-2 px-6 rounded-full hover:bg-[#5f3b2f] transition-colors duration-300">
                Choisir ce forfait
              </button>
            </div>
          </div>
          
          {/* Carte 2 : Cercle des Pères / Sessions de Groupe */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-center text-[#5f3b2f] mb-4">Cercle des Pères</h3>
            <p className="text-center text-gray-700 mb-6">
              Sessions de groupe informelles <br /> pour (jeunes) pères
            </p>
            <div className="text-center mb-6">
              <span className="text-3xl font-bold text-[#b5885c]">10 €</span>
            </div>
            <ul className="text-gray-700 mb-6 space-y-3">
              <li className="flex justify-center items-center">
                ✔︎ Partage et soutien
              </li>
              <li className="flex justify-center items-center">
                ✔︎ Discussions ouvertes
              </li>
              <li className="flex justify-center items-center">
                ✔︎ Échanges d'expériences
              </li>
            </ul>
            <div className="text-center">
              <button className="bg-[#b5885c] text-white py-2 px-6 rounded-full hover:bg-[#5f3b2f] transition-colors duration-300">
                Participer
              </button>
            </div>
          </div>

          {/* Carte 3 : Ateliers et Formations */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-center text-[#5f3b2f] mb-4">Ateliers & Formations</h3>
            <p className="text-center text-gray-700 mb-6">
              Offrant des expériences enrichissantes <br /> sur divers aspects de la parentalité
            </p>
            <div className="text-center mb-6">
              <span className="text-xl font-bold text-gray-500">Prix sur demande</span>
            </div>
            <ul className="text-gray-700 mb-6 space-y-3">
              <li className="flex justify-center items-center">
                ✔︎ Sujets variés
              </li>
              <li className="flex justify-center items-center">
                ✔︎ Experts qualifiés
              </li>
              <li className="flex justify-center items-center">
                ✔︎ Apprentissage interactif
              </li>
            </ul>
            <div className="text-center">
              <button className="bg-[#b5885c] text-white py-2 px-6 rounded-full hover:bg-[#5f3b2f] transition-colors duration-300">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
