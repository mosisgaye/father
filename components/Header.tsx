"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDienstenDropdownOpen, setIsDienstenDropdownOpen] = useState(false);
  const [isAfspraakDropdownOpen, setIsAfspraakDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDienstenDropdownOpen(false);
    setIsAfspraakDropdownOpen(false);
  };

  return (
    <header className="top-0 z-50 bg-white shadow-md text-gray-800 h-16 md:h-20 flex items-center justify-between fixed w-full px-10 lg:px-20 xl:px-32">
      {/* Left Navigation */}
      <nav className="hidden xl:flex items-center space-x-8 text-lg font-medium">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        
        <div
          className="relative group"
          onMouseEnter={() => setIsDienstenDropdownOpen(true)}
          onMouseLeave={() => setIsDienstenDropdownOpen(false)}
        >
          <button className="flex items-center hover:text-blue-600">
            Diensten
            <span className="ml-1 transform transition-transform duration-200">
              {isDienstenDropdownOpen ? "▲" : "▼"}
            </span>
          </button>
          {isDienstenDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
              <Link href="/Coaching" className="block px-4 py-2 hover:bg-gray-100">Coaching</Link>
              <Link href="/Groepsbijeenkomsten" className="block px-4 py-2 hover:bg-gray-100">Groepsbijeenkomsten</Link>
              <Link href="/Trainingen en webinars" className="block px-4 py-2 hover:bg-gray-100">Trainingen en webinars</Link>
            </div>
          )}
        </div>

        <div
          className="relative group"
          onMouseEnter={() => setIsAfspraakDropdownOpen(true)}
          onMouseLeave={() => setIsAfspraakDropdownOpen(false)}
        >
          <button className="flex items-center hover:text-blue-600">
            Afspraak
            <span className="ml-1 transform transition-transform duration-200">
              {isAfspraakDropdownOpen ? "▲" : "▼"}
            </span>
          </button>
          {isAfspraakDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
              <Link href="/afspraak" className="block px-4 py-2 hover:bg-gray-100">Afspraak</Link>
              <Link href="/agenda" className="block px-4 py-2 hover:bg-gray-100">Agenda</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Centered Logo */}
      <div className="flex items-center justify-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo vaderhart"
            width={150}
            height={50}
            className="w-24 sm:w-32"
          />
        </Link>
      </div>

      {/* Right Navigation */}
      <nav className="hidden xl:flex items-center justify-end space-x-8 text-lg font-medium">
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <Link href="/about" className="hover:text-blue-600">Over mij</Link>
        <Link href="/contact" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">Contact</Link>
      </nav>

      {/* Mobile Menu Toggle */}
      <button className="xl:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
        {isMenuOpen ? (
          <svg className="w-8 h-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-white text-gray-800 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 xl:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} aria-label="Close Menu">
            <svg className="w-8 h-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="flex flex-col items-center text-center space-y-4 mt-8">
          <Link href="/" onClick={closeMenu} className="hover:text-blue-600">Home</Link>

          {/* Diensten Dropdown in Mobile */}
          <div className="w-full text-center">
            <button
              onClick={() => setIsDienstenDropdownOpen(!isDienstenDropdownOpen)}
              className="flex justify-center items-center w-full py-2 font-medium hover:text-blue-600"
            >
              Diensten
              <span className="ml-2">
                {isDienstenDropdownOpen ? "▲" : "▼"}
              </span>
            </button>
            {isDienstenDropdownOpen && (
              <div className="bg-gray-50 rounded-md shadow-md py-2">
                <Link href="/Coaching" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-200">Coaching</Link>
                <Link href="/Groepsbijeenkomsten" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-200">Groepsbijeenkomsten</Link>
                <Link href="/Trainingen en webinars" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-200">Trainingen en webinars</Link>
              </div>
            )}
          </div>

          {/* Afspraak Dropdown in Mobile */}
          <div className="w-full text-center">
            <button
              onClick={() => setIsAfspraakDropdownOpen(!isAfspraakDropdownOpen)}
              className="flex justify-center items-center w-full py-2 font-medium hover:text-blue-600"
            >
              Afspraak
              <span className="ml-2">
                {isAfspraakDropdownOpen ? "▲" : "▼"}
              </span>
            </button>
            {isAfspraakDropdownOpen && (
              <div className="bg-gray-50 rounded-md shadow-md py-2">
                <Link href="/afspraak" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-200">Afspraak</Link>
                <Link href="/agenda" onClick={closeMenu} className="block px-4 py-2 hover:bg-gray-200">Agenda</Link>
              </div>
            )}
          </div>

          <Link href="/blog" onClick={closeMenu} className="hover:text-blue-600">Blog</Link>
          <Link href="/about" onClick={closeMenu} className="hover:text-blue-600">Over mij</Link>
          <Link href="/contact" onClick={closeMenu} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
