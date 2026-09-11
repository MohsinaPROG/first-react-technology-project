import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 md:hidden"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 font-bold text-gray-900"
        >
          <div className="brand-gradient flex h-7 w-7 items-center justify-center rounded-md text-xs font-bold text-white">
            DS
          </div>

          <span>
            Dev <span className="gradient-text">Stack</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 text-xs text-gray-600 md:flex">
          <a href="#home" className="hover:text-pink-500">
            Home
          </a>
          <a href="#technologies" className="hover:text-pink-500">
            Technologies
          </a>
          <a href="#projects" className="hover:text-pink-500">
            Projects
          </a>
          <a href="#about" className="hover:text-pink-500">
            About
          </a>
          <a href="#contact" className="hover:text-pink-500">
            Contact
          </a>
        </div>

        {/* Auth buttons */}
        <div className="flex items-center gap-2">
          <button className="hidden text-sm text-gray-600 sm:block">
            Sign In
          </button>

          <button className="gradient-button rounded-full px-4 py-2 text-xs font-medium">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-gray-600">
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="#technologies" onClick={() => setMenuOpen(false)}>
              Technologies
            </a>

            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>

            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;