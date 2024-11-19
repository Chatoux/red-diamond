import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Image from 'next/image';

export default function SuccessStories() {
  return (
    <>
      <Navbar />

      <main className="bg-primary min-h-screen">
        {/* Hero Section */}
        <section className="bg-primary text-text_primary py-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Success Stories</h1>
            <p className="text-lg">
              Discover real transformations and testimonials from our clients. Join our community today to enhance your style and boost your confidence with Red Diamond!
            </p>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="bg-secondary text-text_primary py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold text-text_accent">Client Testimonials</h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-around">
            <div className="p-6 max-w-md bg-white rounded shadow-md text-center mb-6 lg:mb-0">
              <p className="text-text_secondary">"&quot;Joining Red Diamond was the best decision for my style and confidence!&quot;"</p>
              <span className="block mt-4 text-text_accent">- Satisfied Client</span>
            </div>
            <div className="p-6 max-w-md bg-white rounded shadow-md text-center">
              <p className="text-text_secondary">"&quot;From consultations to transformations, Red Diamond exceeded my expectations!&quot;"</p>
              <span className="block mt-4 text-text_accent">- Happy Customer</span>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-accent text-text_accent px-8 py-3 rounded-md font-medium">
              Subscribe & Follow Us
            </button>
          </div>
        </section>

        {/* Before and After Gallery Section */}
        <section className="bg-accent text-text_accent py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-semibold mb-4">Before and After Gallery</h2>
              <p className="text-lg">See the incredible transformations achieved by our clients.</p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/image-success-stories-before-and-after-gallery.jpg"
                alt="Before and After Gallery"
                width={800}
                height={600}
                className="rounded shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}