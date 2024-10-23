import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="relative flex justify-center items-center py-20"
      style={{
        background: "linear-gradient(to bottom, #e0dbd4 40%, #ffffff 60%)",
      }}
    >
      <div className="relative flex items-center">
        <div className="relative">
          <div className="overflow-hidden border- border-[#0065de]">
            {/* Rectangular image */}
            <Image
              src="/images/hero.jpeg"
              alt="Moniek James"
              width={360} // Larger image width
              height={480} // Larger image height
              className="object-cover"
            />
          </div>
          {/* Round image in overlay */}
          <div className="absolute -top-16 -left-16  rounded-full overflow-hidden w-44 h-44">
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
        <div className="ml-16">
          <h1 className="text-[#0065de] text-5xl mb-4 font-bold uppercase">
            HELLO, I'M MONIEK JAMES
          </h1>
          <p className="text-lg text-gray-700 mb-12 font-light italic uppercase"> {/* Increased bottom margin */}
            (BUT YOU CAN CALL ME MO)
          </p>
          
          <h2 className="text-[#b5885c] text-3xl mb-8 font-semibold leading-relaxed uppercase">
            THE BEST DECISION YOU’LL EVER MAKE <br />
            IS SAYING YES <br />
            TO YOUR OWN EVOLUTION.
          </h2>
          <button className="bg-[#0065de] text-white py-4 px-12 rounded text-lg uppercase hover:bg-blue-900 font-bold">
            WORK WITH MO
          </button>
        </div>
      </div>
    </section>
  );
}
