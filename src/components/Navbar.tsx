'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#CA8A04] text-[#000000] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">BrandName</Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="px-4 py-2 hover:bg-[#FDE047]">
                Home
              </Link>
              <Link href="/style-guides" className="px-4 py-2 hover:bg-[#FDE047]">
                Style Guides
              </Link>
              <Link href="/success-stories" className="px-4 py-2 hover:bg-[#FDE047]">
                Success Stories
              </Link>
              <Link href="/contact" className="px-4 py-2 hover:bg-[#FDE047]">
                Contact
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[#FACC15] inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6 text-[#000000]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FDE047]">
            Home
          </Link>
          <Link href="/style-guides" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FDE047]">
            Style Guides
          </Link>
          <Link href="/success-stories" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FDE047]">
            Success Stories
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#FDE047]">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}