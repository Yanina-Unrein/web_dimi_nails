"use client";
import Link from "next/link";
import { useLang } from "@/context/LangContext";

export default function HeroSection() {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* ── Background image layer ── */}
      {/* Replace the div below with:
          <Image src="/images/hero-bg.jpg" alt="" fill className="object-cover object-center" priority />
          once you have the photo. */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(160deg,
              rgba(42, 13, 26, 0.55) 0%,
              rgba(24, 6, 15, 0.4) 40%,
              rgba(24, 6, 15, 0.65) 100%
            ),
            radial-gradient(ellipse at 65% 40%, rgba(196,24,106,0.22) 0%, transparent 55%),
            radial-gradient(ellipse at 30% 70%, rgba(201,168,76,0.12) 0%, transparent 50%),
            linear-gradient(180deg, #2a0d1a 0%, #18060f 100%)
          `,
        }}
      />

      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* ── Logo mark (floating) ── */}
      <div className="absolute top-1/2 right-[8%] -translate-y-1/2 hidden lg:block anim-float">
        <div
          className="w-44 h-44 rounded-full flex flex-col items-center justify-center"
          style={{
            background: "radial-gradient(circle at 38% 32%, #e05585, #9b2060, #c4186a)",
            boxShadow: "0 0 60px rgba(196,24,106,0.35), 0 0 120px rgba(196,24,106,0.12)",
            border: "2px solid rgba(255,255,255,0.18)",
          }}
        >
          <span className="font-script text-white text-xl leading-none" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>
            Dimi
          </span>
          <span className="font-script text-[#ffe090] text-3xl leading-tight" style={{ textShadow: "0 2px 16px rgba(0,0,0,0.5)" }}>
            nails
          </span>
        </div>
      </div>

      {/* ── Text content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pb-20 pt-40">
        <p className="section-tag anim-fade-up delay-100 mb-4">{t.hero.tag}</p>

        <h1
          className="font-display font-light anim-fade-up delay-200"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 8rem)",
            lineHeight: 1,
            color: "#fdf6f0",
          }}
        >
          {t.hero.title.split("\n").map((line, i) => (
            <span key={i} className={i === 1 ? "text-gradient block" : "block"}>
              {line}
            </span>
          ))}
        </h1>

        <p className="font-body text-[#fdf6f0]/60 text-base md:text-lg max-w-sm mt-6 mb-10 leading-relaxed anim-fade-up delay-300">
          {t.hero.sub}
        </p>

        <div className="flex flex-wrap gap-4 anim-fade-up delay-400">
          <Link href="/press-on" className="btn-primary">
            {t.hero.cta}
          </Link>
          <Link href="/sobre-mi" className="btn-outline">
            {t.hero.ctaSec}
          </Link>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex items-center gap-3 opacity-35 anim-fade-up delay-600">
          <div className="w-8 h-px bg-[#fdf6f0]" />
          <span className="font-body text-xs tracking-[0.2em] uppercase text-[#fdf6f0]">scroll</span>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to top, #18060f, transparent)" }}
      />
    </section>
  );
}
