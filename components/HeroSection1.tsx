// components/HeroSection.tsx
interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative bg-beige text-gray-900 py-40">
      <div className="container mx-auto px-6 text-center">
        {/* Background Shape */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-300 rounded-full -z-10"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-yellow-300 rounded-full -z-10"></div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Jouw Pad naar Groei en Verbinding begint hier.
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl font-light mb-8 max-w-3xl mx-auto">
          Bij Vaderhart begeleid ik vaders en mannen die willen groeien – als individu, als vader, en als man. Of je nu kiest voor persoonlijke coaching, inspirerende groepsbijeenkomsten of praktische trainingen en webinars, samen zetten we stappen richting meer zelfinzicht, balans en verbinding. Kies de begeleiding die bij jou past.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="bg-black text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition"
          >
            Neem Contact op
          </a>
          <a
            href="/appointment"
            className="bg-blue-500 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
          >
            Maak een Afspraak
          </a>
        </div>
      </div>
    </section>
  );
};
