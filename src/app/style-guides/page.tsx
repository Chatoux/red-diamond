import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

export default function StyleGuides() {
  return (
    <>
      <Navbar />
      {/* Guide Overview */}
      <section className="w-full bg-[#CA8A04] text-[#000000] flex flex-col justify-center items-center">
        <div className="relative w-full h-[70vh]">
          <Image
            src="/image-home-hero-section.jpg"
            alt="Hero"
            layout="fill"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="mb-8"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Welcome to Red Diamond</h1>
            <p className="mt-4 text-lg">Join our journey to elevate your style and stay updated with the latest trends. Subscribe now and follow us for exclusive tips!</p>
            <Link href="/subscribe">
              <button className="bg-[#FACC15] text-[#000000] px-4 py-2 rounded font-semibold hover:bg-[#FDE047]">
                Subscribe &amp; Follow Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Seasonal Fashion Tips */}
      <section className="py-16 px-4 md:px-16 bg-[#FACC15] text-[#000000]">
        <h2 className="text-3xl font-semibold text-center">Seasonal Fashion Tips</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-4 bg-[#FDE047] rounded shadow-md">
            <h3 className="text-xl font-bold">Spring</h3>
            <p>Embrace vibrant colors and light fabrics. Accessorize with floral prints and pastels for a refreshing look.</p>
          </div>
          <div className="p-4 bg-[#FDE047] rounded shadow-md">
            <h3 className="text-xl font-bold">Summer</h3>
            <p>Keep cool with breezy linens and soft cottons. Shades of white and nautical stripes always make a splash.</p>
          </div>
          <div className="p-4 bg-[#FDE047] rounded shadow-md">
            <h3 className="text-xl font-bold">Autumn</h3>
            <p>Layer up with rich tones like burgundy and mustard. Apply scarves and hats for added warmth and style.</p>
          </div>
          <div className="p-4 bg-[#FDE047] rounded shadow-md">
            <h3 className="text-xl font-bold">Winter</h3>
            <p>Opt for cozy knits and luxe fabrics like velvet. Darker hues and metallic accents define this season.</p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-4 md:px-16 bg-[#FDE047]">
        <h2 className="text-3xl font-semibold text-center">Style Inspiration Gallery</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Image src="/image-style-guides-image-gallery.jpg" alt="Gallery Item" width={400} height={300} className="rounded shadow-lg" />
          <Image src="/image-style-guides-image-gallery.jpg" alt="Gallery Item" width={400} height={300} className="rounded shadow-lg" />
          <Image src="/image-style-guides-image-gallery.jpg" alt="Gallery Item" width={400} height={300} className="rounded shadow-lg" />
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 px-4 md:px-16 bg-[#CA8A04] text-[#000000]">
        <h2 className="text-3xl font-semibold">Engage with Red Diamond</h2>
        <p className="mt-4">Transform your look with personalized guidance. Let&apos;s explore your style potential together.</p>
        <Link href="/contact">
          <button className="mt-8 bg-[#FACC15] text-[#000000] px-6 py-3 rounded font-semibold hover:bg-[#FDE047]">
            Book a Consultation
          </button>
        </Link>
      </section>

      <Footer />
    </>
  );
}