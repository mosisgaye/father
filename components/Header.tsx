'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="top-0 z-50 bg-[#e0dbd4] text-[#333] px-4 h-12 md:px-10 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <div className="flex">
        <Link href="/" aria-label="Retourner à l'accueil ComparePrix">
          <Image className="w-20 sm:w-28 md:w-36 lg:w-40" width={200} height={160} src="/images/logo.png" alt="Logo vaderhart" />
        </Link>
      </div>

      {/* Navigation Links for desktop */}
      <div className="hidden xl:flex space-x-8 lg:space-x-12 flex-grow items-center justify-center text-xl font-semibold">
        <Link href="/" className="py-2 hover:text-[#663d2e] font-medium">Home</Link>
        <Link href="/about" className="py-2 hover:text-[#663d2e] font-medium">Over mij</Link>
        <Link href="/services" className="py-2 hover:text-[#663d2e] font-medium">Diensten</Link>
        <Link href="/blog" className="py-2 hover:text-[#663d2e] font-medium">Blog</Link>

        {/* Team dropdown menu for desktop */}
        <div 
          className="relative group" 
          onMouseEnter={() => setIsTeamDropdownOpen(true)}
          onMouseLeave={() => setIsTeamDropdownOpen(false)}
        >
          <button className="flex items-center py-2 hover:text-[#663d2e] font-medium">
           Afspraak
            <span className="ml-1 transition-transform duration-300 transform">
              {isTeamDropdownOpen ? (
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8l-6 6h12l-6-6z" />
                </svg>
              ) : (
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 16l6-6H6l6 6z" />
                </svg>
              )}
            </span>
          </button>
          <div className={`absolute top-full mt-2 bg-white shadow-lg rounded-md text-black w-40 transition-transform duration-300 ease-out transform origin-top ${isTeamDropdownOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
            <Link href="/afspraak" className="block px-4 py-2 hover:bg-[#e0dbd4]">Afspraak</Link>
            <Link href="/agenda" className="block px-4 py-2 hover:bg-[#e0dbd4]">Agenda</Link>
          </div>
        </div>
      </div>

      {/* Contact Button */}
      <div className="hidden xl:block">
        <Link href="/contact" className="py-2 px-8 mx-20 bg-[#0072ff] text-white rounded-lg hover:bg-[#005bb5] transition-all duration-200 font-semibold">Contact</Link>
      </div>

      {/* Hamburger Menu for mobile */}
      <button className="xl:hidden ml-2" onClick={toggleMenu} aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}>
        {!isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
            <path d="M5 17h14M5 12h14M5 7h14" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white text-black transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40 overflow-hidden`}
      >
        {/* Close Button in Mobile Menu */}
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} aria-label="Fermer le menu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-black">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 flex flex-col items-center">
         
          
          {/* Mobile Navigation Links */}
          <nav className="mt-6 flex flex-col space-y-4 text-center">
            <Link href="/" className="py-2 hover:text-[#663d2e] font-medium">Home</Link>
            <Link href="/about" className="py-2 hover:text-[#663d2e] font-medium">Over mij</Link>
            <Link href="/services" className="py-2 hover:text-[#663d2e] font-medium">Diensten</Link>
            <Link href="/blog" className="py-2 hover:text-[#663d2e] font-medium">Blog</Link>
            
            {/* Team Dropdown in Mobile */}
            <div className="relative w-full">
              <button onClick={() => setIsTeamDropdownOpen(!isTeamDropdownOpen)} className="flex items-center justify-center py-2 font-medium hover:text-[#663d2e]">
               Afspraak
                <span className="ml-1 transition-transform duration-300 transform">
                  {isTeamDropdownOpen ? (
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8l-6 6h12l-6-6z" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 16l6-6H6l6 6z" />
                    </svg>
                  )}
                </span>
              </button>
              {isTeamDropdownOpen && (
                <div className="flex flex-col items-center space-y-2 bg-[#e0dbd4] rounded-md text-black mt-2 px-4 py-2">
                  <Link href="/afspraak" className="hover:bg-[#e0dbd4] w-full text-center">Afspraak</Link>
                  <Link href="/agenda" className="hover:bg-[#e0dbd4] w-full text-center">Agenda</Link>
                </div>
              )}
            </div>

            {/* Contact Button in Mobile Menu */}
            <Link href="/contact" className="py-2 px-4 bg-[#0072ff] text-white rounded-lg font-semibold">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
