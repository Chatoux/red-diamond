import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Navbar />
      
      <div className="min-h-screen py-12 flex flex-col items-center bg-yellow-400">
        <h1 className="text-4xl font-bold text-black mb-8">Contact Red Diamond</h1>
        
        {/* Contact Information Section */}
        <section className="bg-yellow-300 w-full max-w-2xl p-8 shadow-lg rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Get in Touch with Us</h2>
          <p className="text-black">Email: contact@reddiamond.com</p>
          <p className="text-black">Phone: +1 (555) 012-3456</p>
          <p className="text-black">Location: 123 Red Street, Suite 456, Red City, RC 78910</p>
        </section>
        
        {/* Contact Form Section */}
        <section className="bg-yellow-200 w-full max-w-2xl p-8 shadow-lg rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-black mb-4">Send Us a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-black font-bold mb-2">Name:</label>
              <input type="text" id="name" name="name" className="w-full p-2 border border-yellow-600 rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-black font-bold mb-2">Email:</label>
              <input type="email" id="email" name="email" className="w-full p-2 border border-yellow-600 rounded" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-black font-bold mb-2">Message:</label>
              <textarea id="message" name="message" className="w-full p-2 border border-yellow-600 rounded" rows={4} required></textarea>
            </div>
            <button type="submit" className="bg-yellow-600 text-black font-bold py-2 px-4 rounded">
              Send Message
            </button>
          </form>
        </section>
        
        {/* Social Media Links Section */}
        <section className="bg-yellow-200 w-full max-w-2xl p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-black mb-4">Follow Us on Social Media</h2>
          <div className="flex justify-around">
            <Link href="https://facebook.com/reddiamond" passHref target="_blank" className="text-black hover:text-yellow-600">Facebook</Link>
            <Link href="https://twitter.com/reddiamond" passHref target="_blank" className="text-black hover:text-yellow-600">Twitter</Link>
            <Link href="https://instagram.com/reddiamond" passHref target="_blank" className="text-black hover:text-yellow-600">Instagram</Link>
            <Link href="https://linkedin.com/company/reddiamond" passHref target="_blank" className="text-black hover:text-yellow-600">LinkedIn</Link>
          </div>
        </section>
        
      </div>
      
      <Footer />
    </>
  );
}