import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="relative flex flex-col md:flex-row justify-center items-center py-10 md:py-20"
      style={{
        background: "linear-gradient(to bottom, #e0dbd4 40%, #ffffff 60%)",
      }}
    >
      <div className="relative flex flex-col md:flex-row items-center">
        <div className="relative">
          <div className="overflow-hidden border border-[#0065de]">
            {/* Rectangular image */}
            <Image
              src="/images/hero.jpeg"
              alt="Moniek James"
              width={300} // Adjusted for mobile
              height={400} // Adjusted for mobile
              className="object-cover"
            />
          </div>
          {/* Round image in overlay, hidden on mobile */}
          <div className="absolute -top-8 -left-8 rounded-full overflow-hidden w-32 h-32 md:w-44 md:h-44 hidden md:block">
            <Image
              src="/images/hero.jpeg"
              alt="Moniek James Small"
              width={176} // Adjusted width
              height={176} // Adjusted height
              className="object-cover"
            />
          </div>
        </div>
        {/* Text next to the images */}
        <div className="mt-6 md:mt-0 md:ml-16 text-center md:text-left px-4">
          <h1 className="text-[#0065de] text-3xl md:text-5xl mb-4 font-bold uppercase">
            HELLO, I'M MONIEK JAMES
          </h1>
          <p className="text-base md:text-lg text-gray-700 mb-6 font-light italic uppercase">
            (BUT YOU CAN CALL ME MO)
          </p>
          
          <h2 className="text-[#b5885c] text-xl md:text-3xl mb-6 md:mb-8 font-semibold leading-relaxed uppercase">
            THE BEST DECISION YOU’LL EVER MAKE <br className="hidden md:block" />
            IS SAYING YES <br className="hidden md:block" />
            TO YOUR OWN EVOLUTION.
          </h2>
          <button className="bg-[#0065de] text-white py-2 px-6 md:py-4 md:px-12 rounded text-base md:text-lg uppercase hover:bg-blue-900 font-bold">
            WORK WITH MO
          </button>
        </div>
      </div>
    </section>
  );
}
