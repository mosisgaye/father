"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        {/* Profile Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="w-48 h-48 md:w-56 md:h-56 mx-auto relative"
            >
              <img
                src="/images/profil.jpg"
                alt="Robrecht"
                className="rounded-full object-cover w-full h-full shadow-2xl border-4 border-white"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-black/20" />
            </motion.div>
          </div>

          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold text-[#5f3b2f] mb-6"
          >
            Over Mij
          </motion.h1>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="p-6 h-full">
              <div className="h-[600px] pr-4">
                <div className="space-y-6 text-gray-700 italic">
                  <p className="leading-relaxed">
                    Als vader van twee jonge kinderen, als zoon, als echtgenoot
                    en als leerkracht heb ik reeds de verschillende rollen die
                    een man aanneemt, mogen ervaren...
                  </p>
                  <p className="leading-relaxed">
                    De belangrijkste referentie die ik kan voorleggen, is in de
                    eerste plaats mijn eigen persoonlijke zoektocht van meer dan
                    10 jaar in het willen begrijpen van mentaal welzijn en het
                    verband met de vroege kindertijd...
                  </p>
                  <p className="leading-relaxed">
                    Immers: 'Je kan niet gidsen als je er niet bent geweest.'
                    Onderweg verdiepte ik mij in diverse onderwerpen zoals
                    mannenwerk, complex trauma, hartritme-coherentie, de
                    polyvagaaltheorie...
                  </p>
                  <p className="leading-relaxed">
                    Als overtuigd moslim draag ik mijn islamitische identiteit
                    openlijk uit, maar wil mijn boodschap toegankelijk en
                    beschikbaar maken voor elke vader, jongen of man die op zoek
                    is naar zichzelf, Ik probeer ook vaak linken te leggen met
                    spirituele boodschappen aangezien dit volgens mij voor
                    verdieping en verbinding kan zorgen. In essentie richt de
                    kern van mijn begeleiding zich er op om mannen hun
                    authentieke zelf te helpen vinden. <span className="font-bold">Het gaat om het leren
                    kijken naar de binnenwereld in een wereld waar de buitenkant
                    zo belangrijk lijkt.</span>
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Background */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-[#5f3b2f]" />
                <h3 className="text-xl font-semibold text-[#5f3b2f] italic">
                  Mijn achtergrond
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700 italic">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#5f3b2f]" />
                  <span>Vaderscoach en mental health coach</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#5f3b2f]" />
                  <span>Master in de klinische psychologie i.o.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#5f3b2f]" />
                  <span>
                    Pedagogische bekwaamheid als leerkracht secundair onderwijs
                  </span>
                </li>
              </ul>
            </Card>

            {/* Training */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-[#5f3b2f]" />
                <h3 className="text-xl font-semibold text-[#5f3b2f] italic">
                  Opleidingen
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700 italic">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#5f3b2f]" />
                  <span>Masterclass 'Boys will be boys' - Jürgen Peeters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#5f3b2f]" />
                  <span>
                    Samen veerkrachtig: de (on)zin van de eerste 1000 dagen
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#5f3b2f]" />
                  <span>Training omgaan met Borderline - Similes</span>
                </li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
