import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto max-w-screen-lg flex flex-col md:flex-row items-center md:items-start">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3 mb-8 md:mb-0"
        >
          <img
            src="/images/profil.jpg" // Replace with the path to your profile photo
            alt="Robrecht"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-2/3 pl-0 md:pl-10"
        >
          <h2 className="text-4xl font-bold text-[#5f3b2f] mb-4">Over Mij</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Ik ben Robrecht – oprichter van het project Vaderhart. Als vader van twee jonge kinderen, zoon, echtgenoot en leerkracht, heb ik reeds de verschillende rollen die een man kan aannemen, mogen ervaren. De belangrijkste referentie die ik kan voorleggen, is in de eerste plaats mijn eigen persoonlijke zoektocht van meer dan 10 jaar in het willen begrijpen van mentaal welzijn en het verband met de vroege kindertijd.
          </p>
          <p className="text-lg font-semibold text-gray-900 mb-6 leading-relaxed">
            "Ik kan niet gidsen als je er niet bent geweest."
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Onderweg verdiepte ik mij in diverse onderwerpen zoals mannenwerk, complex trauma, harttime-coherentie, de polyvagaaltheorie, de werking van ons zenuwstelsel, hoogsensitiviteit, de ontwikkeling van het jonge kind; en nog veel meer.
          </p>

          {/* Background and Mission */}
          <div className="text-gray-600 mb-6">
            <h3 className="text-2xl font-semibold text-[#5f3b2f] mb-4">Mijn Missie</h3>
            <p className="mb-4">
              Mijn begeleiding helpt mannen hun authentieke zelf te vinden en ondersteunt hen in hun vaderrol, op basis van zowel wetenschappelijke kennis als spirituele inzichten. Ik geloof sterk in afgestemd ouderschap en de kracht van traumaverwerking.
            </p>
          </div>

          {/* Background and Education */}
          <div className="text-gray-600">
            <h3 className="text-2xl font-semibold text-[#5f3b2f] mb-4">Mijn Achtergrond en Opleidingen</h3>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Vaderschapscoach en mental health coach</li>
              <li>Master in de klinische psychologie i.o.</li>
              <li>Pedagogische bekwaamheid als leerkracht secundair onderwijs</li>
              <li>Master Rechten en International Development</li>
              <li>Carrière van ruim 10 jaar in het onderwijs</li>
              <li>Masterclass ‘Boys will be boys’ - Jürgen Peeters</li>
              <li>Samen veerkrachtig: de eerste 1000 dagen - Binu Singh</li>
              <li>Training omgaan met Borderline - Similes</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
