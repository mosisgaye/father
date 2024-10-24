'use client'

import { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "I became the woman who decided she's worthy of what she wants and creates it for herself.",
    name: "Jane Doe",
  },
  {
    text: "I transformed my mindset and now I achieve everything I set my mind to.",
    name: "Mary Smith",
  },
  {
    text: "I turned my dreams into reality, one step at a time.",
    name: "Emma Brown",
  },
];

export default function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevious = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Défilement automatique des témoignages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Changez la durée ici (en millisecondes)

    return () => clearInterval(interval); // Nettoie l'intervalle à la désactivation du composant
  }, []);

  return (
    <div className="bg-[#f5deb3] flex flex-col items-center py-10 px-4">
      <div className="relative max-w-4xl text-center">
        <p className="text-[#AA2C2C] uppercase tracking-wider text-sm mb-4">
          So I Became Her...
        </p>
        <p className="text-2xl md:text-4xl font-bold text-[#4F2E2E]">
          {testimonials[currentTestimonial].text}
        </p>
        <p className="text-lg font-semibold mt-4">
          - {testimonials[currentTestimonial].name}
        </p>

        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <button onClick={handlePrevious} className="text-[#AA2C2C]">
            &lt;
          </button>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button onClick={handleNext} className="text-[#AA2C2C]">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
