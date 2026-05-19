// components/layout/navigation.tsx - Main navigation with SEO-friendly links

'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';



export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {/* Links */}
        <Link href="/about" className="text-slate-700 hover:text-black font-medium focus-ring">
          About
        </Link>
        <Link href="/contact" className="text-slate-700 hover:text-black font-medium focus-ring">
          Contact
        </Link>

        {/* CTA Button */}
        <Link href="/white-screen" className="btn btn-primary">
          Get Started
        </Link>
      </nav>

      {/* Mobile Navigation Toggle */}
      <button
        className="md:hidden btn btn-ghost btn-icon focus-ring"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg md:hidden">
          <nav className="container py-4 space-y-2">
            {/* Links */}
            <Link
              href="/about"
              className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-black rounded-lg focus-ring"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-black rounded-lg focus-ring"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              href="/white-screen"
              className="block btn btn-primary w-full mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
