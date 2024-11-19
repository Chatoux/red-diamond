import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="w-full bg-primary text-text_primary flex flex-col justify-center items-center">
        <div className="relative w-full h-[70vh]">
          <Image
            src="/image-home-hero-section.jpg"
            alt="Hero"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="mb-8"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text_primary">Welcome to Red Diamond</h1>
            <p className="mt-4 text-lg text-text_secondary">Join us on a journey to discover your perfect style and gain exclusive fashion insights!</p>
            <Link href="/subscribe">
              <button className="bg-secondary text-text_accent px-4 py-2 rounded font-semibold hover:bg-accent">
                Subscribe Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-3xl font-semibold text-text_primary">About Us</h2>
        <p className="mt-4 text-text_secondary max-w-xl mx-auto">
          Red Diamond is dedicated to helping women find their best style through personalized fashion consulting. Our expert team is here to guide you every step of the way on your style journey.
        </p>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 bg-accent text-text_accent">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Our Services</h2>
          <p className="mt-4 max-w-lg mx-auto">
            Explore our range of style consultations and personalized fashion guidance. We offer services tailored to meet every individual&apos;s unique needs.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary text-text_primary py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-text_accent">Client Testimonials</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-around">
          <div className="p-6 max-w-md bg-white rounded shadow-md text-center mb-6 lg:mb-0">
            <p className="text-text_secondary">&quot;Joining Red Diamond transformed my wardrobe and boosted my confidence!&quot;</p>
            <span className="block mt-4 text-text_accent">- Satisfied Client</span>
          </div>
          <div className="p-6 max-w-md bg-white rounded shadow-md text-center">
            <p className="text-text_secondary">&quot;Exceptional advice and personalized style recommendations!&quot;</p>
            <span className="block mt-4 text-text_accent">- Happy Customer</span>
          </div>
        </div>
      </section>

      {/* Subscription Call-to-Action Section */}
      <section className="py-16 bg-primary text-text_primary text-center">
        <h2 className="text-3xl font-semibold">Stay Updated</h2>
        <p className="mt-4 max-w-md mx-auto">
          Subscribe to Red Diamond&apos;s newsletter for exclusive tips, updates, and style inspirations.
        </p>
        <Link href="/subscribe">
          <button className="mt-6 bg-secondary text-text_accent px-6 py-2 rounded font-semibold hover:bg-accent">
            Subscribe Now
          </button>
        </Link>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;