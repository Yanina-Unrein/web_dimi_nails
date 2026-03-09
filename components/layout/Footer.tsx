"use client";

import Link from "next/link";
import { useLang } from "@/context/LangContext";

// This is a Server Component wrapper — the actual client content is split out
// so layout.tsx (server) can import Footer, but Footer itself uses useLang (client).

export default function Footer() {
  const { t } = useLang();

  const links = [
    { href: "/",         label: t.nav.home },
    { href: "/sobre-mi", label: t.nav.about },
    { href: "/press-on", label: t.nav.pressOn },
    { href: "/contacto", label: t.nav.contact },
  ];

  return (
    <footer className="relative mt-28 border-t border-[rgba(196,24,106,0.15)]">
      {/* Top gradient line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-48"
        style={{ background: "linear-gradient(90deg, transparent, #c4186a, #c9a84c, #c4186a, transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="mb-4">
            <span className="font-script text-[1rem] text-[#e05585] block leading-none">Dimi</span>
            <span className="font-script text-[1.8rem] text-[#c9a84c] block leading-tight">nails</span>
          </div>
          <p className="font-body text-sm text-[#fdf6f0]/50 leading-relaxed max-w-xs">
            {t.footer.tagline}
          </p>
        </div>

        {/* Nav */}
        <div>
          <h4 className="section-tag mb-5">{t.footer.nav}</h4>
          <ul className="space-y-3">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-body text-sm text-[#fdf6f0]/55 hover:text-[#fdf6f0] transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow */}
        <div>
          <h4 className="section-tag mb-5">{t.footer.follow}</h4>
          <a
            href="https://www.instagram.com/dimi_nails_by_caroperez/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group"
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-opacity group-hover:opacity-80"
              style={{ background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <span className="font-body text-sm text-[#fdf6f0]/60 group-hover:text-[#fdf6f0] transition-colors">
              @dimi_nails_by_caroperez
            </span>
          </a>
        </div>
      </div>

      <div
        className="border-t border-[rgba(253,246,240,0.05)] py-6 text-center"
      >
        <p className="font-body text-xs text-[#fdf6f0]/25 tracking-wide">
          © {new Date().getFullYear()} {t.footer.copy}
        </p>
      </div>
    </footer>
  );
}
