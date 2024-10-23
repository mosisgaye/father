import Image from 'next/image';

function AboutSection() {
  return (
    <section className="bg-white py-16 flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Texte à gauche */}
          <div className="md:w-3/5 mb-8 md:mb-0"> {/* Reduced width */}
            <h2 className="text-3xl font-bold mb-4 text-left text-[#5f3b2f] uppercase">
              I'm a Certified Confidence Coach, US Army Veteran, and Audacity Activator
            </h2>
            {/* Horizontal line with exact thickness and color */}
            <hr className="border-t-4 border-[#b5885c] w-24 mb-6" />
            <p className="text-xl mb-6 text-left text-gray-700 leading-relaxed">
              I help world-changing women walk boldly in their power and show up fully expressed in all areas of their lives!
            </p>
            <p className="text-xl mb-6 text-left text-gray-700 leading-relaxed">
              My life experiences have shown me that no matter what you have been through, with just a few strokes of the paintbrush, you can create a brand-new masterpiece.
            </p>
            <p className="text-xl text-left text-gray-700 leading-relaxed">
              These days you can find me spending quality time with my family, engaging in daily self-care, reading a good book, taking long walks, and having glorious do-nothing time; but my life wasn't always this way.
            </p>
            <p className="text-xl text-left text-gray-700 leading-relaxed">
              These days you can find me spending quality time with my family, engaging in daily self-care, reading a good book, taking long walks, and having glorious do-nothing time; but my life wasn't always this way.
            </p>
          </div>
          
          {/* Image à droite */}
          <div className="md:w-1/3 flex justify-center md:justify-end md:ml-2"> {/* Reduced left margin */}
            <div className="rounded-md overflow-hidden shadow-md">
              <Image
                src="/images/about.jpeg" // Replace this with the correct image path
                alt="Profile Picture"
                width={400}
                height={600}
                className="rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
