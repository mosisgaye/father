import Image from 'next/image';
import '@/app/globals.css';

function AboutSection() {
  return (
    <section className="bg-[#f9f9f9] py-20 flex flex-col items-center">
      <div className="container mx-auto max-w-5xl px-6 sm:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Ben je op zoek naar balans in je leven? 
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Als vader of als man? Of je nu vader bent of (nog) geen kinderen hebt, je vraagt je misschien af: Hoe blijf ik mezelf trouw in een wereld vol verwachtingen, in een snelheidsmaatschappij waar we het altijd druk hebben?
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Texte à gauche */}
          <div className="md:w-2/3">
            <p className="text-gray-600 leading-relaxed mb-6">
              Als mannencoach én vaderschapscoach ben ik er voor jou. Voor vaders die zoeken naar verbinding in hun gezin, én voor mannen die op zoek zijn naar mentale balans, persoonlijke groei en veerkracht.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li><strong>Persoonlijke groei:</strong> Samen kijken we naar wie je bent en wie je wilt zijn, als vader en als individu.</li>
              <li><strong>Holistische aanpak:</strong> We werken aan alle dimensies die belangrijk zijn voor jouw welzijn, want alles hangt met elkaar samen.</li>
              <li><strong>Praktische tools:</strong> Handvatten die je dagelijks kunt inzetten om sterker in het leven te staan.</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              Coaching biedt een veilige plek om stil te staan, inzicht te krijgen en stappen te zetten. Neem contact op en ontdek wat Vaderhart voor jou kan betekenen.
            </p>
          </div>

          {/* Image à droite */}
          <div className="md:w-1/3 flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/about.jpeg" // Replace this with the correct image path
                alt="Profile Picture"
                width={500}
                height={700}
                className="rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
