import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center py-6 bg-black/30">
      <Link
        href="/search"
        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
      >
        Start Your Search
      </Link>
    </footer>
  );
}
