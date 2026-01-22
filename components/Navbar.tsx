
import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                E-TECH
              </span>
              <span className="hidden sm:block text-slate-600 font-medium">Software</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#hero" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#Services" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#contact" className="px-5 py-2.5 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md">
              Contact Us
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-blue-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#hero" className="block px-3 py-2 text-slate-700 hover:bg-blue-50 rounded-md">Home</a>
            <a href="#services" className="block px-3 py-2 text-slate-700 hover:bg-blue-50 rounded-md">Services</a>
            <a href="#about" className="block px-3 py-2 text-slate-700 hover:bg-blue-50 rounded-md">About</a>
            <a href="#contact" className="block px-3 py-2 bg-blue-600 text-white rounded-md mt-4">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
