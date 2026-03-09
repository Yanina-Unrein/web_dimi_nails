"use client";
import { useLang } from "@/context/LangContext";
import Image from "next/image";
import type { Metadata } from "next";

export default function ContactoPage() {
  const { t } = useLang();
  const c = t.contact;

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative pt-32 pb-16 px-6 text-center overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(196,24,106,0.18), transparent 55%)" }}
      >
        <div className="max-w-2xl mx-auto anim-fade-up">
          <p className="section-tag mb-4">{c.tag}</p>
          <h1
            className="font-display font-light text-gradient mb-5"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            {c.title}
          </h1>
          <p className="font-body text-[#fdf6f0]/55 text-base leading-relaxed max-w-md mx-auto">
            {c.sub}
          </p>
        </div>
      </section>

      {/* ── Cards ── */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-7">
          <div className="glass group p-10 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(196,24,106,0.2)] no-underline">
            <div className="relative rounded-xl w-48 h-48 mb-6 ">
              <Image
                src="/images/caro_chibi.webp"
                alt="Caro Pérez nail artist"
                 sizes="192px"
                priority         
                fill
                className="object-cover object-top rounded-xl"
              />
            </div>
            <a
              href="https://www.instagram.com/dimi_nails_by_caroperez/"
              target="_blank"
              rel="noopener noreferrer"
               className="flex flex-col items-center text-center"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  boxShadow: "0 8px 24px rgba(196,24,106,0.4)",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h2 className="font-display font-light text-2xl text-[#fdf6f0] mb-2">{c.igTitle}</h2>
              <p className="font-body text-sm text-[#fdf6f0]/50 mb-4 leading-relaxed">{c.igDesc}</p>
              <span className="font-body text-sm text-[#c4186a] group-hover:text-[#c9a84c] transition-colors font-medium">
                {c.igHandle}
              </span>
              <div
                className="mt-6 w-full py-3 rounded-xl font-body text-sm text-[#fdf6f0]/70 text-center transition-all duration-300 group-hover:text-[#fdf6f0]"
                style={{ background: "rgba(196,24,106,0.1)", border: "1px solid rgba(196,24,106,0.2)" }}
              >
                {c.igBtn}
              </div>
            </a>
          </div>

          {/* FAQ */}
          <div className="glass p-10">
            <h2 className="font-display font-light text-2xl text-[#fdf6f0] mb-6">{c.faqTitle}</h2>
            <div className="space-y-5">
              {c.faqs.map(({ q, a }) => (
                <div key={q} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "1.1rem" }}>
                  <p className="font-body font-medium text-sm text-[#c4186a] mb-1">{q}</p>
                  <p className="font-body text-sm text-[#fdf6f0]/55 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 px-6 text-center">
        <p className="font-script text-4xl mb-2" style={{ color: "#e05585" }}>{c.finalScript}</p>
        <p className="font-body text-sm text-[#fdf6f0]/45 mb-8">{c.finalSub}</p>
        <a
          href="https://www.instagram.com/dimi_nails_by_caroperez/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          {c.finalBtn}
        </a>
      </section>
    </>
  );
}
