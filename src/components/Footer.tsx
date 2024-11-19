'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#CA8A04] text-[#000000] p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Social Media Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link href="https://facebook.com">
            <a className="hover:text-[#FDE047]">
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
          </Link>
          <Link href="https://twitter.com">
            <a className="hover:text-[#FDE047]">
              <Image
                src="/icons/twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
              />
            </a>
          </Link>
          <Link href="https://instagram.com">
            <a className="hover:text-[#FDE047]">
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
          </Link>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left">
          <p className="font-bold mb-1">Contact Us</p>
          <p>Email: support@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>

        {/* Copyright Notice */}
        <div className="text-center md:text-right">
          <p>
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>

      {/* Additional styles for responsiveness */}
      <style jsx>{`
        @media screen and (max-width: 768px) {
          .container {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;