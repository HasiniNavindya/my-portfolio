"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
  <Link href="/" className="text-2xl font-bold text-primary-dark">
          MyPortfolio
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><Link href="/" className="hover:text-red-400">Home</Link></li>
          <li><Link href="/about" className="hover:text-red-400">About</Link></li>
          <li><Link href="/projects" className="hover:text-red-400">Projects</Link></li>
          <li><Link href="/contact" className="hover:text-red-400">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          6C8
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-3 bg-gray-800 p-4 rounded-lg">
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
