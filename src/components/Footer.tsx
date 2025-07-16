import React from 'react';
import { ArrowUpIcon } from 'lucide-react';
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-gray-950 text-white py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            {/* Logo removed */}
            <p className="mt-2 text-gray-400 max-w-md">
              {/* Description removed */}
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <button onClick={scrollToTop} className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full transition-colors mb-4" aria-label="Scroll to top">
              <ArrowUpIcon size={24} />
            </button>
            <p className="text-gray-400 text-sm">
              {/* Copyright removed */}
            </p>
          </div>
        </div>
      </div>
    </footer>;
};