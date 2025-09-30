import Image from "next/image";

export default function LoginPage() {
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
      <div className="relative z-10 flex flex-col min-h-screen"></div>
    </main>
  );
}
