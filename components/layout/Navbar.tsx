"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "@/context/LangContext";

export default function Navbar() {
  const { t, locale, toggle } = useLang();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    { href: "/",          label: t.nav.home },
    { href: "/sobre-mi",  label: t.nav.about },
    { href: "/press-on",  label: t.nav.pressOn },
    { href: "/contacto",  label: t.nav.contact },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* ── Main bar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[rgba(24,6,15,0.92)] backdrop-blur-xl border-b border-[rgba(196,24,106,0.15)]"
            : "py-5 bg-transparent"
        }`}
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

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-body text-sm tracking-wide transition-colors duration-200 relative group ${
                  isActive(href) ? "text-[#c9a84c]" : "text-[#fdf6f0]/75 hover:text-[#fdf6f0]"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                    isActive(href)
                      ? "w-full bg-[#c9a84c]"
                      : "w-0 group-hover:w-full bg-[#c9a84c]/60"
                  }`}
                />
              </Link>
            ))}

            {/* Lang toggle */}
            <button
              onClick={toggle}
              className="font-body text-xs tracking-[0.15em] uppercase border border-[rgba(253,246,240,0.2)] text-[#fdf6f0]/60 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors px-3 py-1.5 rounded-full"
            >
              {locale === "en" ? "ES" : "EN"}
            </button>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/dimi_nails_by_caroperez/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm px-5 py-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              {t.nav.instagram}
            </a>
          </nav>

          {/* Mobile right side */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggle}
              className="font-body text-xs tracking-[0.15em] uppercase border border-[rgba(253,246,240,0.2)] text-[#fdf6f0]/60 hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors px-3 py-1.5 rounded-full"
            >
              {locale === "en" ? "ES" : "EN"}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="flex flex-col gap-[5px] p-2 z-[110] relative"
            >
              <span
                className={`block h-px w-6 bg-[#fdf6f0] rounded transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-[6px]" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-[#fdf6f0] rounded transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-[#fdf6f0] rounded transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* ── Full-screen mobile menu ── */}
      <div className={`mobile-menu-overlay ${menuOpen ? "open" : "closed"}`}>
        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(196,24,106,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Logo inside menu */}
        <div className="mb-14 flex flex-col items-center">
          <span className="font-script text-[1.1rem] text-[#e05585]">Dimi</span>
          <span className="font-script text-[2.2rem] leading-none text-[#c9a84c]">nails</span>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col items-center gap-8">
          {links.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`font-display text-4xl font-light tracking-wide transition-colors duration-200 ${
                isActive(href) ? "text-[#c9a84c]" : "text-[#fdf6f0]/80 hover:text-[#fdf6f0]"
              }`}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Instagram link */}
        <a
          href="https://www.instagram.com/dimi_nails_by_caroperez/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-14 px-8 py-3"
          onClick={() => setMenuOpen(false)}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          Instagram
        </a>

        {/* Bottom decoration */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
          {["#c4186a","#e05585","#c9a84c"].map((c) => (
            <span key={c} className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
      </div>
    </>
  );
}
