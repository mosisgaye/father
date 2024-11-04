import React from 'react';
import '@/app/globals.css'

const Faq = () => {
    const faqs = [
        {
            question: "Welke diensten biedt Vaderhart aan?",
            answer:
                "Vaderhart biedt coachingdiensten voor mannen en vaders, met persoonlijke begeleiding om een betere verbinding met zichzelf en hun gezin te bevorderen.",
        },
        {
            question: "Hoe kan Vaderhart mij helpen om een betere vader te worden?",
            answer:
                "Onze coaching helpt u om uw waarden en levensdoelen beter te begrijpen, zodat u gezinsbanden kunt versterken en een persoonlijk evenwicht kunt vinden dat bij u past.",
        },
        {
            question: "Waarom kiezen voor Vaderhart voor levenscoaching?",
            answer:
                "Bij Vaderhart zetten we ons in om hoogwaardige coaching te bieden, gericht op de persoonlijke ontwikkeling van mannen, met tools en middelen die zijn afgestemd op individuele behoeften.",
        },
        {
            question: "Wat zijn de kosten van de diensten van Vaderhart?",
            answer:
                "De tarieven voor de coachingsdiensten van Vaderhart variëren afhankelijk van de specifieke behoeften en de duur van de sessies. Neem contact met ons op voor een persoonlijke offerte.",
        },
        {
            question: "Is Vaderhart gecertificeerd en betrouwbaar?",
            answer:
                "Vaderhart bestaat uit ervaren en gecertificeerde coaches, die zich inzetten om mannen te begeleiden bij hun persoonlijke en familiale ontwikkeling, met professionaliteit en vertrouwelijkheid.",
        },
    ];

    return (
        <div className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-[#e0dbd4] to-[#ffffff] text-[#333] rounded-lg shadow-lg my-10 md:my-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-[#333]">
                Antwoorden op uw vragen
            </h2>
            <div className="space-y-4 divide-y divide-gray-200">
                {faqs.map((faq, index) => (
                    <details
                        key={index}
                        className="group p-4 bg-white rounded-lg shadow-sm transition-transform duration-300 hover:scale-105"
                    >
                        <summary className="text-lg md:text-xl font-medium text-[#0065de] cursor-pointer flex justify-between items-center">
                            {faq.question}
                            <span className="text-[#555] group-open:rotate-180 transition-transform duration-300">▼</span>
                        </summary>
                        <div className="mt-3 overflow-hidden transition-max-height duration-500 ease-in-out group-open:max-h-96">
                            <p className="pt-2 text-[#555] leading-relaxed">{faq.answer}</p>
                        </div>
                    </details>
                ))}
            </div>
        </div>
    );
};

export default Faq;
