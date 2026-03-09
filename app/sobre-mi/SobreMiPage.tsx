"use client";
import Link from "next/link";
import { useLang } from "@/context/LangContext";
import SectionHeader from "@/components/ui/SectionHeader";
import NailSwatch from "@/components/ui/NailSwatch";
import WorkCard from "@/components/ui/WorkCard";
import Image from "next/image";

const COLOURS = [
  { color: "#c4186a",                                                      name: "Deep Fuchsia" },
  { color: "#e05585",                                                      name: "Rose" },
  { color: "#f2a7c3",                                                      name: "Blush" },
  { color: "#fbd5e4",                                                      name: "Baby Pink" },
  { color: "linear-gradient(135deg,#fbd5e4,#fff)",                        name: "French" },
  { color: "#fff",                                                          name: "Cloud" },
  { color: "#c9a84c",                                                      name: "Gold" },
  { color: "#ffe5a0",                                                      name: "Champagne" },
  { color: "#9b59b6",                                                      name: "Lavender" },
  { color: "#6c3483",                                                      name: "Deep Plum" },
  { color: "#c0392b",                                                      name: "Classic Red" },
  { color: "#e8c49a",                                                      name: "Nude" },
  { color: "#4a2040",                                                      name: "Bordeaux" },
  { color: "linear-gradient(135deg,#18060f,#3d1429)",                     name: "Midnight" },
  { color: "linear-gradient(135deg,#c0c0c0,#e8e8e8,#c0c0c0)",            name: "Chrome" },
  { color: "linear-gradient(135deg,#c9a84c,#f5d78e,#c9a84c)",            name: "Gold Foil" },
];

const WORKS = [
  "French nail art ✦",
  "Ombré rose 💅",
  "Coffin press on 🖤",
  "Spring design 🌸",
  "Neon stiletto ✨",
  "Marble luxury 🤍",
  "Glitter fade ✦",
  "Negative space 🖤",
  "Floral detail 🌺",
];

export default function SobreMiPage() {
  const { t } = useLang();
  const a = t.about;

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative pt-32 pb-20 px-6 overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at 60% 0%, rgba(196,24,106,0.18) 0%, transparent 55%)",
        }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="anim-fade-up">
            <p className="section-tag mb-4">{a.tag}</p>
            <h1
              className="font-display font-light text-gradient leading-tight mb-3"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              {a.title}
            </h1>
            <p className="font-script text-[1.4rem] text-[#e05585] mb-8 leading-none">
              {a.script}
            </p>

            <div className="space-y-4 text-[#fdf6f0]/65 font-body text-sm leading-relaxed">
              <p>{a.p1}</p>
              <p>
                {a.p2.split("custom press on").map((part, i) =>
                  i === 0 ? (
                    <span key={i}>{part}</span>
                  ) : (
                    <span key={i}>
                      <span className="text-[#c9a84c] font-medium">custom press on</span>
                      {part}
                    </span>
                  )
                )}
              </p>
              <p>{a.p3}</p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/press-on" className="btn-primary">{a.btnOrder}</Link>
              <a
                href="https://www.instagram.com/dimi_nails_by_caroperez/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                {a.btnInsta}
              </a>
            </div>
          </div>

          {/* Photo placeholder */}
          <div className="flex justify-center anim-fade-up delay-200">
            <div className="relative">
              <div
                className="w-72 h-[420px] md:w-80 md:h-[460px] rounded-2xl overflow-hidden glass flex items-center justify-center"
                style={{
                  background: "radial-gradient(circle at 40% 35%, rgba(196,24,106,0.25), rgba(24,6,15,0.95))",
                }}
              >
                <Image
                  src="/images/caro.webp"
                  alt="Caro Pérez — Dimi Nails"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 288px, 320px"
                />
              </div>
              {/* Floating accent */}
              <div
                className="absolute -bottom-4 -right-4 glass px-5 py-3 text-center"
                style={{ transform: "rotate(3deg)" }}
              >
                <p className="font-script text-[#c9a84c] text-xl">Press On</p>
                <p className="font-body text-[9px] text-[#fdf6f0]/50 tracking-widest uppercase">Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeader tag={a.whyTag} title={a.whyTitle} />
          <div className="grid md:grid-cols-3 gap-5">
            {a.values.map(({ title, desc }) => (
              <div key={title} className="glass p-7 transition-all duration-400 hover:-translate-y-1">
                <div
                  className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, rgba(196,24,106,0.3), rgba(201,168,76,0.2))" }}
                >
                  <span className="text-[#c9a84c] text-lg">✦</span>
                </div>
                <h3 className="font-display text-xl text-[#fdf6f0] font-light mb-2">{title}</h3>
                <p className="font-body text-sm text-[#fdf6f0]/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Colours ── */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(201,168,76,0.08), transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="max-w-5xl mx-auto">
          <SectionHeader tag={a.coloursTag} title={a.coloursTitle} subtitle={a.coloursSub} />
          <div className="flex flex-wrap justify-center gap-5 md:gap-7">
            {COLOURS.map(({ color, name }) => (
              <NailSwatch key={name} color={color} name={name} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader tag={a.worksTag} title={a.worksTitle} subtitle={a.worksSub} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {WORKS.map((label, i) => (
              <WorkCard key={i} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.instagram.com/dimi_nails_by_caroperez/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              See more on Instagram →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}