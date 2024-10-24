'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="top-0 z-50 bg-[#e0dbd4] text-black px-4 h-12 md:px-10 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" aria-label="Retourner à l'accueil ComparePrix">
          <Image className="" width={124} height={100} src="/images/logo.png" alt="Logo vaderhart" />
        </Link>
      </div>

      {/* Navigation Links for desktop */}
      <div className="hidden xl:flex space-x-8 lg:space-x-12 px-20 flex-grow items-center justify-center">
        <Link href="/" className="py-2 hover:text-[#663d2e] font-medium">HOME</Link>
        <Link href="/about" className="py-2 hover:text-[#663d2e] font-medium">ABOUT</Link>
        <Link href="/services" className="py-2 hover:text-[#663d2e] font-medium">SERVICES</Link>
        <Link href="/speaking" className="py-2 hover:text-[#663d2e] font-medium">SPEAKING</Link>
        <Link href="/blog" className="py-2 hover:text-[#663d2e] font-medium">BLOG</Link>
        <Link href="/contact" className="py-2 hover:text-[#663d2e] font-medium">CONTACT</Link>
      </div>

      {/* Hamburger Menu for mobile */}
      <button className="xl:hidden ml-2" onClick={toggleMenu} aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}>
        {!isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-black dark:text-white">
            <path d="M5 17h14M5 12h14M5 7h14" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-black">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#012737] text-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40 overflow-hidden`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="relative w-40" aria-label="Retourner à l'accueil ComparePrix">
              <Image alt="Logo ComparePrix" src="/images/logo.png" width={160} height={40} />
            </Link>
            <button onClick={toggleMenu} className="text-white" aria-label="Fermer le menu">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="mt-10 flex flex-col space-y-4 text-center">
            <Link href="/" className="py-2 hover:text-[#663d2e] font-medium">HOME</Link>
            <Link href="/about" className="py-2 hover:text-[#663d2e] font-medium">ABOUT</Link>
            <Link href="/services" className="py-2 hover:text-[#663d2e] font-medium">SERVICES</Link>
            <Link href="/speaking" className="py-2 hover:text-[#663d2e] font-medium">SPEAKING</Link>
            <Link href="/blog" className="py-2 hover:text-[#663d2e] font-medium">BLOG</Link>
            <Link href="/membership" className="py-2 hover:text-[#663d2e] font-medium">CONTACT</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}