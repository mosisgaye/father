import Image from 'next/image';

function MilitaryStory() {
  return (
    <section className="bg-[#f9f9f9] py-20 flex flex-col items-center">
      <div className="container mx-auto max-w-5xl px-6 sm:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Wat mag ik verwachten en hoe kan Vaderhart je helpen groeien?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Bij Vaderhart vind je een veilige ruimte om te ontdekken, te reflecteren en te groeien 🌱. Mijn aanpak is gebouwd op twee kernconcepten: her-verbinding met jezelf en de lens van afgestemd opvoeden.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Photo à gauche */}
          <div className="md:w-1/3 flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/about.jpeg" // Remplace ce chemin par le bon chemin de l'image
                alt="Profile Picture"
                width={500}
                height={700}
                className="rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Texte à droite */}
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Her-verbinding met jezelf</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              "Heling betekent (terug) heel worden, alle delen van jezelf integreren en al die aspecten van jezelf erkennen die je hebt verafschuwd, gehaat, afgewezen of waarvan je hebt geprobeerd weg te rennen. Het is een terugkeer naar je authentieke zelf, dat nooit is verdwenen, maar waarmee je het contact bent verloren." – G. Maté
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Afgestemd opvoeden</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Afgestemd opvoeden is meer dan een opvoedstijl; het is een manier om jezelf en je kinderen beter te begrijpen. Door te kijken naar je eigen opvoeding, ontdek je hoe jouw verleden invloed heeft op wie je vandaag bent. Dit proces helpt je om bewust te reageren en echte verbinding te creëren met je kinderen.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Wat is het aanbod van Vaderhart? 🚀</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li><strong>Individuele coaching:</strong> Een-op-een begeleiding om je persoonlijke uitdagingen aan te pakken en richting te vinden. 💡</li>
              <li><strong>Vadergroepen:</strong> Inspirerende bijeenkomsten waarin je leert van en met andere vaders. 🤗</li>
              <li><strong>Trainingen:</strong> Praktische workshops om je vaardigheden te verdiepen en te groeien als ouder en als mens. 🎓</li>
              <li><strong>Kennis delen:</strong> Via blog en sociale media.</li>
            </ul>
            <p className="text-gray-600">
              Benieuwd wat dit voor jou kan betekenen? Neem contact op en laten we samen ontdekken wat mogelijk is! ✨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MilitaryStory;
