"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/press-on", label: "Press On" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[rgba(26,0,38,0.95)] backdrop-blur-xl shadow-[0_4px_30px_rgba(233,30,140,0.15)]"
          : "py-5 bg-transparent"
      }`}
      style={{ borderBottom: scrolled ? "1px solid rgba(233,30,140,0.25)" : "none" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span
            className="font-display text-2xl"
            style={{
              background: "linear-gradient(135deg, #ff2d78, #ffe135)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Dimi Nails
          </span>
          <span className="text-xl animate-[sparkle_1.5s_ease-in-out_infinite]">✦</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative font-body font-600 text-sm tracking-wide transition-colors duration-200 group ${
                  pathname === href ? "text-[#ffe135]" : "text-[#fff5fb] hover:text-[#ffe135]"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 rounded-full ${
                    pathname === href ? "w-full bg-[#ffe135]" : "w-0 group-hover:w-full bg-[#ffe135]"
                  }`}
                />
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://www.instagram.com/dimi_nails_by_caroperez/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon text-sm py-2 px-4"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {[0,1,2].map((i) => (
            <span
              key={i}
              className={`block h-0.5 bg-[#e91e8c] rounded transition-all duration-300 ${
                i === 0 ? (open ? "w-6 rotate-45 translate-y-2" : "w-6") :
                i === 1 ? (open ? "w-0 opacity-0" : "w-4") :
                (open ? "w-6 -rotate-45 -translate-y-2" : "w-6")
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(26,0,38,0.98)", borderTop: "1px solid rgba(233,30,140,0.2)" }}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className={`font-body font-700 text-base transition-colors ${
                  pathname === href ? "text-[#ffe135]" : "text-[#fff5fb]"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://www.instagram.com/dimi_nails_by_caroperez/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon text-sm inline-flex"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
