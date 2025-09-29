// src/app/page.tsx
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src="/bg-landing-page.jpg" // replace with your generated image filename in /public
        alt="Landing page background"
        fill
        priority
        className="object-cover"
      />

      {/* Optional overlay to ensure readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">
          Aquila Hospitality
        </h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl drop-shadow-md">
          Your journey to comfort and elegance begins here.
        </p>
        {/* TODO: Add search form here later */}
      </div>
    </main>
  );
}
