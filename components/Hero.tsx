import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="relative flex flex-col md:flex-row justify-center items-center py-12 md:py-24"
      style={{
        background: "linear-gradient(to bottom, #F5DEB3 50%, #F5F5DC 50%)",
      }}
    >
      <div className="relative flex flex-col md:flex-row items-center max-w-6xl mx-auto">
        <div className="relative">
          {/* Large Rectangular Image */}
          <div className="overflow-hidden border-4 border-[#0065de] h-full rounded-xl">
            <Image
              src="/images/hero.jpeg"
              alt="Hero Image"
              width={400} // Taille ajustée pour être plus haute
              height={550} // Taille ajustée pour être plus haute
              className="object-cover"
            />
          </div>
          {/* Round Image Overlay */}
          <div className="absolute -top-12 -left-12 rounded-full overflow-hidden w-32 h-32 md:w-48 md:h-48 border-4 border-[#0065de] hidden md:block">
            <Image
              src="/images/hero.jpeg"
              alt="Hero Image Small"
              width={192} // Ajusté pour correspondre
              height={192} // Ajusté pour correspondre
              className="object-cover"
            />
          </div>
        </div>
        {/* Texte à côté des images */}
        <div className="mt-8 md:mt-0 md:ml-20 text-center md:text-left px-6">
          <h1 className="text-[#0065de] text-3xl md:text-5xl mb-2 font-bold uppercase tracking-wide" style={{ marginTop: '50px'}}>
            Lorem Ipsum Dolor Sit
          </h1>
          <p className="text-base md:text-lg text-[#8c503e] mb-6 font-light italic uppercase">
            (Consectetur Adipiscing Elit)
          </p>
          
          <h2
  className="hero text-[#b5885c] mb-6 md:mb-10 font-semibold leading-relaxed uppercase"
  style={{ marginTop: '80px'}}
>
  Sed do eiusmod tempor <br className="hidden md:block" />
  incididunt ut labore <br className="hidden md:block" />
  et dolore magna aliqua.
</h2>

          <button className="bg-[#0065de] text-white py-2 px-8 md:py-3 md:px-12 rounded text-base md:text-lg uppercase hover:bg-[#8c503e] transition-all duration-300 font-bold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
