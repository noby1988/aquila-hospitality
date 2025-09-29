import Image from "next/image";
import Navbar from "../../components/layout/Navbar";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/layout/Footer";

export default function LandingPage() {
  return (
    <main className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src="/bg-landing-page.jpg"
        alt="Landing page background"
        fill
        priority
        className="object-cover"
      />

      {/* Optional overlay to ensure readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </main>
  );
}
