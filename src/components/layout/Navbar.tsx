"use client";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4">
      {/* Logo */}
      <h1 className="text-2xl font-bold"></h1>

      {/* Right side: Login + Hamburger */}
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="px-4 py-2 rounded-md bg-white/20 hover:bg-white/30 transition"
        >
          Login
        </Link>
        <button className="p-2 rounded-md hover:bg-white/20">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
