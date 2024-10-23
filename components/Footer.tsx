import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#e0dbd4] py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Section © 2024 ComparePrix alignée à gauche */}
          <div className="flex flex-1 justify-start">
            <p className="text-lg text-black font-medium hover:text-[#0070bb] transition-all duration-300">
              © 2024 ComparePrix.
            </p>
          </div>

          {/* Section centrale avec Mentions légales, Conditions générales, et Cookies */}
          <div className="flex items-center justify-center gap-8">
            <Link href="/mentions-legales">
              <div className="text-lg text-black font-medium transition-all duration-300 hover:text-[#0070bb]">
                Mentions légales
              </div>
            </Link>
            <Link href="/condition-generale">
              <div className="text-lg text-black font-medium transition-all duration-300 hover:text-[#0070bb]">
                Conditions générales
              </div>
            </Link>
            <Link href="/cookies">
              <div className="text-lg text-black font-medium transition-all duration-300 hover:text-[#0070bb]">
                Cookies
              </div>
            </Link>
          </div>

          {/* Section GDPR alignée à droite */}
          <div className="flex flex-1 justify-end">
            <a
              href="https://gdprinfo.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img
                src="/images/gdpr.svg"
                alt="Logo GDPR"
                className="w-10 h-10 object-contain hover:opacity-80 transition-opacity duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
