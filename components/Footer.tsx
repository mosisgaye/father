import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#e0dbd4] py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Section © 2024 Vaderhart alignée à gauche */}
          <div className="flex flex-1 justify-center md:justify-start">
            <p className="text-base md:text-lg text-black font-medium hover:text-[#0070bb] transition-all duration-300">
              © 2024 Vaderhart Alle rechten voorbehouden.
            </p>
          </div>

          {/* Section centrale avec liens */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <Link href="/mentions-legales">
              <div className="text-base md:text-lg text-black font-medium transition-all duration-300 hover:text-[#0070bb]">
                Juridische kennisgeving
              </div>
            </Link>
            <Link href="/condition-generale">
              <div className="text-base md:text-lg text-black font-medium transition-all duration-300 hover:text-[#0070bb]">
                Algemene voorwaarden
              </div>
            </Link>
            <Link href="/cookies">
              <div className="text-base md:text-lg text-black font-medium transition-all duration-300 hover:text-[#0070bb]">
                Cookies
              </div>
            </Link>
          </div>

          {/* Section GDPR alignée à droite */}
          <div className="flex flex-1 justify-center md:justify-end">
            <a
              href="https://gdprinfo.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img
                src="/images/gdpr.svg"
                alt="GDPR Logo"
                className="w-8 h-8 md:w-10 md:h-10 object-contain hover:opacity-80 transition-opacity duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
