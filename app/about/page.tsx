"use client";
import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="bg-gray-100 py-32 px-6 relative">
      <div className="container mx-auto max-w-screen-lg text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative inline-block w-40 h-40 md:w-60 md:h-60 mb-6 mx-auto"
          style={{
            marginBottom: "-50px", // Immersion partielle de l'image dans le texte
          }}
        >
          <img
            src="/images/profil.jpg" // Replace with the path to your profile photo
            alt="Robrecht"
            className="rounded-full shadow-xl border-4 border-white object-cover w-full h-full"
            style={{
              clipPath: "circle(50% at 50% 60%)",
            }}
          />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-bold text-[#5f3b2f] mb-6 italic"
        >
          Over Mij
        </motion.h2>

        {/* Text Content */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-700 italic text-xl leading-relaxed max-w-2xl mx-auto"
        >
          Als vader van twee jonge kinderen, als zoon, als echtgenoot en als
          leerkracht heb ik reeds de verschillende rollen die een man aanneemt,
          mogen ervaren. De belangrijkste referentie die ik kan voorleggen, is
          in de eerste plaats mijn eigen persoonlijke zoektocht van meer dan 10
          jaar in het willen begrijpen van mentaal welzijn en het verband met de
          vroege kindertijd. Immers: ‘Je kan niet gidsen als je er niet bent
          geweest.’ Onderweg verdiepte ik mij in diverse onderwerpen zoals
          mannenwerk, complex trauma, hartritme-coherentie, de
          polyvagaaltheorie, de werking van ons zenuwstelsel, hoogsensitiviteit,
          de ontwikkeling van het jonge kind; en nog veel meer.
          Daarnaast brachten de vele vragen rond mijn eigen vaderrol mij bij
          ‘afgestemd ouderschap’ en ‘responsief ouderschap’. Ik geraakte
          gefascineerd door ‘mannenwerk’ en de transformerende kracht van
          traumaverwerking in het algemeen. Het valt me nog steeds op dat er
          relatief weinig mannen met de opgesomde onderwerpen in aanraking komen
          of zich bewust zijn van de unieke rol die ze kunnen spelen. Nochtans
          zijn thema's als ‘de afwezige vader’ of ‘niet gezien worden als kind’
          voorbeelden van onderwerpen die vaak terugkomen en extra aandacht
          verdienen. Vanuit de raakpunten tussen traumaverwerking en het ruimte
          kunnen geven aan de (emotionele) ontwikkeling van kinderen heb ik mijn
          focus kunnen afbakenen.
          Ik heb geleerd dat veel onderwerpen die te maken hebben met onze eigen
          achtergrond en opvoeding vaak universeel zijn en herkenbaar zijn
          binnen diverse culturen. Als overtuigd moslim draag ik mijn
          islamitische identiteit openlijk uit, maar wil mijn boodschap
          toegankelijk en beschikbaar maken voor elke vader, jongen of man die
          op zoek is naar zichzelf. Ik probeer ook vaak linken te leggen met
          spirituele boodschappen aangezien dit volgens mij voor verdieping en
          verbinding kan zorgen. In essentie richt de kern van mijn begeleiding
          zich er op om mannen hun authentieke zelf te helpen vinden. Het gaat
          om het leren kijken naar de binnenwereld in een wereld waar de
          buitenkant zo belangrijk lijkt.
        </motion.p>
      </div>

      
      <div className="container mx-auto max-w-screen-lg mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-[#5f3b2f] mb-4 italic">
              Mijn achtergrond
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 italic">
              <li>Vadershcoach en mental health coach</li>
              <li>Master in de klinische psychologie i.o.</li>
              <li>
                Pedagogische bekwaamheid als leerkracht secundair onderwijs
              </li>
              <li>Master Rechten en International Development</li>
              <li>Carrière van ruim 10 jaar in het onderwijs onderwijs (leerkracht islamitische godsdienst)</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-[#5f3b2f] mb-4 italic">
              Gevoglde opleidingen en trainingen
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 italic">
              <li>Masterclass ‘Boys will be boys’ - Jürgen Peeters</li>
              <li>
                Samen veerkrachtig: de (on)zin van de eerste 1000 dagen - Binu
                Singh
              </li>
              <li>Succesvol afgestemd opvoeden - Jürgen Peeters</li>
              <li>Training omgaan met Borderline - Similes</li>
              <li>...</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
