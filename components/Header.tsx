"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = (menuName: string) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="top-0 z-50 bg-white shadow-md text-gray-800 h-16 md:h-20 flex items-center justify-between fixed w-full px-10 lg:px-20 xl:px-32">
      {/* Left Navigation */}
      <nav className="hidden xl:flex items-center space-x-16 px-20 font-medium">
        <Link href="/" className="hover:text-blue-600 transition">
          HOME
        </Link>

        {/* Diensten Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => setActiveDropdown("diensten")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button
            className="flex items-center hover:text-blue-600 transition"
            onClick={() => toggleDropdown("diensten")}
          >
            DIENSTEN
            <span className="ml-1 transform transition-transform duration-200">
              {activeDropdown === "diensten" ? "▲" : "▼"}
            </span>
          </button>
          {activeDropdown === "diensten" && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2">
              <Link
                href="/coaching"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Coaching
              </Link>
              <Link
                href="/Groepsbijeenkomsten"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Groepsbijeenkomsten
              </Link>
              <Link
                href="/comingSoon"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Trainingen en webinars
              </Link>
            </div>
          )}
        </div>

        {/* Afspraak Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => setActiveDropdown("afspraak")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button
            className="flex items-center hover:text-blue-600 transition"
            onClick={() => toggleDropdown("afspraak")}
          >
            AFSPRAAK
            <span className="ml-1 transform transition-transform duration-200">
              {activeDropdown === "afspraak" ? "▲" : "▼"}
            </span>
          </button>
          {activeDropdown === "afspraak" && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-3">
              <Link
                href="/afspraak"
                className="block px-6 py-3 hover:bg-gray-200"
              >
                Appointment
              </Link>
              <Link
                href="/agenda"
                className="block px-6 py-3 hover:bg-gray-200"
              >
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
        <Link href="/blog" className="hover:text-blue-600 transition">
          BLOG
        </Link>
        <Link href="/about" className="hover:text-blue-600 transition">
          OVER MIJ
        </Link>
        <Link
          href="/contact"
          className="button px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
        >
          CONTACT
        </Link>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="xl:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? (
          <svg
            className="w-8 h-8 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className="w-8 h-8 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white text-gray-800 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 xl:hidden`}
      >
        <div className="flex justify-end p-4">
          <button onClick={closeAllMenus} aria-label="Close Menu">
            <svg
              className="w-8 h-8 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col items-center text-center space-y-6 mt-8">
          <Link href="/" onClick={closeAllMenus} className="hover:text-blue-600">
            HOME
          </Link>
          <Link
            href="/blog"
            onClick={closeAllMenus}
            className="hover:text-blue-600"
          >
            BLOG
          </Link>
          <Link
            href="/about"
            onClick={closeAllMenus}
            className="hover:text-blue-600"
          >
            OVER MIJ
          </Link>
          <Link
            href="/contact"
            onClick={closeAllMenus}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}
