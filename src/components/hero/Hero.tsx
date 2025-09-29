import { config } from "../../lib/config";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center flex-grow text-center">
      <h2
        className="text-5xl md:text-7xl font-bold italic"
        style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}
      >
        {config.appTitle}
      </h2>
      <p
        className="mt-4 text-lg md:text-2xl italic"
        style={{ fontFamily: "'Dancing Script', 'Brush Script MT', cursive" }}
      >
        {config.appDescription}
      </p>
    </section>
  );
}
