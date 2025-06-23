'use client';

import Link from 'next/link';
import { Home, Briefcase, Code, User, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <Link href="/" className="flex items-center space-x-2 text-light hover:text-orange transition-colors">
        <Home size={20} />
        <span>Home</span>
      </Link>
      <Link href="/projects" className="flex items-center space-x-2 text-light hover:text-orange transition-colors">
        <Briefcase size={20} />
        <span>Projects</span>
      </Link>
      <Link href="/skills" className="flex items-center space-x-2 text-light hover:text-orange transition-colors">
        <Code size={20} />
        <span>Skills</span>
      </Link>
      <Link href="/about" className="flex items-center space-x-2 text-light hover:text-orange transition-colors">
        <User size={20} />
        <span>About</span>
      </Link>
      <Link href="/contact" className="flex items-center space-x-2 text-light hover:text-orange transition-colors">
        <Mail size={20} />
        <span>Contact</span>
      </Link>
    </>
  );

  return (
    <nav className="bg-dark shadow-lg p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-orange">Pauline.dev</h1>
      <div className="hidden md:flex items-center space-x-6">
        {navLinks}
      </div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-light focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-dark flex flex-col items-center space-y-4 p-4">
          {navLinks}
        </div>
      )}
    </nav>
  );
}
