"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";

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
      <nav className="hidden xl:flex items-center space-x-16 px-20 font-medium">
        <Link href="/" className="hover:text-blue-600 transition">HOME</Link>

        {/* Diensten Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => setIsDienstenDropdownOpen(true)}
          onMouseLeave={() => setIsDienstenDropdownOpen(false)}
        >
          <button className="flex items-center hover:text-blue-600 transition">
            DIENSTEN
            <span className="ml-1 transform transition-transform duration-200">
              {isDienstenDropdownOpen ? "▲" : "▼"}
            </span>
          </button>
          {isDienstenDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2">
              <Link href="/Coaching" className="block px-4 py-2 hover:bg-gray-100">Coaching</Link>
              <Link href="/Groepsbijeenkomsten" className="block px-4 py-2 hover:bg-gray-100">Groepsbijeenkomsten</Link>
              <Link href="/Trainingen en webinars" className="block px-4 py-2 hover:bg-gray-100">Trainingen en webinars</Link>
            </div>
          )}
        </div>

        {/* Afspraak Dropdown with anomaly */}
        <div
          className="relative group"
          onMouseEnter={() => setIsAfspraakDropdownOpen(true)}
          onMouseLeave={() => setIsAfspraakDropdownOpen(false)}
        >
          <button className="flex items-center hover:text-blue-600 transition">
            AFSPRAAK
            <span className="ml-1 transform transition-transform duration-200">
              {isAfspraakDropdownOpen ? "▲" : "▼"}
            </span>
          </button>
          {isAfspraakDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-red-500 py-3">
              <Link href="/afspraak" className="block px-6 py-3 hover:bg-gray-200">
                Appointment
              </Link>
              <Link href="/agenda" className="block px-6 py-3 hover:bg-gray-200">
                Agenda
              </Link>
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
            className="w-28 sm:w-36"
          />
        </Link>
      </div>

      {/* Right Navigation */}
      <nav className="hidden xl:flex items-center justify-end space-x-16 px-20 font-medium">
        <Link href="/blog" className="hover:text-blue-600 transition">BLOG</Link>
        <Link href="/about" className="hover:text-blue-600 transition">OVER MIJ</Link>
        <Link href="/contact" className="button px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
          CONTACT
        </Link>
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

        <nav className="flex flex-col items-center text-center space-y-6 mt-8">
          <Link href="/" onClick={closeMenu} className="hover:text-blue-600">HOME</Link>
          <Link href="/blog" onClick={closeMenu} className="hover:text-blue-600">BLOG</Link>
          <Link href="/about" onClick={closeMenu} className="hover:text-blue-600">OVER MIJ</Link>
          <Link href="/contact" onClick={closeMenu} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}
